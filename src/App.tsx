import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Navbar} from './components/Navbar';
import {Hero} from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
// import { Blog } from './components/sections/Blog';
import { Background } from './components/3d/Background';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';
function App() {
  const [activeSection, setActiveSection] = useState('home');

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
    <div className="min-h-screen fixed inset-0">
      <Background />
      <div className="absolute inset-0 overflow-y-auto">
        <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <section id="home" className="min-h-screen">
                <Hero />
              </section>

              <section id="about" className="min-h-screen">
                <About />
              </section>

              <section id="projects" className="min-h-screen">
                <Projects />
              </section>

              <section id="blog" className="min-h-screen">
                {/* <Blog /> */}
              </section>

              <section id="contact" className="min-h-screen">
                <Contact />
              </section>
            </AnimatePresence>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;