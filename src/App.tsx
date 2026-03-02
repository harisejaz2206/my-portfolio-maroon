import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { ExperienceSection } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Background } from './components/3d/Background';
import { Footer } from './components/Footer';
import { Services } from './components/sections/Services';

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
    <div className="min-h-screen">
      <Background />
      <Navbar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="relative z-10 pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section id="home" className="min-h-screen">
            <Hero />
          </section>

          <section id="about" className="py-section">
            <About />
          </section>

          <section id="projects" className="py-section">
            <Projects />
          </section>

          <section id="experience" className="py-section">
            <ExperienceSection />
          </section>

          <section id="services" className="py-section">
            <Services />
          </section>

          <section id="contact" className="py-section">
            <Contact />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
