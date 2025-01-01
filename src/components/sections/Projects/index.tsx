import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { SectionTitle } from '../../ui/SectionTitle';
import { projects } from '../../../data/projects';

export const Projects: React.FC = () => {
  return (
    <div className="space-y-12">
      <SectionTitle
        title="Featured Projects"
        subtitle="Here are some of my recent works that showcase my skills and experience"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
};