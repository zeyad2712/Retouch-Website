import { useState, useEffect, useRef } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedFAQs, setAnimatedFAQs] = useState([]);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            console.log('FAQSection is now visible - starting animations');
            setIsVisible(true);
            animateFAQs();
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

  // Animate FAQs with staggered timing
  const animateFAQs = () => {
    console.log('Starting FAQ animations...');
    const faqIndices = [0, 1, 2, 3]; // FAQ indices
    faqIndices.forEach((index, i) => {
      setTimeout(() => {
        console.log(`Animating FAQ ${index}`);
        setAnimatedFAQs(prev => [...prev, index]);
      }, i * 150); // 150ms delay between each FAQ
    });
  };
  
  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer: "Webflow is a visual web development platform that allows you to design, build, and launch responsive websites without writing code. It's considered one of the best website builders because it combines the ease of use of a visual editor with the power and flexibility of custom code, giving you complete control over your website's design and functionality."
    },
    {
      question: "How can I get started with your marketing services?",
      answer: "Getting started is easy! Simply contact us through our contact form or give us a call. We'll schedule a free consultation to understand your business goals and create a customized marketing strategy that fits your needs and budget."
    },
    {
      question: "What makes your approach different from other agencies?",
      answer: "Our strategy-first approach focuses on understanding your business objectives before implementing any tactics. We combine data-driven insights with creative execution to deliver sustainable growth, not just short-term results. Our team has years of experience across various industries and stays updated with the latest marketing trends and technologies."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with startups, small businesses, and large enterprises. Our services are scalable and can be tailored to meet the specific needs and budgets of businesses at any stage of growth. Whether you're just starting out or looking to scale your existing operations, we have solutions that can help."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="faq-container">
        <div className={`faq-header ${isVisible ? 'animate-in' : ''}`}>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            Got questions? We've got answers. Here are some of the most common questions we get from potential clients.
          </p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''} ${animatedFAQs.includes(index) ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span className="question-text">{faq.question}</span>
                <svg 
                  className={`faq-icon ${openIndex === index ? 'open' : ''}`}
                  width="30" 
                  height="30" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path 
                    d="M6 9l6 6 6-6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
