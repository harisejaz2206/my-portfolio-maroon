import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Send, Home, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: <Home size={18} /> },
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'projects', label: 'Projects', icon: <Code2 size={18} /> },
  { id: 'blog', label: 'Blog', icon: <FileText size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Send size={18} /> },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionChange }) => {
  const handleNavClick = (id: string) => {
    onSectionChange(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Subtle shadow for depth */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-xl font-semibold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">HE</span>
            </div>
            
            {/* Navigation items */}
            <div className="flex items-center justify-center space-x-1 sm:space-x-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 group
                              ${isActive
                        ? 'text-sky-600'
                        : 'text-slate-600 hover:text-sky-600'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background for active state */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-sky-100 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Icon and label */}
                    <span className="relative flex items-center gap-1 sm:gap-2">
                      <span className="text-lg sm:text-xl">{item.icon}</span>
                      <span className="hidden sm:inline text-sm font-medium">
                        {item.label}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 