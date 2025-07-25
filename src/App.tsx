import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Education from './components/Education';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <UseCases />
      <Testimonials />
      <FAQ />
      <Education />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;