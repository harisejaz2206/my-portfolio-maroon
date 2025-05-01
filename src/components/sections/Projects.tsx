import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ExternalLink, ChevronRight, Layers, Database, Github, Globe, ChevronDown } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubLink?: string;
  liveLink?: string;
  stats?: {
    value: string;
    label: string;
  }[];
  keyFeatures?: string[];
}

const projects: Project[] = [
  {
    title: 'F1IQ - Formula 1 Analytics Platform',
    description: 'Comprehensive Formula 1 analytics platform featuring real-time race tracking, driver statistics, and interactive circuit insights with responsive data visualizations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Redux Toolkit', 'React Query'],
    image: 'https://images2.alphacoders.com/121/1214052.png',
    githubLink: 'https://github.com/harisejaz2206/formula1-analytics',
    liveLink: 'https://f1iq.com',
    keyFeatures: [
      'Engineered real-time race tracking system with position changes and lap time analysis',
      'Implemented responsive data visualizations using Recharts for race statistics',
      'Designed custom Formula 1 themed UI system with animated components',
      'Built interactive track insights feature with circuit details and race history',
      'Created comprehensive F1 guide section with technical regulations and procedures'
    ],
    stats: [
      { value: '< 1s', label: 'Load Time' },
      { value: '40%', label: 'Code Reduction' },
      { value: '20+', label: 'Components' }
    ]
  },
  {
    "title": "Floty - Real-Time Fleet Management System",
    "description": "Floty is a serverless fleet management system that processes real-time GPS data from Teltonika devices, evaluates rule violations, and delivers notifications to users via WebSockets and other channels. It leverages AWS cloud services for scalability and reliability.",
    "technologies": [
      "AWS IoT Core",
      "AWS Kinesis Data Streams",
      "AWS Lambda",
      "Neon Postgres",
      "WebSockets",
      "React",
      "TypeScript",
      "Serverless Framework"
    ],
    "image": "/images/floty-ss.jpeg",
    "githubLink": "https://github.com/harisejaz2206/floty",
    "liveLink": "https://floty.ai",
    "keyFeatures": [
      "Integrated AWS IoT Core (MQTT) for secure and real-time device-to-cloud communication",
      "Designed a scalable data pipeline using AWS Kinesis Data Streams for real-time data ingestion",
      "Implemented serverless architecture using AWS Lambda for data processing and rule evaluation",
      "Developed a dynamic rule engine to monitor fleet activities and detect violations",
      "Built a robust notification system with WebSockets and multi-channel alerts",
      "Utilized Neon Postgres for efficient and structured fleet data storage",
      "Created a responsive frontend application using React and TypeScript for real-time insights"
    ],
    "stats": [
      { "value": "99.9%", "label": "Uptime" },
      { "value": "50%", "label": "Cost Reduction" },
      { "value": "20%", "label": "Increased Efficiency" }
    ]
  },
  {
    title: 'Innfini IoT Platform',
    description: 'Enterprise-grade IoT platform implementing innovative "Thing Types" architecture enabling dynamic object modeling and real-time data processing. Features multi-tenant support, dynamic form generation, and sophisticated reporting capabilities.',
    technologies: ['React', 'MongoDB', 'Redux', 'Redux Saga', 'Node.js', 'Express.js'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    githubLink: '#',
    liveLink: 'https://innfini-platform.innovent.site/',
    keyFeatures: [
      'Architected scalable "Thing Types" system allowing dynamic creation of IoT device templates and relationships',
      'Implemented real-time data processing pipeline handling millions of IoT events daily',
      'Designed dynamic form engine supporting 12+ input types with complex validation rules',
      'Built comprehensive reporting system with tabular, historical, and geographical visualizations',
      'Optimized MongoDB queries and implemented advanced aggregation pipelines for improved performance'
    ],
    stats: [
      { value: '45%', label: 'Performance Boost' },
      { value: '10K+', label: 'Active Users' },
      { value: '99.9%', label: 'System Uptime' }
    ]
  },
  {
    title: 'Dotbrand - Pharmacy E-commerce Platform',
    description: 'White-label e-commerce solution for pharmacies with comprehensive inventory management and order processing capabilities.',
    technologies: ['React', 'TypeScript', 'Express.js', 'MongoDB', 'Mongoose', 'Redux Toolkit', 'Firebase', 'GitHub Actions'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    liveLink: 'https://dotbrand-d54bd.web.app',
    keyFeatures: [
      'Engineered scalable backend architecture using Express.js and MongoDB with Mongoose ORM',
      'Implemented comprehensive inventory management system with real-time stock tracking',
      'Built secure authentication and role-based access control system',
      'Established CI/CD pipelines using GitHub Actions for automated testing and deployment',
      'Deployed architecture with Render (backend) and Firebase (frontend)'
    ],
    stats: [
      { value: '100%', label: 'Test Coverage' },
      { value: '< 2s', label: 'Average Load Time' }
    ]
  },
  {
    title: 'Ad Boost AI',
    description: 'AI-powered social media advertising platform integrating multiple AI services for enhanced ad creation and management.',
    technologies: ['Next.js', 'Nest.js', 'TypeScript', 'MongoDB', 'OpenAI'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    liveLink: 'https://dev-adboost-fe.renesistechdemo.com',
    keyFeatures: [
      'Integrated multiple AI services like ChatGPT for creative content generation',
      // 'Implemented robust error tracking and monitoring using Elastic APM',
      'Built scalable backend architecture using Nest.js with TypeScript',
      'Developed comprehensive API integration layer for social media platforms',
      'Created performant frontend using Next.js with server-side rendering'
    ],
    stats: [
      { value: '3x', label: 'Faster Ad Creation' },
      { value: '99%', label: 'Uptime' },
      { value: '50%', label: 'Cost Reduction' }
    ]
  },
  // {
  //   title: 'Marketly - Digital Product Marketplace',
  //   description: 'Modern e-commerce platform for digital products featuring seamless payment processing and content management.',
  //   technologies: ['Next.js', 'Express.js', 'Payload CMS', 'tRPC', 'Stripe', 'TypeScript', 'Tailwind CSS', 'shadcn-ui'],
  //   image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
  //   keyFeatures: [
  //     'Implemented end-to-end type safety using tRPC for robust API communication',
  //     'Integrated Payload CMS for flexible content management and admin controls',
  //     'Built real-time payment processing system with Stripe webhook integration',
  //     'Developed protected routes system with role-based access control',
  //     'Optimized for performance with server-side rendering and static generation'
  //   ],
  //   stats: [
  //     { value: '99%', label: 'Lighthouse Score' },
  //     { value: '0.5s', label: 'Time to Interactive' }
  //   ]
  // },
  {
    title: 'Happyspace - Mental Health Platform',
    description: 'MERN stack application connecting mental health professionals with patients, featuring secure communication and appointment management.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Formik', 'Yup'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
    keyFeatures: [
      'Developed comprehensive REST API with full CRUD operations',
      'Implemented secure authentication system using JWT',
      'Built robust form validation using Formik and Yup',
      'Created appointment scheduling system with real-time updates',
      'Designed secure chat system for therapist-patient communication'
    ],
    stats: [
      { value: '100%', label: 'API Test Coverage' },
      { value: '< 1s', label: 'Response Time' }
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
    <div className="py-16 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff15_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff15_1px,transparent_1px)] 
                    bg-[size:48px_48px]" />

      {/* Subtle gradient orbs */}
      <div className="absolute -top-20 left-20 w-96 h-96 bg-sky-200/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-rose-200/20 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="inline-block p-3 rounded-xl bg-slate-900 shadow-sm relative overflow-hidden">
              <Code2 className="w-8 h-8 text-rose-500 relative z-10" />
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-slate-800 mb-6"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Innovative solutions crafted with modern technologies and best practices.
          </motion.p>
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
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      {/* Project Card */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Image with overlay */}
        <div className="relative h-[300px] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isActive ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10" />
        
          {/* Content overlay */}
          <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/90 mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
              {project.description}
            </p>
            
            {/* Technology tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 5).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm rounded-full text-white"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-3 py-1 text-sm bg-white/20 backdrop-blur-sm rounded-full text-white">
                  +{project.technologies.length - 5} more
                </span>
              )}
            </div>
            
            {/* Action buttons */}
            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              {project.githubLink && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white"
                >
                  <Github size={18} />
                  <span>Code</span>
                </motion.a>
              )}
              
              {project.liveLink && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        {project.stats && (
          <div className="grid grid-cols-3 bg-slate-200/80 backdrop-blur-sm text-center">
            {project.stats.map((stat, i) => {
              // Determine color based on stat label
              let textColor = "text-sky-500";
              if (stat.label.includes("Load")) textColor = "text-rose-500";
              else if (stat.label.includes("Reduction")) textColor = "text-amber-500";
              
              return (
                <div key={i} className="py-3 px-2">
                  <div className={`text-lg font-medium ${textColor}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      
      {/* Key Features Accordion (Optional) */}
      {project.keyFeatures && (
        <div className="mt-4">
          <motion.button
            onClick={() => setShowFeatures(!showFeatures)}
            className="w-full flex items-center justify-between p-2 text-sm text-slate-700 
                     border-b border-slate-200 hover:text-sky-600 transition-colors duration-300"
          >
            <span className="font-medium">Key Features</span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform duration-300 
                       ${showFeatures ? 'rotate-180' : ''}`}
            />
          </motion.button>

          <AnimatePresence>
            {showFeatures && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-slate-50 rounded-b-lg p-3"
              >
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <ChevronRight className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

export default Projects;