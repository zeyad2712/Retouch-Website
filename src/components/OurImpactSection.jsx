import { useState, useEffect, useRef } from 'react';
import './css/OurImpactSection.css';

const OurImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedMetrics, setAnimatedMetrics] = useState([]);
  const [clientsCount, setClientsCount] = useState(0);
  const [experienceCount, setExperienceCount] = useState(0);
  const [growthCount, setGrowthCount] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            console.log('OurImpactSection is now visible - starting animations');
            setIsVisible(true);
            animateMetrics();
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

  // Animate metrics with staggered timing
  const animateMetrics = () => {
    console.log('Starting metric animations...');
    const metrics = [0, 1, 2]; // Metric indices
    metrics.forEach((index, i) => {
      setTimeout(() => {
        console.log(`Animating metric ${index}`);
        setAnimatedMetrics(prev => [...prev, index]);
        // Start counting animation for each metric
        animateCount(index);
      }, i * 150); // 150ms delay between each metric
    });
  };

  // Animate counting for each metric
  const animateCount = (metricIndex) => {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      if (metricIndex === 0) {
        // Clients: 0 to 30
        setClientsCount(Math.floor(easedProgress * 30));
      } else if (metricIndex === 1) {
        // Experience: 0 to 5
        setExperienceCount(Math.floor(easedProgress * 5));
      } else if (metricIndex === 2) {
        // Growth: 0 to 60
        setGrowthCount(Math.floor(easedProgress * 60));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };
  return (
    <section className="our-impact-section" ref={sectionRef}>
      <div className="our-impact-container">
        <div className="impact-content">
          <div className="impact-left">
            <div className={`impact-card ${isVisible ? 'animate-in' : ''}`}>
              <h3 className="impact-card-title">Our Impact</h3>
              <div className="impact-metrics-grid">
                <div className={`impact-metric-box clients-box ${animatedMetrics.includes(0) ? 'animate-in' : ''}`}>
                  <div className="impact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" />
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="impact-metric-content">
                    <div className="impact-number">{clientsCount}+</div>
                    <div className="impact-label">Clients Served</div>
                  </div>
                </div>
                <div className={`impact-metric-box experience-box ${animatedMetrics.includes(1) ? 'animate-in' : ''}`}>
                  <div className="impact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="impact-metric-content">
                    <div className="impact-number">{experienceCount}+</div>
                    <div className="impact-label">Years Experience</div>
                  </div>
                </div>
                <div className={`impact-metric-box growth-box ${animatedMetrics.includes(2) ? 'animate-in' : ''}`}>
                  <div className="impact-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" />
                      <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="impact-metric-content">
                    <div className="impact-number">{growthCount}%</div>
                    <div className="impact-label">Avg. Growth</div>
                  </div>
                </div>
              </div>
              <div className="impact-decorations">
                <div className="decoration-circle circle-1"></div>
                <div className="decoration-circle circle-2"></div>
              </div>
            </div>
          </div>
          <div className={`impact-right ${isVisible ? 'animate-in' : ''}`}>
            <h2 className="impact-title">
              We're the growth partner you've been looking for
            </h2>
            <div className="impact-text">
              <p>
                At Retouch, we understand that sustainable growth requires more than just marketing tactics.
                It demands a strategic approach that aligns with your business objectives and market dynamics.
              </p>
              <p>
                Our team of experienced professionals combines deep industry knowledge with cutting-edge
                digital tools to deliver results that matter. We don't just execute campaigns – we build
                long-term partnerships that drive meaningful growth.
              </p>
            </div>
            <button className="learn-more-btn">Learn More About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpactSection;
