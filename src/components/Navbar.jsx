import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isServicesOpen && !event.target.closest('.dropdown')) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isServicesOpen]);

    return (
        <div className="navbar-container">
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                {/* Logo Section */}
                <div className="navbar-logo">
                    <div className="logo-icon">
                        <img src="images/logos/fb_and_old_ig-removebg-preview 1.png" alt="Retouch Logo" className='w-40' />
                    </div>
                    {/* <span className="logo-text">Retouch</span> */}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>

                {/* Navigation Links */}
                <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/events"
                        className={`nav-link ${location.pathname === '/events' ? 'active' : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Events
                    </Link>
                    <div
                        className={`nav-link dropdown ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                        onClick={() => {
                            // console.log('Services clicked, current state:', isServicesOpen);
                            setIsServicesOpen(!isServicesOpen);
                        }}
                    >
                        Services
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className={`dropdown-arrow ${isServicesOpen ? 'active' : ''}`}>
                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {isServicesOpen && (
                            <div className="dropdown-menu">
                                <Link
                                    to="/services/photo-editing"
                                    className={`dropdown-item ${location.pathname === '/services/photo-editing' ? 'active' : ''}`}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    Photo Editing
                                </Link>
                                <Link
                                    to="/services/retouching"
                                    className={`dropdown-item ${location.pathname === '/services/retouching' ? 'active' : ''}`}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    Retouching
                                </Link>
                                <Link
                                    to="/services/color-correction"
                                    className={`dropdown-item ${location.pathname === '/services/color-correction' ? 'active' : ''}`}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    Color Correction
                                </Link>
                                <Link
                                    to="/services/background-removal"
                                    className={`dropdown-item ${location.pathname === '/services/background-removal' ? 'active' : ''}`}
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsServicesOpen(false);
                                    }}
                                >
                                    Background Removal
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Contact Button - Mobile Only */}
                    <div className="navbar-actions mobile-only">
                        <Link
                            to="/contact"
                            className={`contact-btn mobile-contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Contact Button - Desktop Only */}
                <div className="navbar-actions desktop-only">
                    <Link
                        to="/contact"
                        className={`contact-btn desktop-contact-btn ${location.pathname === '/contact' ? 'active' : ''}`}
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
