import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, ChevronRight, Layers, Database } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

// Sample projects with placeholder images
const projects: Project[] = [
  {
    title: 'Innfini IoT-Based Product',
    description: 'Designed and developed architecture for IoT modules including things types, multi-tenancy support, and dynamic forms. Implemented MongoDB optimization and complex aggregation pipelines.',
    technologies: ['React', 'MongoDB', 'Redux', 'Redux Saga'],
    image: 'https://via.placeholder.com/800x400?text=IoT+Product'
  },
  {
    title: 'Adboost-AI',
    description: 'Led API integration efforts using Nest.js and Next.js, creating a seamless connection between frontend and backend systems.',
    technologies: ['Next.js', 'Nest.js', 'TypeScript'],
    image: 'https://via.placeholder.com/800x400?text=Adboost+AI'
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4"
          >
            {/* <span className="bg-gradient-to-r from-[#800020] to-[#ff7e5f] p-2 rounded-lg">
              <Code2 className="w-8 h-8 text-white" />
            </span> */}
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-gradient-to-r from-[#800020] to-[#ff7e5f] bg-clip-text text-transparent mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Innovative solutions crafted with modern technologies and best practices.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      {/* Decorative background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-[#ff7e5f] rounded-2xl blur opacity-0 
                    group-hover:opacity-10 transition-all duration-500" />

      {/* Card Content */}
      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden
                    border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* Image Section */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Action Button */}
          <motion.button
            className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5 text-[#800020]" />
          </motion.button>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          <div className="flex items-start justify-between">
            <motion.h3 
              className="text-2xl font-bold text-[#800020] flex items-center gap-2"
              animate={{ y: isActive ? -2 : 0 }}
            >
              {project.title}
              <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.h3>
          </div>

          <motion.p 
            className="text-gray-600"
            animate={{ opacity: isActive ? 0.8 : 0.6 }}
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <motion.div 
            className="flex flex-wrap gap-2"
            animate={{ y: isActive ? 2 : 0 }}
          >
            {project.technologies.map((tech, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-[#800020]/10 text-[#800020]
                         flex items-center gap-2 hover:bg-[#800020]/20 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {techIcons[tech]}
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Decorative corner gradient */}
        <motion.div
          className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-r from-[#800020] to-[#ff7e5f] 
                   rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
          animate={{ 
            scale: isActive ? 1.2 : 1,
            rotate: isActive ? 90 : 0
          }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

export default Projects;