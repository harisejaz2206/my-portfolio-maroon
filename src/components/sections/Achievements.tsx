import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Medal, Users, ExternalLink, ArrowUpRight } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  image: string;
  link?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

const achievements = [
  {
    title: 'Campus Silver Medal',
    description: 'Earned the prestigious #2 ranking in the graduating batch, demonstrating consistent academic excellence throughout the program.',
    image: '/images/medal.jpeg',
    stats: [
      { value: '#2', label: 'Rank' },
      { value: 'Silver', label: 'Medal' }
    ],
    link: '#'
  },
  {
    title: 'Devathon by Devsinc',
    description: 'Secured third place as Rising Stars among 300+ participants in an intensive development marathon, showcasing innovative problem-solving skills.',
    image: '/images/devathon.JPG',
    stats: [
      { value: '3rd', label: 'Place' },
      { value: '300+', label: 'Participants' }
    ],
    link: '#'
  },
  {
    title: 'Workshop Facilitator',
    description: 'Led an impactful workshop for university bus drivers, collaborating with campus director and faculty to enhance institutional services.',
    image: 'https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '1', label: 'Workshop' },
      { value: '100%', label: 'Completion' }
    ]
  },
  {
    title: 'Convocation Host Runner-up',
    description: 'Secured second place among 70+ participants in the 2022 convocation hosting auditions, demonstrating exceptional public speaking skills.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '2nd', label: 'Place' },
      { value: '70+', label: 'Contestants' }
    ]
  },
  {
    title: 'Namaste React Certification',
    description: 'Successfully completed the comprehensive Namaste React course by Akshay Saini, mastering advanced React concepts and best practices.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '100%', label: 'Completion' },
      { value: 'React', label: 'Focus' }
    ],
    link: '#'
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
    <div className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#800020] to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#800020] rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-40 left-1/2 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />

        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.2
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80002015_1px,transparent_1px),linear-gradient(to_bottom,#80002015_1px,transparent_1px)] 
                    bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 
                          shadow-lg border border-gray-700/50 relative overflow-hidden group">
              <Trophy className="w-8 h-8 text-[#800020] relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-purple-700 opacity-20 blur-xl 
                           group-hover:opacity-30 transition-opacity duration-300" />

              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-[1px] bg-gray-900 rounded-xl z-10" />
                <div className="w-20 h-20 absolute -top-10 -left-10 bg-gradient-to-r from-[#800020] to-purple-700 
                             rotate-45 animate-spin-slow" />
              </div>
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Achievements & Recognition
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Celebrating milestones and accomplishments through dedication and excellence.
          </motion.p>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#800020] to-transparent blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#800020] to-transparent blur-sm animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <AchievementCard
                achievement={achievement}
                index={index}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            </motion.div>
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
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative w-full"
    >
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300">
        <div className="absolute inset-[-1px] bg-gradient-to-r from-[#800020] via-purple-500 to-[#ff7e5f] rounded-xl blur-sm" />
      </div>

      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl 
                    border border-gray-700/50 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-xl">
        <div className="relative">
          {/* Image container with fixed aspect ratio */}
          <div className="relative aspect-video">
            <img
              src={achievement.image}
              alt={achievement.title}
              className="w-full h-full object-cover transition-transform duration-300 
                       group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />

            {/* Icon */}
            <div className="absolute top-4 right-4">
              <div className="p-2 bg-gray-900/90 rounded-lg border border-gray-700/50">
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Stats */}
            {achievement.stats && (
              <div className="absolute bottom-4 left-4 flex gap-6">
                {achievement.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              {achievement.title}
            </h3>
            <p className="text-gray-400">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;