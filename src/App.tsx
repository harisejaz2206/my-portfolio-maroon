import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from './components/Sidebar';
import { About } from './components/sections/About';
import { Education } from './components/sections/Education';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 fixed inset-0">
      <Background />
      <div className="absolute inset-0 overflow-y-auto">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <section id="about" className="min-h-screen">
                <About />
              </section>

              <section id="education" className="min-h-screen">
                <Education />
              </section>

              <section id="projects" className="min-h-screen">
                <Projects />
              </section>

              <section id="experience" className="min-h-screen">
                <ExperienceSection />
              </section>

              <section id="achievements" className="min-h-screen">
                <Achievements />
              </section>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;