import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './css/EventsSection.css';
import EventsForm from './EventsForm';

const EventsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedEvents, setAnimatedEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateEvents();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Animate events with staggered timing
  const animateEvents = () => {
    const events = [0, 1, 2]; // Event indices
    events.forEach((index, i) => {
      setTimeout(() => {
        setAnimatedEvents(prev => [...prev, index]);
      }, i * 200); // 200ms delay between each event
    });
  };

  const events = [
    {
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 8, 2025",
      time: "3:00 PM - 4:00 PM",
      type: "Online Event",
      attendees: "200"
    },
    {
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 8, 2025",
      time: "3:00 PM - 4:00 PM",
      type: "Online Event",
      attendees: "200"
    },
    {
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 8, 2025",
      time: "3:00 PM - 4:00 PM",
      type: "Online Event",
      attendees: "200"
    }
  ];

  const handleJoinNow = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedEvent(null);
  };

  return (
    <section className="events-section" ref={sectionRef}>
      <div className="events-container">
        <div className={`events-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="events-title">Upcoming Events</h2>
          <p className="events-description">
            Join our exclusive events and workshops to stay ahead of the latest marketing trends and network with industry professionals.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <div
              key={index}
              className={`event-card ${animatedEvents.includes(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="event-header">
                <div className="date-icon">
                  <i className="fa-solid fa-calendar-days"></i>
                </div>
                <div className="attendees-info">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="attendees-icon">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M2.5 14v-1.5A2.5 2.5 0 0 1 5 10h6a2.5 2.5 0 0 1 2.5 2.5V14" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                  <span className="attendees-count">{event.attendees}</span>
                </div>
              </div>

              <div className="event-content">
                <h3 className="event-title text-white">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div className="event-detail">
                    <i className="fa-solid fa-calendar-days"></i>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <i className="fa-solid fa-clock"></i>
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <i className="fa-solid fa-location-dot"></i>
                    <span>{event.type}</span>
                  </div>
                </div>
              </div>

              <button className="join-btn" onClick={() => handleJoinNow(event)}>Join Now</button>
            </div>
          ))}
        </div>

        <div className={`view-all-container ${isVisible ? 'animate-in' : ''}`}>
          <Link to="/events">
            <button className="view-all-btn">View All Events</button>
          </Link>
        </div>
      </div>

      {showForm && (
        <div className="events-form-popup" style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            background: '#fff',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
            padding: '2rem',
            minWidth: '320px',
            maxWidth: '90vw',
            position: 'relative'
          }}>
            <button
              onClick={handleCloseForm}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#333'
              }}
              aria-label="Close"
            >
              &times;
            </button>
            <EventsForm
              isOpen={showForm}
              onClose={handleCloseForm}
              eventTitle={selectedEvent ? selectedEvent.title : undefined}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsSection;
