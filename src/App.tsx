import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Certifications />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

