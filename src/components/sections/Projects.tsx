import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';

const projects: Project[] = [
  {
    title: 'Innfini IoT-Based Product',
    description: 'Designed and developed architecture for IoT modules including things types, multi-tenancy support, and dynamic forms. Implemented MongoDB optimization and complex aggregation pipelines.',
    technologies: ['React', 'MongoDB', 'Redux', 'Redux Saga'],
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1470&h=800'
  },
  {
    title: 'Adboost-AI',
    description: 'Led API integration efforts using Nest.js and Next.js, creating a seamless connection between frontend and backend systems.',
    technologies: ['Next.js', 'Nest.js', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1470&h=800'
  }
];

export const Projects: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </motion.div>
  );
};

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-[#800020]">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-[#800020]/10 text-[#800020]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};