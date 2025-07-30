import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

