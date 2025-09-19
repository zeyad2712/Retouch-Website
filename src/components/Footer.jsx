import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: Retouch Logo and Contact Us */}
        <div className="footer-column">
          <div className="footer-logo">
            <div className="logo-badge">
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8 2 4 6 4 10C4 14 8 18 12 18C16 18 20 14 20 10C20 6 16 2 12 2Z" fill="black"/>
                  <path d="M10.5 7.5C10.5 7.1 10.8 6.8 11.2 6.8C11.6 6.8 11.9 7.1 11.9 7.5C11.9 7.9 11.6 8.2 11.2 8.2C10.8 8.2 10.5 7.9 10.5 7.5Z" fill="white"/>
                  <path d="M13.5 7.5C13.5 7.1 13.8 6.8 14.2 6.8C14.6 6.8 14.9 7.1 14.9 7.5C14.9 7.9 14.6 8.2 14.2 8.2C13.8 8.2 13.5 7.9 13.5 7.5Z" fill="white"/>
                  <path d="M12 10.5C11.6 10.5 11.3 10.2 11.3 9.8C11.3 9.4 11.6 9.1 12 9.1C12.4 9.1 12.7 9.4 12.7 9.8C12.7 10.2 12.4 10.5 12 10.5Z" fill="white"/>
                </svg>
              </div>
              <span className="logo-text">Retouch</span>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="contact-section">
            <h3 className="section-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="contact-icon">
                  <path d="M2.5 3h11c.3 0 .5.2.5.5v9c0 .3-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M2.5 4l5.5 3.5L13.5 4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>support@Retouch.com</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="contact-icon">
                  <path d="M3.5 2.5h9c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-9c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M6.5 5.5h3M6.5 7.5h3M6.5 9.5h2" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                <span>+0210892773638223</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S4.4 1.5 8 1.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" fill="currentColor"/>
                  <path d="M5.5 6.5h1.5v4H5.5v-4zm1.5-2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm3.5 2h1.5v4H10.5v-4zm1.5-2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S4.4 1.5 8 1.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" fill="currentColor"/>
                  <path d="M5.5 6.5h1.5v4H5.5v-4zm1.5-2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm3.5 2h1.5v4H10.5v-4zm1.5-2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S4.4 1.5 8 1.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5z" fill="currentColor"/>
                  <path d="M5.5 6.5h1.5v4H5.5v-4zm1.5-2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm3.5 2h1.5v4H10.5v-4zm1.5-2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="footer-column">
          <h3 className="section-title">Services</h3>
          <ul className="footer-links">
            <li><Link to="/services/brand-development">Brand Development</Link></li>
            <li><Link to="/services/social-media">Social Media</Link></li>
            <li><Link to="/services/content-marketing">Content Marketing</Link></li>
            <li><Link to="/services/seo-sem">SEO & SEM</Link></li>
            <li><Link to="/services/social-media">Social Media</Link></li>
            <li><Link to="/services/social-media">Social Media</Link></li>
          </ul>
        </div>

        {/* Column 3: Platform */}
        <div className="footer-column">
          <h3 className="section-title">Platform</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>

        {/* Column 4: Subscribe */}
        <div className="footer-column">
          <h3 className="section-title">Subscribe</h3>
          <p className="subscribe-text">Subscribe Now For any New News</p>
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Enter your email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="email-input"
                required
              />
              <button type="submit" className="subscribe-btn">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
