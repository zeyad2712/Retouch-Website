import { useState, useEffect, useRef } from 'react';
import './EventsSection.css';

const EventsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedEvents, setAnimatedEvents] = useState([]);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            console.log('EventsSection is now visible - starting animations');
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
    console.log('Starting event animations...');
    const events = [0, 1, 2]; // Event indices
    events.forEach((index, i) => {
      setTimeout(() => {
        console.log(`Animating event ${index}`);
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
                  {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="date-icon">
                    <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span className="date-text">{event.date}</span> */}
                  <i class="fa-solid fa-calendar-days"></i>
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
                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-details">
                  <div className="event-detail">
                    <i class="fa-solid fa-calendar-days"></i>
                    <span>{event.date}</span>
                  </div>
                  <div className="event-detail">
                    <i class="fa-solid fa-clock"></i>
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{event.type}</span>
                  </div>
                </div>
              </div>

              <button className="join-btn">Join Now</button>
            </div>
          ))}
        </div>

        <div className={`view-all-container ${isVisible ? 'animate-in' : ''}`}>
          <button className="view-all-btn">View All Events</button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
