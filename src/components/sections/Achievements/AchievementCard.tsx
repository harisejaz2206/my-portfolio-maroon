import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronDown } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  extendedDescription: string;
  image: string;
}

interface AchievementCardProps {
  achievement?: Achievement;
  index?: number;
}

// Default achievement data
const defaultAchievement: Achievement = {
  title: "Outstanding Achievement",
  description: "Received recognition for exceptional performance and dedication to excellence in the field.",
  extendedDescription: "This achievement represents a significant milestone in professional development, demonstrating leadership, innovation, and commitment to continuous improvement.",
  image: "/api/placeholder/400/320"
};

export const AchievementCard: React.FC<AchievementCardProps> = ({ 
  achievement = defaultAchievement,
  index = 0 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative perspective"
    >
      {/* Glassmorphism background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] rounded-xl blur opacity-0 
                    group-hover:opacity-20 transition-all duration-300" />
      
      {/* Card container with 3D flip effect */}
      <motion.div
        className={`relative transform-style-preserve-3d transition-transform duration-500 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div className="relative bg-white/20 backdrop-blur-lg p-6 rounded-xl border border-white/30
                     shadow-lg hover:shadow-2xl transition-all duration-300
                     transform hover:scale-105">
          <div className="flex items-start gap-4">
            {/* Trophy icon with rotation animation */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-[#800020]/10 rounded-full hover:shadow-glow"
            >
              <Trophy className="w-6 h-6 text-[#800020]" />
            </motion.div>
            
            {/* Card content */}
            <div className="flex-1">
              <motion.h3
                whileHover={{ y: -2 }}
                className="text-xl font-bold bg-gradient-to-r from-[#800020] to-[#ff7e5f] 
                         bg-clip-text text-transparent font-serif mb-2"
              >
                {achievement.title}
              </motion.h3>
              <p className="text-gray-600 line-clamp-2 font-sans">
                {achievement.description}
              </p>
            </div>
            
            {/* Expand/collapse button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 hover:bg-[#800020]/10 rounded-full transition-colors"
            >
              <ChevronDown
                className={`w-5 h-5 text-[#800020] transition-transform duration-300 
                         ${isExpanded ? 'rotate-180' : ''}`}
              />
            </motion.button>
          </div>

          {/* Expandable content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 overflow-hidden"
              >
                <div className="pt-4 border-t border-white/30">
                  {/* Image with hover effect */}
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 
                                hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-600 font-sans">
                    {achievement.extendedDescription}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Add floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff7e5f] rounded-full opacity-20"
      />
    </motion.div>
  );
};

export default AchievementCard;