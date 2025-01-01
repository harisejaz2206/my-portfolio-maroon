import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-white/90 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm rounded-full text-white"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white"
            >
              <Github size={18} />
              <span>Code</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white"
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};