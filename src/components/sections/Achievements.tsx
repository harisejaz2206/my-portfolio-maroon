import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Users, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  image: string;
}

// Sample achievements data with placeholder images
const achievements: Achievement[] = [
  {
    title: 'Campus Silver Medal',
    description: 'Ranked #2 in the graduating batch with exceptional academic performance.',
    image: '/api/placeholder/600/400'
  },
  {
    title: 'Devathon by Devsinc - Third Place',
    description: 'Recognized as Rising Stars for outstanding performance in a competitive development marathon.',
    image: '/api/placeholder/600/400'
  },
  {
    title: 'University Leadership',
    description: 'Hosted workshops and emerged as runner-up in convocation hosting auditions.',
    image: '/api/placeholder/600/400'
  }
];

const iconMap = {
  'Campus Silver Medal': Medal,
  'Devathon by Devsinc - Third Place': Trophy,
  'University Leadership': Users
};

export const Achievements: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-[#800020] to-[#ff7e5f] bg-clip-text text-transparent mb-4"
          >
            Achievements & Recognition
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Celebrating milestones and accomplishments through dedication and excellence.
          </motion.p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index} 
              achievement={achievement} 
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
  achievement, 
  index,
  isHovered,
  onHover,
  onLeave
}) => {
  const Icon = iconMap[achievement.title as keyof typeof iconMap] || Trophy;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#ff7e5f] rounded-2xl blur opacity-0 
                    group-hover:opacity-10 transition-all duration-500" />
      
      {/* Card Content */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden
                    border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500
                    transform hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
                       group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Icon */}
          <motion.div
            className="absolute top-4 right-4 p-3 bg-white/90 rounded-full shadow-lg"
            animate={{ 
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-6 h-6 text-[#800020]" />
          </motion.div>
        </div>

        {/* Text Content */}
        <div className="p-6">
          <motion.h3 
            className="text-xl font-bold text-[#800020] mb-2 flex items-center gap-2"
            animate={{ y: isHovered ? -2 : 0 }}
          >
            {achievement.title}
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.h3>
          <motion.p 
            className="text-gray-600"
            animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          >
            {achievement.description}
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-r from-[#800020] to-[#ff7e5f] rounded-full blur-2xl opacity-0 
                   group-hover:opacity-20 transition-opacity duration-500"
          animate={{ 
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 90 : 0
          }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default Achievements;