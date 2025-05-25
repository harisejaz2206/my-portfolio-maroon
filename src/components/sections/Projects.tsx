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
    title: 'Quickevent - One-Page Event Launcher',
    description: 'Quickevent allows creators to easily launch and share single-page event pages with paid access to live or downloadable content, empowering users to monetize their events and engage audiences.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe'],
    image: '/images/quickevent-logo.png',
    liveLink: 'https://quickevent.app',
    keyFeatures: [
      'Enable creators to create and share one-page event pages with paid access',
      'Integrated Stripe for seamless payment processing and subscription management',
      'Support for live events (Zoom integration) and downloadable content',
      'Real-time event analytics for creators to track engagement and revenue'
    ],
    stats: [
      { value: '99%', label: 'System Uptime' },
      { value: '30+', label: 'Events Launched' },
      { value: '< 2s', label: 'Page Load Time' }
    ]
  },  
  {
    title: 'F1IQ - Formula 1 Analytics Platform',
    description: 'Comprehensive Formula 1 analytics platform featuring real-time race tracking, driver statistics, and interactive circuit insights with responsive data visualizations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
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

        {/* Projects Grid - add items-stretch to ensure equal heights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
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

  // Enhanced gradient combinations with better visual appeal
  const gradients = [
    'from-blue-600 via-purple-600 to-indigo-700',
    'from-pink-500 via-rose-500 to-red-600', 
    'from-emerald-500 via-teal-500 to-cyan-600',
    'from-violet-600 via-purple-600 to-fuchsia-700',
    'from-amber-500 via-orange-500 to-red-600',
    'from-cyan-500 via-blue-500 to-indigo-600'
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative h-full flex flex-col"
    >
      {/* Floating glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-all duration-500`} />
      
      {/* Main Card - flex-1 to fill available height */}
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200/50 group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm flex-1 flex flex-col">
        
        {/* Enhanced Header with animated gradient - fixed height */}
        <div className={`relative h-40 bg-gradient-to-br ${gradient} p-8 overflow-hidden flex-shrink-0`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>
          
          {/* Floating orbs for visual interest */}
          <motion.div 
            className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div className="relative z-10 flex items-start justify-between h-full">
            <div className="flex items-center gap-4">
              <motion.div 
                className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code2 className="w-7 h-7 text-white drop-shadow-sm" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white drop-shadow-sm leading-tight">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/80 text-sm font-medium">Live Project</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Action buttons */}
            <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {project.githubLink && (
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/30 transition-all duration-200 shadow-lg"
                >
                  <Github size={20} />
                </motion.a>
              )}
              
              {project.liveLink && (
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/20 backdrop-blur-md rounded-xl border border-white/20 text-white hover:bg-white/30 transition-all duration-200 shadow-lg"
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </div>
          </div>
        </div>
        
        {/* Enhanced Content section - flex-1 to fill remaining space */}
        <div className="p-8 flex-1 flex flex-col">
          <p className="text-slate-600 mb-6 leading-relaxed text-base font-medium flex-1">
            {project.description}
          </p>
          
          {/* Enhanced Technology tags - fixed position at bottom of content */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.technologies.slice(0, 4).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.05, y: -1 }}
                className="px-4 py-2 text-sm bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 rounded-full border border-slate-200 font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <motion.span 
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 text-sm bg-gradient-to-r from-slate-200 to-slate-100 text-slate-500 rounded-full border border-slate-300 font-medium cursor-pointer"
              >
                +{project.technologies.length - 4} more
              </motion.span>
            )}
          </div>
        </div>
        
        {/* Enhanced Stats Section - fixed height at bottom */}
        {project.stats && (
          <div className="grid grid-cols-3 border-t border-slate-100 bg-gradient-to-r from-slate-50 to-white flex-shrink-0">
            {project.stats.map((stat, i) => {
              // Enhanced color coding
              let colorClasses = "text-blue-600 bg-blue-50";
              if (stat.label.includes("Load") || stat.label.includes("Time")) {
                colorClasses = "text-emerald-600 bg-emerald-50";
              } else if (stat.label.includes("Reduction") || stat.label.includes("Cost")) {
                colorClasses = "text-amber-600 bg-amber-50";
              } else if (stat.label.includes("Uptime") || stat.label.includes("Coverage")) {
                colorClasses = "text-green-600 bg-green-50";
              }
              
              return (
                <motion.div 
                  key={i} 
                  className="py-6 px-4 text-center group/stat hover:bg-white transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-2xl font-bold ${colorClasses.split(' ')[0]} group-hover/stat:scale-110 transition-transform duration-200`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                  <div className={`w-8 h-0.5 ${colorClasses.split(' ')[1]} mx-auto mt-2 rounded-full`} />
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
      
      {/* Enhanced Key Features Accordion - outside main card to not affect height */}
      {project.keyFeatures && (
        <motion.div 
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={() => setShowFeatures(!showFeatures)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-between p-4 text-sm text-slate-700 
                     bg-gradient-to-r from-white to-slate-50 rounded-xl border border-slate-200 
                     hover:border-slate-300 hover:shadow-md hover:text-sky-600 
                     transition-all duration-300 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-sky-500 rounded-full" />
              <span className="font-semibold">Key Features & Highlights</span>
            </div>
            <motion.div
              animate={{ rotate: showFeatures ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {showFeatures && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden bg-gradient-to-br from-white to-slate-50 border border-slate-200 border-t-0 rounded-b-xl shadow-lg backdrop-blur-sm"
              >
                <div className="p-6">
                  <ul className="space-y-4">
                    {project.keyFeatures.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="flex items-start gap-4 text-sm text-slate-600 group/feature"
                      >
                        <motion.div 
                          className="w-6 h-6 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </motion.div>
                        <span className="leading-relaxed font-medium group-hover/feature:text-slate-800 transition-colors duration-200">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;