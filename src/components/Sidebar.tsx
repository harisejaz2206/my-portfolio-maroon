import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, FolderGit2, Trophy } from 'lucide-react';
import { MenuItem } from '../types';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const menuItems: MenuItem[] = [
  { id: 'about', label: 'About Me', icon: <User size={24} /> },
  { id: 'projects', label: 'Projects', icon: <FolderGit2 size={24} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={24} /> },
  { id: 'achievements', label: 'Achievements', icon: <Trophy size={24} /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const handleSectionChange = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 right-0 bg-gradient-to-r from-[#800020] to-[#4A0011] text-white z-50
                 md:h-20 h-16 flex items-center justify-center px-4 shadow-lg"
    >
      <div className="flex space-x-6 md:space-x-12">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSectionChange(item.id)}
            className={`flex flex-col items-center justify-center transition-all duration-300 
                       ${activeSection === item.id ? 'text-white' : 'text-white/70 hover:text-white'}`}
          >
            <div className={`p-2 rounded-lg ${activeSection === item.id ? 'bg-white/20' : ''}`}>
              {item.icon}
            </div>
            <span className="text-sm mt-1 font-medium hidden md:block">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};