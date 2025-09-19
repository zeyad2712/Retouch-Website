import { useState, useEffect, useRef } from 'react';
import './css/TestimonialsSection.css';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);
  
  const testimonials = [
    {
      quote: "Retouch transformed our digital presence completely. Their strategic approach and attention to detail resulted in a 300% increase in our online engagement. The team's expertise in digital marketing is unmatched.",
      author: "Evelyn Daylord",
      title: "Corporate Web Planner",
      company: "TechCorp Solutions",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Working with Retouch has been a game-changer for our business. Their innovative strategies and data-driven approach helped us achieve record-breaking sales growth. Highly recommend their services!",
      author: "John Smith",
      title: "Marketing Director",
      company: "Growth Dynamics",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "The team at Retouch understands the Egyptian market like no other. Their localized approach and cultural insights helped us connect with our audience on a deeper level. Exceptional results!",
      author: "Sarah Johnson",
      title: "CEO",
      company: "Nile Ventures",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Retouch's technical expertise and creative vision brought our brand to life. Their comprehensive digital solutions increased our conversion rate by 250%. Outstanding partnership!",
      author: "Michael Brown",
      title: "CTO",
      company: "Innovate Egypt",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            console.log('TestimonialsSection is now visible - starting animations');
            setIsVisible(true);
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

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000); // Change every 4 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isVisible, testimonials.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const changeTestimonial = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 150);
  };

  const nextTestimonial = () => {
    changeTestimonial((currentTestimonial + 1) % testimonials.length);
    // Reset auto-play when user manually navigates
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevTestimonial = () => {
    changeTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
    // Reset auto-play when user manually navigates
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToTestimonial = (index) => {
    changeTestimonial(index);
    // Reset auto-play when user manually navigates
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        <div className={`testimonials-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what some of our amazing clients have to say about working with us.
          </p>
        </div>
        
        <div 
          className="testimonial-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="carousel-btn prev" onClick={prevTestimonial}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className={`testimonial-card ${isVisible ? 'animate-in' : ''} ${isTransitioning ? 'transitioning' : ''}`}>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#FFD700"/>
                </svg>
              ))}
            </div>
            
            <blockquote className="testimonial-quote">
              {testimonials[currentTestimonial].quote}
            </blockquote>
            
            <div className="testimonial-author">
              <img 
                src={testimonials[currentTestimonial].avatar} 
                alt={testimonials[currentTestimonial].author}
                className="author-avatar"
              />
              <div className="author-info">
                <div className="author-name">{testimonials[currentTestimonial].author}</div>
                <div className="author-title">{testimonials[currentTestimonial].title}</div>
                <div className="author-company">{testimonials[currentTestimonial].company}</div>
              </div>
            </div>
          </div>
          
          <button className="carousel-btn next" onClick={nextTestimonial}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="black">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className={`carousel-dots ${isVisible ? 'animate-in' : ''}`}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentTestimonial ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
