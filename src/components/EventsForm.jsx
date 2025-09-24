import React, { useState } from 'react';
import './css/EventsForm.css';

const EventsForm = ({ isOpen, onClose, eventTitle = "Music Verse Event" }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Handle form submission here
      console.log('Form submitted:', formData);
      alert('Registration successful!');
      onClose();
      setFormData({ fullName: '', email: '', phone: '' });
    }
  };

  const handleCancel = () => {
    setFormData({ fullName: '', email: '', phone: '' });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="events-form-overlay">
      <div className="events-form-container">
        <div className="events-form-card">
          <div className="form-header">
            <h2 className="form-title">
              <span className="event-name">Music Verse</span>
              <span className="event-label">Event</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="events-form">
            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-user form-icon"></i>
                Enter your Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="EX: Mohamed Bahaa"
                className={`form-input ${errors.fullName ? 'error' : ''}`}
              />
              {errors.fullName && <span className="error-message">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-envelope form-icon"></i>
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Your Email"
                className={`form-input ${errors.email ? 'error' : ''}`}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">
                <i className="fas fa-phone form-icon"></i>
                Phone Number:
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter Your Phone Number"
                className={`form-input ${errors.phone ? 'error' : ''}`}
              />
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <button type="button" onClick={handleCancel} className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventsForm;