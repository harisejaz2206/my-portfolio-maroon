import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, BookOpen, ExternalLink, Sparkles, Trophy, ArrowRight, Clock, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  const raceLineRef = useRef<SVGPathElement>(null);
  const controls = useAnimation();
  const [showEndorsement, setShowEndorsement] = useState(false);
  
  useEffect(() => {
    // Start the race line animation after component mounts
    controls.start({
      strokeDashoffset: 0,
      transition: { duration: 3, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between py-12 md:py-20 gap-8 overflow-hidden">
      {/* Racing-themed data line (F1-inspired circuit) */}
      <svg 
        className="absolute inset-0 w-full h-full -z-10 opacity-50" 
        viewBox="0 0 1000 600" 
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          ref={raceLineRef}
          d="M-100,300 C50,100 150,500 300,300 S500,100 700,300 S900,500 1100,300"
          stroke="url(#raceLineGradient)"
          strokeWidth="3"
          strokeDasharray="1800"
          initial={{ strokeDashoffset: 1800 }}
          animate={controls}
          fill="none"
        />
        <defs>
          <linearGradient id="raceLineGradient" x1="0" y1="0" x2="100%" y2="0">
            <stop offset="0%" stopColor="#ff1e00" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Animated background elements with racing-inspired theme */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.4 }}
          animate={{ 
            scale: [1.1, 1.15, 1.1],
            opacity: [0.4, 0.5, 0.4]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 15,
            ease: "easeInOut" 
          }}
          className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-sky-100/30 to-indigo-100/30 blur-3xl"
        />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0.3 }}
          animate={{ 
            scale: [1.1, 1.2, 1.1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute -bottom-60 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-red-100/20 to-amber-100/20 blur-3xl"
        />
      </div>
      
      {/* Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-5 z-10"
      >
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 font-display tracking-tight">
            <span className="block mb-2">Hi, I'm</span>
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
        
        <div className="relative p-1 bg-gradient-to-r from-slate-800/5 to-slate-800/10 rounded-xl backdrop-blur-sm">
          <p className="text-slate-700 text-xl font-medium max-w-xl leading-relaxed p-4">
            Crafting <span className="font-bold text-indigo-600">no-BS micro-SaaS</span> that solves real problems. 
            I build tools for creators who hate bloated software and racing fans craving data-driven insights.
            <span className="block mt-2 text-lg text-slate-600 italic">Because life's too short for clunky UIs.</span>
          </p>
        </div>
        
        {/* Stats cards row */}
        <div className="flex flex-wrap gap-4">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2"
          >
            <Clock className="text-indigo-500" size={18} />
            <span className="text-sm font-medium">Shipped 3 products in 2023</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 flex items-center gap-2"
          >
            <Users className="text-sky-500" size={18} />
            <span className="text-sm font-medium">Serving 5K+ users monthly</span>
          </motion.div>
        </div>
        
        {/* F1IQ Endorsement Badge */}
        <div 
          className="relative max-w-xl group"
          onMouseEnter={() => setShowEndorsement(true)}
          onMouseLeave={() => setShowEndorsement(false)}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-600 rounded-xl blur-[1px]"></div>
            <div className="relative bg-white rounded-lg p-4 shadow-lg border border-slate-100 overflow-hidden">
              {/* Racing stripe accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600 bg-[length:200%_100%]"></div>
              
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-600 rounded-full blur-[1px]"></div>
                  <div className="relative p-0.5 rounded-full bg-gradient-to-r from-red-500 to-blue-600">
                    <div className="bg-white p-1 rounded-full">
                      <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKqMZTpbP5WbVTQPFQzW5ITrZII8ubb0CveA&s" 
                        alt="F1 Logo" 
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.currentTarget.src = "https://placehold.co/40x40/f0f0f0/ff1e00?text=F1";
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900 text-lg">F1IQ.com</span>
                    <Trophy size={15} className="text-amber-500" />
                  </div>
                  <p className="text-sm text-slate-700">
                    "Incredible resource for F1 data nerds" —<span className="font-semibold text-slate-800"> Ian Brunton</span>, 
                    <span className="text-red-600 font-medium"> Head of Software Engineering at Red Bull Racing.</span>
                  </p>
                </div>
              </div>
              
              {/* Visual hover indicator */}
              <div className="mt-2 text-xs flex items-center justify-end text-slate-500 ml-auto">
                <span className="group-hover:text-sky-600 transition-colors">Hover to view endorsement</span>
                <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 group-hover:text-sky-600 transition-transform" />
              </div>
            </div>
          </motion.div>
          
          {/* Tooltip implementation */}
          {showEndorsement && (
            <div className="absolute z-50 top-0 -right-2 transform translate-x-full">
              <div className="relative bg-white p-4 rounded-lg shadow-xl border border-slate-200 w-96">
                <div className="absolute top-4 -left-2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-b border-slate-200"></div>
                <img 
                  src="/images/ian-endorsement-dm.png" 
                  alt="Ian Brunton's Endorsement" 
                  className="w-full rounded shadow-sm"
                />
              </div>
            </div>
          )}
        </div>
        
        <div className="pt-4 flex gap-5">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <span>See My Work</span>
            <ArrowRight size={16} />
          </motion.a>
          
          <motion.a
            href="https://quickevent.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-3.5 bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group relative overflow-hidden"
          >
            {/* Animated racing stripes */}
            <motion.div 
              className="absolute inset-0 w-full h-full"
              initial={{ backgroundPosition: "200% 0" }}
              animate={{ backgroundPosition: ["-200% 0", "200% 0"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              style={{
                backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 55%, rgba(255,255,255,0) 100%)",
                backgroundSize: "200% 100%"
              }}
            />
            <span className="relative z-10">Check Quickevent.app</span>
            <ExternalLink size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>
        
        <div className="flex gap-5 pt-6">
          <SocialLink href="https://github.com/harisejaz2206" icon={<Github size={22} />} />
          <SocialLink href="https://www.linkedin.com/in/harisejaz22/" icon={<Linkedin size={22} />} />
          <SocialLink href="https://harisejaz.substack.com/" icon={<BookOpen size={22} />} />
        </div>
      </motion.div>
      
      {/* Profile Image with Card Treatment */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative flex-1 flex justify-center md:justify-end z-10"
      >
        {/* Decorative race circuit lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
          <motion.circle 
            cx="200" cy="200" r="150" 
            stroke="rgba(59, 130, 246, 0.2)" 
            strokeWidth="1" 
            strokeDasharray="30 15"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="200" cy="200" r="180" 
            stroke="rgba(99, 102, 241, 0.15)" 
            strokeWidth="1" 
            strokeDasharray="20 20"
            initial={{ rotate: 0 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
        </svg>
        
        {/* Floating Card Container */}
        <motion.div 
          className="relative bg-white rounded-2xl shadow-xl p-6 max-w-sm"
          whileHover={{ y: -8, rotate: -1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Profile Image */}
          <div className="relative w-56 h-56 md:w-72 md:h-72 mb-3">
            {/* Racing-inspired animated gradient ring */}
            <motion.div 
              animate={{ 
                background: [
                  "linear-gradient(90deg, #ff1e00 0%, #3b82f6 50%, #ff1e00 100%)",
                  "linear-gradient(180deg, #ff1e00 0%, #3b82f6 50%, #ff1e00 100%)",
                  "linear-gradient(270deg, #ff1e00 0%, #3b82f6 50%, #ff1e00 100%)",
                  "linear-gradient(360deg, #ff1e00 0%, #3b82f6 50%, #ff1e00 100%)",
                  "linear-gradient(90deg, #ff1e00 0%, #3b82f6 50%, #ff1e00 100%)",
                ],
                rotate: [0, 360],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 rounded-full blur-sm opacity-70"
            />
            
            <div className="absolute inset-0 bg-white rounded-full"></div>
            
            {/* Inner border with F1-inspired color scheme */}
            <div className="absolute inset-0.5 rounded-full overflow-hidden border-4 border-white">
              <img
                src="/images/profilepic.png"
                alt="Haris Ejaz"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Caption/Tagline */}
          <div className="text-center">
            <p className="text-slate-600 font-semibold">
              <span className="inline-block relative">
                <span className="relative z-10">Obsessed with performance</span>
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-2 bg-amber-200 -z-10"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
              <span> — both in code and on track</span>
            </p>
          </div>
        </motion.div>
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