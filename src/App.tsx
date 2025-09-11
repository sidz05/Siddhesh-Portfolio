import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import PhotoGallery from './components/PhotoGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Siddhesh Patil | Portfolio";
    
    // Force dark mode
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }, []);

  return (
    <div className="font-sans bg-black text-white transition-colors duration-300 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certifications />
      <PhotoGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;