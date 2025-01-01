import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ChevronDown } from 'lucide-react';
import { Achievement } from '../../../types';

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#4A0011] rounded-xl blur opacity-0 
                    group-hover:opacity-20 transition-opacity" />
      <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 
                    hover:shadow-xl transition-all duration-300">
        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="p-3 bg-[#800020]/10 rounded-full"
          >
            <Trophy className="w-6 h-6 text-[#800020]" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#800020] font-serif mb-2">
              {achievement.title}
            </h3>
            <p className="text-gray-600 line-clamp-2">
              {achievement.description}
            </p>
          </div>
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

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
            >
              <div className="pt-4 border-t border-gray-200">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-600">
                  {achievement.extendedDescription}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};