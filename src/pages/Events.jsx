import { useState, useRef, useEffect } from 'react';
import './css/Events.css';
import EventsForm from '../components/EventsForm';

// Helper hook for intersection observer animation
function useInViewAnimation(threshold = 0.15) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Our Events data (light section)
  const ourEvents = [
    {
      id: 1,
      title: "Music Verse",
      subtitle: "A Music Experience to Remember",
      date: "Sunday, December 25, 2023, 10:00 AM",
      location: "905, Cairo",
      ticket: "Free Ticket",
      image: "/images/events-images/frame1000003581.png"
    },
    {
      id: 2,
      title: "Music Verse",
      subtitle: "A Music Experience to Remember",
      date: "Sunday, December 25, 2023, 10:00 AM",
      location: "905, Cairo",
      ticket: "Free Ticket",
      image: "/images/events-images/frame1000003581.png"
    },
    {
      id: 3,
      title: "Music Verse",
      subtitle: "A Music Experience to Remember",
      date: "Sunday, December 25, 2023, 10:00 AM",
      location: "905, Cairo",
      ticket: "Free Ticket",
      image: "/images/events-images/frame1000003581.png"
    },
    {
      id: 4,
      title: "Music Verse",
      subtitle: "A Music Experience to Remember",
      date: "Sunday, December 25, 2023, 10:00 AM",
      location: "905, Cairo",
      ticket: "Free Ticket",
      image: "/images/events-images/frame1000003581.png"
    }
  ];

  // Upcoming Events data (dark section)
  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 5, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Online Event",
      attendees: "200"
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 5, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Online Event",
      attendees: "200"
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 5, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Online Event",
      attendees: "200"
    },
    {
      id: 4,
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 5, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Online Event",
      attendees: "200"
    },
    {
      id: 5,
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 5, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Online Event",
      attendees: "200"
    },
    {
      id: 6,
      title: "Digital Marketing Masterclass",
      description: "Learn advanced digital marketing strategies from industry experts.",
      date: "Apr 5, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "Online Event",
      attendees: "200"
    }
  ];

  const filteredOurEvents = ourEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation for sections
  const [ourEventsRef, ourEventsInView] = useInViewAnimation();
  const [upcomingEventsRef, upcomingEventsInView] = useInViewAnimation();

  const handleJoinNow = (event) => {
    setSelectedEvent(event);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-page">
      {/* Our Events Section - Light Background */}
      <section
        className={`our-events-section animated-section${ourEventsInView ? ' in-view' : ''}`}
        ref={ourEventsRef}
      >
        <div className="our-events-container">
          <div className="our-events-header">
            <h1 className="our-events-title">Our Events</h1>
            <p className="our-events-description">
              Stay updated with our latest marketing events and workshops
            </p>
          </div>

          <div className="search-container">
            <div className="search-bar">
              <i className="fas fa-search search-icon"></i>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>

          <div className="our-events-grid">
            {filteredOurEvents.length > 0 ? (
              filteredOurEvents.map((event, idx) => {
                // Animation for each card
                const [cardRef, cardInView] = useInViewAnimation();
                return (
                  <div
                    key={event.id}
                    className={`our-event-card animated-card${cardInView ? ' in-view' : ''}`}
                    ref={cardRef}
                    style={{ transitionDelay: `${idx * 80}ms` }}
                  >
                    <div className="event-image">
                      <img src={event.image} alt={event.title} />
                    </div>
                    <div className="event-content">
                      <h3 className="event-title">{event.title}</h3>
                      <p className="event-subtitle">{event.subtitle}</p>
                      <div className="event-details">
                        <div className="event-detail">
                          <i className="fas fa-calendar"></i>
                          <span>{event.date}</span>
                        </div>
                        <div className="event-detail">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{event.location}</span>
                        </div>
                        <div className="event-detail">
                          <i className="fas fa-ticket-alt"></i>
                          <span>{event.ticket}</span>
                        </div>
                      </div>
                      <button
                        className="join-now-btn"
                        onClick={() => handleJoinNow(event)}
                      >
                        Join Now
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="no-events-found">
                <div className="no-events-content">
                  <i className="fas fa-search no-events-icon"></i>
                  <h3>No events found</h3>
                  <p>Try adjusting your search terms or browse all our events.</p>
                  <button
                    className="clear-search-btn"
                    onClick={() => setSearchTerm('')}
                  >
                    Clear Search
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section - Dark Background */}
      <section
        className={`upcoming-events-section animated-section${upcomingEventsInView ? ' in-view' : ''}`}
        ref={upcomingEventsRef}
      >
        <div className="upcoming-events-container">
          <div className="upcoming-events-header">
            <h2 className="upcoming-events-title">Upcoming Events</h2>
            <p className="upcoming-events-description">
              Join our exclusive events and workshops to stay ahead of the latest marketing trends and network with industry professionals
            </p>
          </div>

          <div className="upcoming-events-grid">
            {upcomingEvents.map((event, idx) => {
              const [cardRef, cardInView] = useInViewAnimation();
              return (
                <div
                  key={event.id}
                  className={`upcoming-event-card animated-card${cardInView ? ' in-view' : ''}`}
                  ref={cardRef}
                  style={{ transitionDelay: `${idx * 80}ms` }}
                >
                  <div className="event-header">
                    <div className="date-icon">
                      <i className="fas fa-calendar-days"></i>
                    </div>
                    <div className="attendees-info">
                      <i className="fas fa-user"></i>
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                  <div className="event-content">
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-description">{event.description}</p>
                    <div className="event-details">
                      <div className="event-detail">
                        <i className="fas fa-calendar"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="event-detail">
                        <i className="fas fa-clock"></i>
                        <span>{event.time}</span>
                      </div>
                      <div className="event-detail">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="join-now-btn-dark"
                    onClick={() => handleJoinNow(event)}
                  >
                    Join Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Animation styles */}
      <style>{`
         .animated-section {
           opacity: 0;
           transform: translateY(40px);
           transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
         }
         .animated-section.in-view {
           opacity: 1;
           transform: none;
         }
         .animated-card {
           opacity: 0;
           transform: translateY(40px) scale(0.98);
           transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1);
         }
         .animated-card.in-view {
           opacity: 1;
           transform: none;
         }
       `}</style>

      {/* Events Form Popup */}
      <EventsForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        eventTitle={selectedEvent?.title || "Music Verse Event"}
      />
    </div>
  );
};

export default Events;
