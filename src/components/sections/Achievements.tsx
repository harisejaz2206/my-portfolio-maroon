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

const achievements: Achievement[] = [
  {
    title: 'Best Frontend Project',
    description: 'Won first place in the annual Web Development competition for creating an innovative AI-powered dashboard interface.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '1st', label: 'Place' },
      { value: '5K', label: 'Prize' }
    ],
    link: '#'
  },
  {
    title: 'React Certification',
    description: 'Achieved Advanced React Developer certification with exceptional scores in component architecture and state management.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '98%', label: 'Score' },
      { value: 'A+', label: 'Grade' }
    ]
  },
  {
    title: 'Hackathon Champion',
    description: 'Led a team of 4 developers to victory in the 48-hour Global Tech Hackathon, building a revolutionary health-tech solution.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '48h', label: 'Duration' },
      { value: '1st', label: 'Rank' }
    ],
    link: '#'
  },
  {
    title: 'Open Source Impact',
    description: 'Contributed to major open-source projects with over 500 stars on GitHub, improving documentation and adding key features.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop',
    stats: [
      { value: '500+', label: 'Stars' },
      { value: '50+', label: 'PRs' }
    ]
  },
  {
    title: 'Tech Conference Speaker',
    description: 'Featured speaker at DevCon 2023, presenting on "Modern Frontend Architecture" to an audience of 1000+ developers.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop',
    stats: [
      { value: '1K+', label: 'Audience' },
      { value: '4.9', label: 'Rating' }
    ],
    link: '#'
  },
  {
    title: 'Performance Optimization',
    description: 'Successfully improved client application performance by 300%, reducing load time from 12s to 4s through advanced optimization techniques.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
    stats: [
      { value: '300%', label: 'Faster' },
      { value: '4s', label: 'Load Time' }
    ]
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm py-16 px-4 relative overflow-hidden">
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