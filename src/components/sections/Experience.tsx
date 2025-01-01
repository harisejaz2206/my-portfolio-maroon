import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../types';

const experiences: Experience[] = [
  {
    company: 'Innovent Tech Solutions',
    position: 'Associate Software Engineer',
    duration: 'March 2024 – Present',
    location: 'Dubai, United Arab Emirates',
    description: [
      'Worked on projects for Ministry of Interior (Saudi Arabia), RAK Ceramics, Innfini',
      'Designed architecture for IoT modules and dynamic forms',
      'Optimized MongoDB operations and implemented complex aggregation pipelines',
      'Managed state using Redux, Redux Saga, and Redux Thunk',
      'Developed BRDs and UML diagrams for project documentation'
    ]
  },
  {
    company: 'Renesis Tech Pvt. Ltd',
    position: 'Internee Software Engineer',
    duration: 'July 2023 – September 2023',
    location: 'Lahore, Punjab, Pakistan',
    description: [
      'Received mentorship in React.js, Next.js, Express.js, and Nest.js',
      'Led API integration for Adboost-AI',
      'Integrated Nest.js APIs with Next.js frontend',
      'Developed versatile APIs for existing projects'
    ]
  },
  {
    company: 'FaithOn Technologies',
    position: 'Frontend Web Development Intern',
    duration: 'March 2023 – May 2023',
    location: 'Lahore, Punjab, Pakistan',
    description: [
      'Developed reusable React components',
      'Engaged in project-based exercises',
      'Enhanced problem-solving skills'
    ]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} experience={exp} index={index} />
      ))}
    </motion.div>
  );
};

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({ 
  experience, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-1 
                 before:bg-[#800020] before:rounded-full"
    >
      <div className="absolute left-0 top-0 w-2 h-2 bg-[#800020] rounded-full 
                      transform -translate-x-[3px]" />
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-[#800020]">{experience.company}</h3>
            <p className="text-lg text-gray-700">{experience.position}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">{experience.duration}</p>
            <p className="text-gray-500">{experience.location}</p>
          </div>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};