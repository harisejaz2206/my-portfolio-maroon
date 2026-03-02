import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Send, Home, Briefcase, Zap } from 'lucide-react';
import { PrimaryCTA } from './ui/primitives';
import { UpworkLink } from './ui/UpworkLink';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: <Home size={18} /> },
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Code2 size={18} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
  { id: 'services', label: 'Services', icon: <Zap size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Send size={18} /> },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const handleNavClick = (id: string) => {
    onSectionChange(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="border-b border-line/70 bg-surface-1/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-3">
            <div className="flex-shrink-0">
              <a href="#home" className="ring-focus rounded-md px-1 py-0.5">
                <span className="font-display text-lg font-bold text-brand">
                  harisejaz.com
                </span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`ring-focus relative rounded-md px-2 py-2 transition-all duration-300 group
                              ${isActive
                        ? 'text-brand'
                        : 'text-text-body hover:text-brand'
                      }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-md bg-brand-soft"
                        initial={false}
                        transition={{ type: 'spring', bounce: 0.18, duration: 0.5 }}
                      />
                    )}

                    <span className="relative flex items-center gap-1.5 sm:gap-2">
                      <span className="text-base">{item.icon}</span>
                      <span className="hidden sm:inline text-sm font-semibold">
                        {item.label}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <UpworkLink placement="navbar_link" variant="subtle" ariaLabel="Open Upwork profile">
                Upwork
              </UpworkLink>
              <PrimaryCTA
                href="#contact"
                className="px-4 py-2 text-sm"
              >
                Start a Project
              </PrimaryCTA>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
