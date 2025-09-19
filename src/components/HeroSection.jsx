import { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [conversionRate, setConversionRate] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [servicesPercent, setServicesPercent] = useState(0);
  const [socialMediaPercent, setSocialMediaPercent] = useState(0);
  const [emailPercent, setEmailPercent] = useState(0);
  
  // Hero metrics state
  const [happyClients, setHappyClients] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [roiAverage, setRoiAverage] = useState(0);

  // Easing function for smooth animation
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4);

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000; // 2 seconds total animation
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Apply easing
        const easedProgress = easeOutCubic(progress);
        const chartEasedProgress = easeOutQuart(progress);

        // Animate dashboard metrics with staggered timing
        const dashboardDelay = 0.1;
        const dashboardProgress = Math.max(0, (progress - dashboardDelay) / (1 - dashboardDelay));
        const dashboardEased = easeOutCubic(dashboardProgress);

        if (progress >= dashboardDelay) {
          setConversionRate(Math.round(47 * dashboardEased));
          setRevenue(12.4 * dashboardEased);
          setServicesPercent(Math.round(25 * chartEasedProgress));
          setSocialMediaPercent(Math.round(50 * chartEasedProgress));
          setEmailPercent(Math.round(10 * chartEasedProgress));
        }

        // Animate hero metrics with different timing
        const heroDelay = 0.3;
        const heroProgress = Math.max(0, (progress - heroDelay) / (1 - heroDelay));
        const heroEased = easeOutCubic(heroProgress);

        if (progress >= heroDelay) {
          setHappyClients(Math.round(150 * heroEased));
          setSuccessRate(Math.round(98 * heroEased));
          setRoiAverage(5 * heroEased);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const timer = setTimeout(animateNumbers, 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Section */}
          <div className="hero-left">
            <h1 className="hero-title">
              Grow faster with <span className="highlight">strategy-first</span> marketing.
            </h1>
            <p className="hero-description">
              We help ambitious brands achieve sustainable growth through data-driven marketing strategies and cutting-edge digital experiences.
            </p>
            <div className="hero-metrics">
              <div className="metric">
                <div className="metric-number">{happyClients}+</div>
                <div className="metric-label">Happy Clients</div>
              </div>
              <div className="metric">
                <div className="metric-number">{successRate}%</div>
                <div className="metric-label">success rate</div>
              </div>
              <div className="metric">
                <div className="metric-number highlight">{roiAverage.toFixed(1)}X</div>
                <div className="metric-label">ROI Average</div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="hero-right">
            <div className="dashboard-card">
              <div className="dashboard-header d-flex justify-content-between align-items-center">
                <h3>Campaign Dashboard</h3>
                <div className="dashboard-header-decorations"
                  style={{
                    background: '#FFF266',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                  }}>
                </div>

              </div>
              <div className="dashboard-content">
                  <div className="dashboard-metrics">
                    <div className="dashboard-metric">
                      <div className="metric-value">{conversionRate}%</div>
                      <div className="metric-label">Conversion Rate</div>
                    </div>
                    <div className="dashboard-metric">
                      <div className="metric-value">{revenue.toFixed(1)}K.E0</div>
                      <div className="metric-label">Revenue</div>
                    </div>
                  </div>
                <div className="dashboard-chart">
                  <div className="chart-item">
                    <div className="chart-bar" style={{ width: `${servicesPercent}%` }}></div>
                    <span>Services - {servicesPercent}%</span>
                  </div>
                  <div className="chart-item">
                    <div className="chart-bar" style={{ width: `${socialMediaPercent}%` }}></div>
                    <span>Social Media - {socialMediaPercent}%</span>
                  </div>
                  <div className="chart-item">
                    <div className="chart-bar" style={{ width: `${emailPercent}%` }}></div>
                    <span>Email - {emailPercent}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
