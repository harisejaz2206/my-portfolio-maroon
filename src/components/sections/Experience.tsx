import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Experience } from '../../types';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const experiences: Experience[] = [
  {
    company: "Septem Systems",
    position: "Software Engineer",
    duration: "February 2025 – Present",
    location: "Lahore, Punjab, Pakistan",
    companyUrl: "https://septemsystems.com/",
    description: [
      "Built dynamic frontend components with Next.js for Kean Fire Safety LMS, enhancing user experience for admins and students managing courses and tests.",
      "Spearheaded CI/CD pipeline automation using GitLab, slashing deployment times and minimizing production issues.",
      "Led code reviews in GitLab, driving quality and scalability across multiple teams with a focus on performance optimizations.",
      "Developed real-time test scheduling and result generation features, empowering admins with instant feedback and students with seamless progress tracking.",
      "Created complex forms and user interfaces, enabling non-technical users to manage registrations, attendance, and certifications effortlessly.",
      "Integrated NestJS API services for test management, syncing data across platforms for accurate and real-time reporting.",
      "Automated reporting system, delivering on-demand and real-time performance reports, saving admins hours in manual work.",
      "Implemented role-based access control (RBAC), ensuring secure data access for admins, facilitators, and students across all features."
    ]
  },
  {
    "company": "Innovent Tech Solutions",
    "position": "Associate Software Engineer",
    "duration": "March 2024 – January 2025",
    "location": "Dubai, United Arab Emirates",
    "companyUrl": "https://www.innovent.io/",
    "description": [
      "Co-developed a comprehensive 'Things' and 'Thing Types' system, enabling dynamic object modeling and relationships across enterprise applications, significantly reducing development time for new features",
      "Designed and developed a flexible Dynamic Forms engine supporting 12+ input types, allowing non-technical administrators to create complex forms with data relationships, validation rules, and business logic without coding",
      "Architected a sophisticated offline mapping system by integrating GeoServer WMS (Web Map Service) with MapboxGL, implementing custom raster tile services and proxy middleware for seamless rendering of multi-layered GeoTIFF data through RESTful APIs",
      "Engineered a distributed microservices architecture integrating Docker-containerized GeoServer (v2.26.2), Node.js proxy middleware, and static file serving, implementing CORS handling and secure WebSocket connections for real-time geospatial data streaming",
      "Developed an enterprise-grade geospatial infrastructure utilizing MapboxGL, GeoServer WMS, and custom tile services, implementing layer opacity controls, dynamic bounding box calculations, and efficient raster data rendering through EPSG:3857 projection system",
      "Engineered a sophisticated Dynamic Reporting architecture integrating with the Things framework, featuring tabular, historical, geographical, and summary views, powered by MongoDB aggregation pipelines and mongoose hooks",
      "Built secure role-based access control system with JWT authentication, managing menu items and permissions through backend configuration",
      "Implemented efficient state management patterns using Redux ecosystem (Redux Saga, Redux Thunk) to handle complex application states and async operations",
      "Created detailed technical documentation including Business Requirement Documents (BRDs) and UML diagrams to facilitate team understanding and project maintenance",
      "Successfully deployed enterprise solutions for government and large-scale clients including Ministry of Interior (Saudi Arabia), Abu Dhabi Civil Defense (ADCD), and RAK Ceramics",
      "Optimized MongoDB operations through advanced aggregation pipelines and indexing strategies, improving query performance and data retrieval efficiency",
      "Developed a comprehensive API documentation system using Swagger UI, enabling developers to easily understand and interact with the API"
    ]
  },  
  {
    company: 'Renesis Tech Pvt. Ltd',
    position: 'Internee Software Engineer',
    duration: 'July 2023 – September 2023',
    location: 'Lahore, Punjab, Pakistan',
    companyUrl: "https://renesistech.com",
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
    <div className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements - Light Theme */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-300 to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      </div>

      {/* Grid Pattern - Light Theme */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff15_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff15_1px,transparent_1px)] 
                     bg-[size:48px_48px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block p-3 rounded-xl bg-slate-900 shadow-sm relative overflow-hidden">
              <Briefcase className="w-8 h-8 text-sky-500 relative z-10" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Professional Journey
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Building innovative solutions and growing through challenges
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
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
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative pl-8"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-sky-400 via-indigo-300 to-transparent" />

      {/* Timeline Dot */}
      <div className="absolute left-0 top-8 w-4 h-4 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full 
                    transform -translate-x-[7px] shadow-sm group-hover:scale-125 transition-transform duration-300" />

      {/* Card Content */}
      <div className="relative bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300
                    hover:-translate-y-1 hover:shadow-md">
        {/* Card Header */}
        <div className="p-6 border-b border-slate-100">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-800">
                  {experience.company}
                </h3>
                {experience.companyUrl && (
                  <a 
                    href={experience.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sky-500 hover:text-sky-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              <p className="text-sky-600 font-medium">{experience.position}</p>
            </div>
            <div className="flex flex-col items-start md:items-end space-y-2">
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
          
          {/* Expand/Collapse button */}
          <button 
            onClick={() => setExpanded(!expanded)}
            className="mt-4 flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors text-sm font-medium"
          >
            {expanded ? (
              <>
                <span>Hide details</span>
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                <span>Show details</span>
                <ChevronDown size={16} />
              </>
            )}
          </button>
        </div>

        {/* Description Section */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-6 bg-slate-50">
                <ul className="space-y-4">
                  {experience.description.map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-slate-600 flex items-start gap-3"
                    >
                      <span className="h-5 w-5 mt-0.5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
