import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, BookOpen, ExternalLink, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between py-24 md:py-36 gap-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.5 }}
          animate={{ 
            scale: [1.1, 1.15, 1.1],
            opacity: [0.5, 0.6, 0.5]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-sky-100/40 to-indigo-100/40 blur-3xl"
        />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.4 }}
          animate={{ 
            scale: [1.1, 1.2, 1.1],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-rose-100/30 to-amber-100/30 blur-3xl"
        />
      </div>
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-8 z-10"
      >
        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 font-display tracking-tight">
            <span className="block mb-3">Hi, I'm</span>
            <motion.span 
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-r from-sky-500 via-indigo-500 to-sky-500 bg-clip-text text-transparent bg-[size:200%]"
            >
              Haris Ejaz
            </motion.span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 flex items-center">
            <Sparkles size={18} className="text-amber-500 mr-2" />
            Founder & Solopreneur @ Quickevent.app
          </h2>
          <h2 className="text-xl md:text-2xl font-semibold text-slate-700 flex items-center mt-2">
            <Sparkles size={18} className="text-red-500 mr-2" />
            Creator @ F1IQ.com
          </h2>
        </div>
        
        <p className="text-slate-600 text-xl font-medium max-w-xl leading-relaxed">
          Building profitable <span className="font-bold text-indigo-600">micro-SaaS</span> for creators and racing fans. Turning ideas into streamlined, user-focused solutions one project at a time.
        </p>
        
        {/* F1IQ Endorsement with tooltip */}
        <div className="relative flex items-center bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg p-3 border border-slate-200 max-w-xl group">
          <motion.div 
            initial={{ opacity: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="mr-3 flex-shrink-0"
          >
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqMZTpbP5WbVTQPFQzW5ITrZII8ubb0CveA&s" 
              alt="F1 Logo" 
              className="w-10 h-10 object-contain"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/40x40/f0f0f0/ff1e00?text=F1";
              }}
            />
          </motion.div>
          <div className="relative">
            <p className="text-sm text-slate-700 leading-snug">
              <span className="font-bold text-slate-900">F1IQ.com</span> — endorsed by <span className="font-semibold underline decoration-dotted cursor-pointer">Ian Brunton</span>, Head of Software Engineering at Red Bull Racing.
            </p>
            
            {/* Tooltip with endorsement image - positioned to the right */}
            <div className="absolute z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 
                          top-0 -right-2 transform translate-x-full scale-95 group-hover:scale-100">
              <div className="relative bg-white p-4 rounded-lg shadow-xl border border-slate-200 w-96">
                <div className="absolute top-4 -left-2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-b border-slate-200"></div>
                <img 
                  src="/images/ian-endorsement-dm.png" 
                  alt="Ian Brunton's Endorsement" 
                  className="w-full rounded shadow-sm"
                />
                <p className="text-xs text-slate-500 mt-3 text-center italic">Hover to see the endorsement</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4 flex gap-5">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg text-lg font-bold shadow-md hover:shadow-xl transition-all duration-300"
          >
            See My Work
          </motion.a>
          
          <motion.a
            href="https://quickevent.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3, borderColor: "#3b82f6" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white border-2 border-slate-200 text-sky-600 rounded-lg text-lg font-bold shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2 group"
          >
            <span>Check Quickevent.app</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
        
        <div className="flex gap-5 pt-6">
          <SocialLink href="https://github.com/harisejaz2206" icon={<Github size={22} />} />
          <SocialLink href="https://www.linkedin.com/in/harisejaz22/" icon={<Linkedin size={22} />} />
          <SocialLink href="https://harisejaz.substack.com/" icon={<BookOpen size={22} />} />
        </div>
      </motion.div>
      
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative flex-1 flex justify-center md:justify-end z-10"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {/* Animated gradient background */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.7, 0.5] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut" 
            }}
            className="absolute inset-0 bg-gradient-to-r from-sky-200 via-indigo-200 to-purple-200 rounded-full blur-2xl"
          />
          
          {/* Image container with animated border */}
          <motion.div 
            className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-xl"
            animate={{ 
              boxShadow: [
                "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                "0 15px 30px -5px rgba(99, 102, 241, 0.5)",
                "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              ]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut" 
            }}
          >
            <img
              src="/images/profilepic.png"
              alt="Haris Ejaz"
              className="w-full h-full object-cover"
            />
          </motion.div>
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
    whileHover={{ scale: 1.15, y: -4 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-slate-200 text-slate-600 shadow-sm hover:shadow-md transition-all duration-300 hover:text-sky-500 hover:border-sky-300"
  >
    {icon}
  </motion.a>
); 