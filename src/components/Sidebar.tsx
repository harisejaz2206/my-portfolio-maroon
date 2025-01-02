import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Briefcase, Trophy } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navItems = [
  { id: 'about', label: 'About', icon: <User size={20} /> },
  { id: 'projects', label: 'Projects', icon: <Code2 size={20} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={20} /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const handleNavClick = (id: string) => {
    onSectionChange(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient line at top */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

      {/* Navigation bar */}
      <nav className="bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center justify-center space-x-1 sm:space-x-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-2 sm:px-4 py-2 rounded-lg transition-all duration-300 group
                              ${isActive
                        ? 'text-purple-400'
                        : 'text-gray-400 hover:text-purple-400'
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Background glow for active state */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 bg-purple-500/10 rounded-lg"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}

                    {/* Icon and label */}
                    <span className="relative flex items-center gap-1 sm:gap-2">
                      {/* Icon is always visible */}
                      <span className="text-lg sm:text-xl">{item.icon}</span>
                      {/* Label hidden on mobile, visible on sm breakpoint and up */}
                      <span className="hidden sm:inline text-sm font-medium">
                        {item.label}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};