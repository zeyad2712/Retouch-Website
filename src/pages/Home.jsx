import React from 'react'

import HeroSection from '../components/HeroSection';
import WhatWeDoSection from '../components/WhatWeDoSection';
import OurImpactSection from '../components/OurImpactSection';
import EventsSection from '../components/EventsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <WhatWeDoSection />
      <OurImpactSection />
      <EventsSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Home;
