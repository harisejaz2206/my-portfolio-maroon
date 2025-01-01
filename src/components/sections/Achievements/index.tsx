import React from 'react';
import { motion } from 'framer-motion';
import { AchievementCard } from './AchievementCard';
import { MarqueeText } from '../../ui/MarqueeText';
import { achievements } from '../../../data/achievements';

const marqueeItems = [
  '🏆 Campus Silver Medal',
  '🌟 Rising Star at Devathon',
  '🎓 University Leadership',
  '🏅 Academic Excellence',
];

export const Achievements: React.FC = () => {
  return (
    <div className="space-y-8">
      <MarqueeText items={marqueeItems} />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 gap-6"
      >
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            achievement={achievement}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};