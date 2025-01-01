import React from 'react';
import { motion } from 'framer-motion';
import { Achievement } from '../../types';

const achievements: Achievement[] = [
  {
    title: 'Campus Silver Medal',
    description: 'Ranked #2 in the graduating batch with exceptional academic performance.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&q=80&w=1470&h=800'
  },
  {
    title: 'Devathon by Devsinc - Third Place',
    description: 'Recognized as Rising Stars for outstanding performance in a competitive development marathon.',
    image: 'https://images.unsplash.com/photo-1546146830-2cca9512c68e?auto=format&fit=crop&q=80&w=1470&h=800'
  },
  {
    title: 'University Leadership',
    description: 'Hosted workshops and emerged as runner-up in convocation hosting auditions.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1470&h=800'
  }
];

export const Achievements: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {achievements.map((achievement, index) => (
        <AchievementCard key={index} achievement={achievement} index={index} />
      ))}
    </motion.div>
  );
};

const AchievementCard: React.FC<{ achievement: Achievement; index: number }> = ({ 
  achievement, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#800020] mb-2">{achievement.title}</h3>
        <p className="text-gray-600">{achievement.description}</p>
      </div>
    </motion.div>
  );
};