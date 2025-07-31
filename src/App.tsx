import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import OpenSource from './components/OpenSource';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-300">
      <Navbar />
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <TechnicalSkills />
        </section>
        <Services />
        <section id="projects">
          <Projects />
        </section>
        <CaseStudies />
        <OpenSource />
        <Certifications />
        <Resume />
        <Testimonials />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}

export default App;

