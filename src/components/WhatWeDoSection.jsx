import { React, useState, useEffect, useRef } from 'react';
import './WhatWeDoSection.css';

const WhatWeDoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedServices, setAnimatedServices] = useState([]);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            console.log('WhatWeDoSection is now visible - starting animations');
            setIsVisible(true);
            // Start staggered animation for services
            animateServices();
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

  // Animate services with staggered timing
  const animateServices = () => {
    console.log('Starting service animations...');
    const services = [0, 1, 2, 3, 4, 5]; // Service indices
    services.forEach((index, i) => {
      setTimeout(() => {
        console.log(`Animating service ${index}`);
        setAnimatedServices(prev => [...prev, index]);
      }, i * 100); // 100ms delay between each service for faster animation
    });
  };
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M16 13H8" stroke="currentColor" strokeWidth="2" />
          <path d="M16 17H8" stroke="currentColor" strokeWidth="2" />
          <path d="M10 9H8" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Digital Strategy",
      description: "Comprehensive digital marketing strategies tailored to your business goals and market dynamics."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 20h9" stroke="currentColor" strokeWidth="2" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      title: "Content Marketing",
      description: "Engaging content that resonates with your audience and drives meaningful conversions."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "SEO & SEM",
      description: "Improve your search visibility and drive qualified traffic through organic and paid search."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      ),
      title: "Social Media",
      description: "Build authentic connections and grow your community across all major social platforms."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Brand Development",
      description: "Create compelling brand identities that stand out and connect with your target audience."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize performance and maximize your marketing ROI."
    }
  ];

  return (
    <section className="what-we-do-section" ref={sectionRef}>
      <div className="what-we-do-container">
        <div className={`section-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="section-title">What We Do</h2>
          <p className="section-description">
            We offer a comprehensive suite of marketing services designed to accelerate your business growth and maximize your digital presence.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${animatedServices.includes(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className={`show-more-container ${isVisible ? 'animate-in' : ''}`}>
          <button className="show-more-btn">Show More...</button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
