import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, BookOpen, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32 gap-10">
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 space-y-6"
      >
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-800">
            <span className="block mb-2">Hi, I'm</span>
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              Haris Ejaz
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-600">
            Founder & Solopreneur @ Quickevent.app
          </h2>
        </div>
        
        <p className="text-slate-600 text-lg max-w-lg">
          Building profitable micro-SaaS for creators and racing fans. Turning ideas into streamlined, user-focused solutions one project at a time.
        </p>
        
        <div className="flex gap-4 pt-2">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
          >
            See My Work
          </motion.a>
          
          <motion.a
            href="https://quickevent.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-white border border-sky-200 text-sky-600 rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <span>Check Quickevent</span>
            <ExternalLink size={16} />
          </motion.a>
        </div>
        
        <div className="flex gap-4 pt-4">
          <SocialLink href="https://github.com/harisejaz2206" icon={<Github size={20} />} />
          <SocialLink href="https://www.linkedin.com/in/harisejaz22/" icon={<Linkedin size={20} />} />
          <SocialLink href="https://harisejaz.substack.com/" icon={<BookOpen size={20} />} />
        </div>
      </motion.div>
      
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative flex-1 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-200 to-indigo-200 rounded-full blur-2xl opacity-50"></div>
          {/* Image container */}
          <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src="/images/profilepic.png"
              alt="Haris Ejaz"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon
}) => (
  <motion.a
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-600 shadow-sm hover:shadow-md transition-all duration-300 hover:text-sky-500 hover:border-sky-300"
  >
    {icon}
  </motion.a>
); 