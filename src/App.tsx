import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import OpenSource from './components/OpenSource';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects />
      <CaseStudies />
      <OpenSource />
      <Certifications />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

