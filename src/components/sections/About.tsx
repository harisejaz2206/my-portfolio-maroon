import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, BookOpen, Mail, Phone, MapPin, Code, Database, Cloud, Star, Zap, Globe } from 'lucide-react';

const skills = [
  {
    name: 'Frontend',
    icon: <Code />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Backend',
    icon: <Database />,
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    color: 'from-emerald-500 to-green-500'
  },
  {
    name: 'Cloud',
    icon: <Cloud />,
    items: ['AWS', 'Docker', 'CI/CD', 'Microservices'],
    color: 'from-purple-500 to-pink-500'
  }
];

export const About: React.FC = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-pink-500/30 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000" />

        {/* Futuristic grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] 
                     bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative space-y-20 max-w-6xl mx-auto z-10"
      >
        {/* Enhanced Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative group"
          >
            {/* Enhanced Profile Image with Dynamic Glow */}
            <div className="absolute inset-0 bg-gradient-conic from-purple-500 via-cyan-500 to-pink-500 rounded-full blur-2xl opacity-40 
                         group-hover:opacity-70 transition-all duration-500 animate-spin-slow" />
            <div className="relative rounded-full p-1 bg-gradient-conic from-purple-500 via-cyan-500 to-pink-500">
              <div className="absolute inset-0 rounded-full bg-gradient-conic from-purple-500 via-cyan-500 to-pink-500 opacity-50 blur-md animate-spin-slow" />
              <img
                src="/images/profilepic.png"
                alt="Profile"
                className="rounded-full w-56 h-56 object-cover object-bottom transform scale-[1.25] border-4 border-gray-900 relative z-10"
              />
            </div>
          </motion.div>

          {/* Enhanced Profile Info */}
          <div className="space-y-8 text-center md:text-left relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-purple-500/50" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-500/50" />

            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative inline-block"
              >
                <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent
                             pb-2 mb-2">
                  Haris Ejaz
                </h1>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-3 mt-4"
              >
                <Zap className="w-5 h-5 text-purple-400" />
                <p className="text-2xl text-gray-300 font-light">
                  Software Engineer
                </p>
              </motion.div>
            </div>

            {/* Enhanced Contact Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <ContactItem icon={<Phone className="animate-pulse" />} text="+92 309 8285829" />
              <ContactItem icon={<Mail />} text="harisejaz2206@gmail.com" />
              <ContactItem icon={<MapPin />} text="Lahore, Pakistan" />
            </motion.div>
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Decorative lines */}
          <div className="absolute -top-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute -bottom-8 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Enhanced Card Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-[-1px] bg-gradient-to-r ${skill.color} rounded-xl blur-md`} />
              </div>

              {/* Enhanced Skill Card */}
              <div className="relative bg-gray-900/90 backdrop-blur-xl p-6 rounded-xl 
                           border border-gray-700/50 transition-all duration-500
                           hover:-translate-y-1 hover:shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg text-white 
                                transform group-hover:scale-110 transition-transform duration-500`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item}
                      className="px-3 py-1 bg-gray-800/50 rounded-lg text-sm text-gray-300 
                                   border border-gray-700/50 transition-all duration-300
                                   hover:border-purple-500/50 hover:bg-gray-800/80 hover:scale-105">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-6 pt-8"
        >
          <SocialLink href="https://github.com/harisejaz2206" icon={<Github />} label="GitHub" color="from-purple-500 to-pink-500" />
          <SocialLink href="https://www.linkedin.com/in/harisejaz22/" icon={<Linkedin />} label="LinkedIn" color="from-cyan-500 to-blue-500" />
          <SocialLink href="https://harisejaz.substack.com/" icon={<BookOpen />} label="Blog" color="from-emerald-500 to-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

// Enhanced ContactItem component
const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 px-4 py-2 bg-gray-900/80 backdrop-blur-xl 
              rounded-lg border border-gray-700/50 text-gray-300
              hover:border-purple-500/50 hover:shadow-lg transition-all duration-300"
  >
    <span className="text-purple-400">{icon}</span>
    <span className="text-sm">{text}</span>
  </motion.div>
);

// Enhanced SocialLink component
const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string; color: string }> = ({
  href,
  icon,
  label,
  color
}) => (
  <motion.a
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center gap-3 px-6 py-3 rounded-lg bg-gradient-to-r ${color}
               text-white shadow-lg hover:shadow-2xl transition-all duration-500 group`}
  >
    <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
    <span className="font-medium">{label}</span>
  </motion.a>
);

export default About;