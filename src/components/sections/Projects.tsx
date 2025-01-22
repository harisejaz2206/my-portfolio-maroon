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
      'Integrated multiple AI services including ChatGPT and Stable Diffusion for creative content generation',
      'Implemented robust error tracking and monitoring using Elastic APM',
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
  const [showFeatures, setShowFeatures] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      <div className="relative bg-gray-900/40 backdrop-blur-md rounded-xl overflow-hidden
                    border border-gray-700/50 transition-all duration-500
                    hover:border-[#800020]/50 hover:shadow-lg hover:shadow-[#800020]/20">
        {/* Main Content */}
        <div className="relative">
          {/* Image and Title Section */}
          <div className="relative h-[300px] overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isActive ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />

            {/* Project Title Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex gap-2">
              {project.githubLink ? (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 
                           hover:border-[#800020]/50 hover:bg-black/50 transition-all duration-300"
                >
                  <Github className="w-5 h-5 text-white" />
                </motion.a>
              ) : (
                <div className="p-2 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 
                              cursor-not-allowed opacity-50">
                  <Github className="w-5 h-5 text-white" />
                </div>
              )}

              {project.liveLink && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 
                           hover:border-[#800020]/50 hover:bg-black/50 transition-all duration-300"
                >
                  <Globe className="w-5 h-5 text-white" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Stats Section */}
          {project.stats && (
            <div className="grid grid-cols-3 gap-2 px-6 py-4 border-b border-gray-700/50">
              {project.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold bg-gradient-to-r from-[#800020] to-[#ff7e5f] 
                                bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Technologies Section */}
          <div className="px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-gray-800/50 text-gray-300 
                           border border-gray-700/50 flex items-center gap-2
                           hover:border-[#800020]/50 transition-colors duration-300"
                >
                  {techIcons[tech]}
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Section */}
          {project.keyFeatures && (
            <div className="px-6 pb-4">
              <motion.button
                onClick={() => setShowFeatures(!showFeatures)}
                className="w-full flex items-center justify-between p-2 text-sm text-gray-300 
                         hover:text-[#800020] transition-colors duration-300"
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
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mt-2">
                      {project.keyFeatures.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <ChevronRight className="w-4 h-4 text-[#800020] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;