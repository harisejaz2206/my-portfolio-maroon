import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../../types';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences: Experience[] = [
  {
    company: 'Innovent Tech Solutions',
    position: 'Associate Software Engineer',
    duration: 'March 2024 – Present',
    location: 'Dubai, United Arab Emirates',
    description: [
      'Co-developed a comprehensive "Things" and "Thing Types" system, enabling dynamic object modeling and relationships across enterprise applications, significantly reducing development time for new features',

      'Designed and developed a flexible Dynamic Forms engine supporting 12+ input types, allowing non-technical administrators to create complex forms with data relationships, validation rules, and business logic without coding',

      'Engineered a sophisticated Dynamic Reporting architecture integrating with the Things framework, featuring tabular, historical, geographical, and summary views, powered by MongoDB aggregation pipelines and mongoose hooks',

      'Built secure role-based access control system with JWT authentication, managing menu items and permissions through backend configuration',

      'Implemented efficient state management patterns using Redux ecosystem (Redux Saga, Redux Thunk) to handle complex application states and async operations',

      'Created detailed technical documentation including Business Requirement Documents (BRDs) and UML diagrams to facilitate team understanding and project maintenance',

      'Successfully deployed enterprise solutions for government and large-scale clients including Ministry of Interior (Saudi Arabia), Abu Dhabi Civil Defense (ADCD), and RAK Ceramics',

      'Optimized MongoDB operations through advanced aggregation pipelines and indexing strategies, improving query performance and data retrieval efficiency'
    ],
  },
  {
    company: 'Renesis Tech Pvt. Ltd',
    position: 'Internee Software Engineer',
    duration: 'July 2023 – September 2023',
    location: 'Lahore, Punjab, Pakistan',
    description: [
      'Developed and integrated RESTful APIs using Nest.js, implementing best practices for error handling, validation, and TypeScript interfaces',

      'Successfully led the API integration effort for Adboost-AI platform, coordinating with team members and ensuring seamless data flow between services',

      'Built responsive and performant user interfaces using Next.js and React.js, focusing on component reusability and modern React patterns',

      'Implemented proper API authentication, request validation, and error handling patterns across multiple microservices',

      'Gained hands-on experience with full-stack JavaScript development, including Express.js middleware, React hooks, and Next.js server-side rendering',

      'Participated in code reviews and technical discussions, receiving mentorship on architectural decisions and coding best practices'
    ],
  },
  {
    company: 'FaithOn Technologies',
    position: 'Frontend Web Development Intern',
    duration: 'March 2023 – May 2023',
    location: 'Lahore, Punjab, Pakistan',
    description: [
      'Engineered reusable React components following component composition principles and implementing proper prop typing',

      'Developed interactive user interfaces using modern React patterns including hooks, context, and efficient state management',

      'Collaborated with senior developers to implement responsive designs using Tailwind CSS and modern CSS practices',

      'Participated in structured learning exercises covering frontend architecture, component lifecycle, and React performance optimization',

      'Contributed to the development of a component library, focusing on maintainability, documentation, and consistent styling'
    ],
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <div className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#800020] to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#800020] rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80002015_1px,transparent_1px),linear-gradient(to_bottom,#80002015_1px,transparent_1px)] 
                    bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 
                          shadow-lg border border-gray-700/50 relative overflow-hidden">
              <Briefcase className="w-8 h-8 text-[#800020] relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#800020] to-purple-700 opacity-20 blur-xl" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Professional Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Building innovative solutions and growing through challenges
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ExperienceCard: React.FC<{ experience: Experience; index: number }> = ({
  experience,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative pl-8"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#800020] via-purple-500 to-transparent" />

      {/* Timeline Dot */}
      <div className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-[#800020] to-purple-500 rounded-full 
                    transform -translate-x-[7px] group-hover:scale-125 transition-transform duration-300" />

      {/* Card Content */}
      <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-xl 
                    border border-gray-700/50 overflow-hidden transition-all duration-300
                    hover:-translate-y-1 hover:shadow-xl">
        {/* Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300">
          <div className="absolute inset-[-1px] bg-gradient-to-r from-[#800020] via-purple-500 to-[#ff7e5f] rounded-xl blur-sm" />
        </div>

        <div className="relative p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                {experience.company}
              </h3>
              <p className="text-[#ff7e5f]">{experience.position}</p>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>

          <ul className="space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="text-gray-400 flex items-start gap-2">
                <span className="text-[#800020] mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
