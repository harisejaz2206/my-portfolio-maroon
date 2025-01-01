import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, BookOpen, Mail, Phone, MapPin, Code, Database, Cloud } from 'lucide-react';

const skills = [
  { name: 'Frontend', icon: <Code />, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: <Database />, items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
  { name: 'Cloud', icon: <Cloud />, items: ['AWS', 'Docker', 'CI/CD', 'Microservices'] }
];

export const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative space-y-16 max-w-6xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#4A0011] rounded-full blur-2xl opacity-20" />
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
            alt="Profile"
            className="relative rounded-full w-48 h-48 object-cover border-4 border-[#800020] shadow-2xl"
          />
        </motion.div>
        
        <div className="space-y-6 text-center md:text-left">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold bg-gradient-to-r from-[#800020] to-[#4A0011] text-transparent bg-clip-text"
            >
              Haris Ejaz
            </motion.h1>
            <motion.p className="text-2xl text-gray-600 mt-2">
              Associate Software Engineer
            </motion.p>
          </div>
          
          <motion.div className="flex flex-wrap justify-center md:justify-start gap-4">
            <ContactItem icon={<Phone />} text="+92 309 8285829" />
            <ContactItem icon={<Mail />} text="harisejaz2206@gmail.com" />
            <ContactItem icon={<MapPin />} text="Lahore, Pakistan" />
          </motion.div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#4A0011] rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#800020] rounded-lg text-white">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#800020]">{skill.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span key={item} className="px-3 py-1 bg-[#800020]/10 rounded-full text-sm text-[#800020]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <SocialLink href="https://github.com/yourusername" icon={<Github />} label="GitHub" />
        <SocialLink href="https://linkedin.com/in/yourusername" icon={<Linkedin />} label="LinkedIn" />
        <SocialLink href="https://yourblog.com" icon={<BookOpen />} label="Blog" />
      </motion.div>
    </motion.div>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200">
    <span className="text-[#800020]">{icon}</span>
    <span className="text-gray-700">{text}</span>
  </div>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ 
  href, 
  icon, 
  label 
}) => (
  <motion.a
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#800020] to-[#4A0011] 
               text-white shadow-lg hover:shadow-xl transition-all"
  >
    {icon}
    <span>{label}</span>
  </motion.a>
);