import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = [
        'home',
        'about',
        'education',
        'skills',
        'projects',
        'achievements',
        'certifications',
        'gallery',
        'contact',
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    var tl = gsap.timeline({ delay: 0.7 });
    
    // Navbar slides down with clip
    tl.from(".demo-navbar", {
      y: -40, 
      opacity: 0, 
      clipPath: "inset(0 10% 100% 10%)",
      duration: 1, 
      ease: "power2.out"
    }, 0);
    
    // Logo blurs in
    tl.from(".nav-logo", { 
      opacity: 0, 
      filter: "blur(8px)", 
      duration: 0.5 
    }, 0.3);
    
    // Links stagger in from left
    tl.from(".nav-link", {
      x: -20, 
      opacity: 0, 
      duration: 0.4,
      ease: "power2.out", 
      stagger: 0.1
    }, 0.4);
    
    // Link underlines sweep
    tl.to(".nav-link::after", { 
      width: "100%", 
      duration: 0.3, 
      stagger: 0.08 
    }, 0.7);
    tl.to(".nav-link::after", { 
      width: "0%", 
      duration: 0.2, 
      stagger: 0.08 
    }, 1.2);
    
    // CTA pops in with morph
    tl.from(".nav-cta", {
      scale: 0.5, 
      opacity: 0, 
      borderRadius: "8px",
      duration: 0.5, 
      ease: "back.out(1.7)"
    }, 0.6);
    tl.to(".cta-arrow", { 
      x: 4, 
      duration: 0.3, 
      ease: "power2.out", 
      yoyo: true, 
      repeat: 1 
    }, 1.2);
    
    return () => tl.kill(); // cleanup
  }, { scope: containerRef });

  const navItems = [
    { href: '#home', title: 'Home' },
    { href: '#about', title: 'About' },
    { href: '#education', title: 'Education' },
    { href: '#skills', title: 'Skills' },
    { href: '#projects', title: 'Projects' },
    { href: '#achievements', title: 'Achievements' },
    { href: '#certifications', title: 'Certifications' },
    { href: '#contact', title: 'Contact' }
  ];

  return (
    <div ref={containerRef}>
      <header className="fixed top-4 z-50 w-full flex justify-center">
        <div
          className={`demo-navbar flex items-center justify-between px-6 py-3 rounded-full shadow-lg transition-all duration-300 ${
            isScrolled
              ? 'bg-black/80 backdrop-blur-md border border-gray-700'
              : 'bg-black/60 backdrop-blur-sm'
          } w-[90%] md:w-[70%] max-w-4xl`}
        >
          {/* Logo */}
          <a
            href="#home"
            className="nav-logo flex items-center text-lg font-bold text-white"
          >
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-2">
              <span className="text-black font-bold text-sm">S</span>
            </div>
            Siddhesh
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`nav-link text-sm font-medium transition-all duration-300 relative ${
                      activeSection === item.href
                        ? 'text-teal-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    style={{
                      position: 'relative'
                    }}
                  >
                    {item.title}
                    {activeSection === item.href && (
                      <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-teal-400 rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="nav-cta hidden md:flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-black font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact
            <span className="cta-arrow">→</span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-teal-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav (below pill) */}
        {isOpen && (
          <div className="absolute top-16 w-[90%] md:hidden bg-black/95 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700 px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.href
                    ? 'text-teal-400'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* CSS for nav-link underline animation */}
      <style jsx>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #14b8a6, #06b6d4);
          border-radius: 1px;
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Navbar;