import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/images/logos/fb and old ig 1.png';
import './css/Footer.css';

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
                <img src={logo} alt="Retouch" srcset="" width={200} height={50} />
              </div>
              {/* <span className="logo-text">Retouch</span> */}
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="contact-section">
            <h3 className="section-title">Contact Us</h3>
            <div className="contact-info">
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="contact-icon">
                  <path d="M2.5 3h11c.3 0 .5.2.5.5v9c0 .3-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5v-9c0-.3.2-.5.5-.5z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M2.5 4l5.5 3.5L13.5 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
                <span>support@Retouch.com</span>
              </div>
              <div className="contact-item">
                <i class="fa-solid fa-phone"></i>
                <span>+0210892773638223</span>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="social-link">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="social-link">
              <i class="fa-brands fa-instagram"></i>
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
