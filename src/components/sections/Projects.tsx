import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, ChevronRight, Layers, Database, Github, Globe } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  liveLink?: string;
  stats?: {
    value: string;
    label: string;
  }[];
}

const projects: Project[] = [
  {
    title: 'Innfini IoT-Based Product',
    description: 'Designed and developed architecture for IoT modules including things types, multi-tenancy support, and dynamic forms. Implemented MongoDB optimization and complex aggregation pipelines.',
    technologies: ['React', 'MongoDB', 'Redux', 'Redux Saga'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    githubLink: '#',
    liveLink: '#',
    stats: [
      { value: '45%', label: 'Performance Boost' },
      { value: '10K+', label: 'Active Users' }
    ]
  },
  {
    title: 'Adboost-AI',
    description: 'Led API integration efforts using Nest.js and Next.js, creating a seamless connection between frontend and backend systems.',
    technologies: ['Next.js', 'Nest.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    liveLink: '#',
    stats: [
      { value: '3x', label: 'Faster Loading' },
      { value: '99%', label: 'Uptime' }
    ]
  }
];

const techIcons: Record<string, React.ReactNode> = {
  React: <Code2 className="w-4 h-4" />,
  MongoDB: <Database className="w-4 h-4" />,
  Redux: <Layers className="w-4 h-4" />,
  // 'Redux Saga': <Git className="w-4 h-4" />,
  'Next.js': <Code2 className="w-4 h-4" />,
  'Nest.js': <Code2 className="w-4 h-4" />,
  TypeScript: <Code2 className="w-4 h-4" />
};

export const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm py-16 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#800020] to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#800020] rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80002015_1px,transparent_1px),linear-gradient(to_bottom,#80002015_1px,transparent_1px)] 
                    bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section with enhanced styling */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 
                          shadow-lg border border-gray-700/50 relative overflow-hidden">
              <Code2 className="w-8 h-8 text-[#800020] relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-purple-700 opacity-20 blur-xl" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Innovative solutions crafted with modern technologies and best practices.
          </motion.p>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 
                       bg-gradient-to-r from-transparent via-[#800020] to-transparent blur-sm" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isActive={activeIndex === index}
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isActive,
  onHover,
  onLeave
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl 
                    border border-gray-700/50 overflow-hidden
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-xl">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
          <div className="absolute inset-[-1px] bg-gradient-to-r from-[#800020] via-purple-500 to-[#ff7e5f] rounded-xl blur-sm" />
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Image section */}
          <div className="relative aspect-video overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isActive ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60" />

            {/* Action buttons */}
            <div className="absolute top-4 right-4 flex gap-3">
              {project.githubLink && (
                <a href={project.githubLink}
                  className="p-2 bg-gray-900/90 rounded-lg border border-gray-700/50 hover:border-[#800020]/50 
                            transition-colors duration-300">
                  <Github className="w-5 h-5 text-white" />
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink}
                  className="p-2 bg-gray-900/90 rounded-lg border border-gray-700/50 hover:border-[#800020]/50 
                            transition-colors duration-300">
                  <Globe className="w-5 h-5 text-white" />
                </a>
              )}
            </div>

            {/* Stats */}
            {project.stats && (
              <div className="absolute bottom-4 left-4 flex gap-6">
                {project.stats.map((stat, i) => (
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
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm rounded-lg bg-gray-800/50 text-gray-300 
                           border border-gray-700/50 flex items-center gap-2"
                >
                  {techIcons[tech]}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;