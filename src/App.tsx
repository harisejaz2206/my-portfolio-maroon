import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { ExperienceSection } from './components/sections/Experience';
import { Achievements } from './components/sections/Achievements';
import { Background } from './components/3d/Background';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen">
      <Background />
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <section id="about" className="min-h-screen py-16">
              <About />
            </section>
            
            <section id="projects" className="min-h-screen py-16">
              <Projects />
            </section>
            
            <section id="experience" className="min-h-screen py-16">
              <ExperienceSection />
            </section>
            
            <section id="achievements" className="min-h-screen py-16">
              <Achievements />
            </section>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

export default App;