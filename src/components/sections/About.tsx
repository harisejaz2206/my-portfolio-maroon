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
    <div className="min-h-screen bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#800020] to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#800020] rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80002015_1px,transparent_1px),linear-gradient(to_bottom,#80002015_1px,transparent_1px)] 
                    bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative space-y-16 max-w-6xl mx-auto z-10"
      >
        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative group"
          >
            {/* Profile Image with Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-purple-700 rounded-full blur-2xl opacity-40 
                         group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative rounded-full p-1 bg-gradient-to-r from-[#800020] to-purple-700">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover border-4 border-gray-900"
              />
            </div>
          </motion.div>

          {/* Profile Info */}
          <div className="space-y-6 text-center md:text-left">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                Haris Ejaz
              </motion.h1>
              <motion.p className="text-2xl text-gray-400 mt-2">
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

        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
                <div className="absolute inset-[-1px] bg-gradient-to-r from-[#800020] via-purple-500 to-[#ff7e5f] rounded-xl blur-sm" />
              </div>

              {/* Skill Card */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 p-6 rounded-xl 
                           border border-gray-700/50 transition-all duration-300
                           hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-[#800020] to-purple-700 rounded-lg text-white">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item}
                      className="px-3 py-1 bg-gray-800/50 rounded-lg text-sm text-gray-300 
                                   border border-gray-700/50 transition-colors duration-300
                                   hover:border-[#800020]/50">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
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
    </div>
  );
};

const ContactItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-br from-gray-900/90 to-gray-800/90 
                rounded-lg border border-gray-700/50 text-gray-300 hover:border-[#800020]/50 
                transition-colors duration-300">
    <span className="text-[#800020]">{icon}</span>
    <span>{text}</span>
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
    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#800020] to-purple-700 
               text-white shadow-lg hover:shadow-xl transition-all group"
  >
    <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
    <span>{label}</span>
  </motion.a>
);

export default About;