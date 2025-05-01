import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, LightbulbIcon, RocketIcon, BrainCircuitIcon, Server, GitMerge, Globe, Sparkles, Building2, Workflow } from 'lucide-react';

// Organize skills into a journey that shows progression
const skillJourney = [
  {
    stage: "Foundation",
    description: "The core technologies that formed my technical foundation",
    icon: <Building2 className="text-sky-600" />,
    color: "from-sky-400 to-blue-600",
    skills: [
      {
        name: 'Frontend',
        icon: <Code className="text-blue-600" />,
        items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        name: 'Backend',
        icon: <Database className="text-emerald-600" />,
        items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      },
    ]
  },
  {
    stage: "Growth",
    description: "Expanding my toolkit to build more complex solutions",
    icon: <Workflow className="text-emerald-600" />,
    color: "from-emerald-400 to-teal-600",
    skills: [
      {
        name: 'Cloud',
        icon: <Cloud className="text-violet-600" />,
        items: ['AWS', 'Docker', 'CI/CD', 'Microservices'],
      },
      {
        name: 'Database',
        icon: <Server className="text-amber-600" />,
        items: ['Supabase', 'Firebase', 'Redis', 'MySQL'],
      },
    ]
  },
  {
    stage: "Mastery",
    description: "The advanced tools that enable me to build complete products",
    icon: <Sparkles className="text-amber-600" />,
    color: "from-rose-400 to-orange-600",
    skills: [
      {
        name: 'DevOps',
        icon: <GitMerge className="text-rose-600" />,
        items: ['GitLab', 'GitHub Actions', 'Vercel', 'Netlify'],
      },
      {
        name: 'Platforms',
        icon: <Globe className="text-indigo-600" />,
        items: ['Stripe', 'Auth0', 'Twilio', 'Mailchimp'],
      },
    ]
  }
];

export const About: React.FC = () => {
  const [activeStage, setActiveStage] = useState<string>("Foundation");

  return (
    <div className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-20"
      >
        {/* About Me Section */}
        <div className="flex flex-col items-center">
          {/* Image in the middle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 max-w-sm"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 via-indigo-200 to-violet-200 rounded-xl rotate-6 opacity-60"></div>
              <div className="absolute inset-0 bg-white rounded-xl overflow-hidden shadow-lg rotate-3">
                <img 
                  src="/images/haris-youngpic.JPG" 
                  alt="Haris Ejaz"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
          
          {/* About text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">My Journey</h2>
            
            <div className="space-y-4 text-slate-600">
              <p>
                I'm a software engineer turned micro-SaaS founder, passionate about creating streamlined solutions that solve real problems. My background in full-stack development has given me the technical foundation to build scalable, user-centered products.
              </p>
              
              <p>
                After years of building for others, I took the leap to create my own products. Now I'm focused on developing profitable micro-SaaS applications — starting with Quickevent.app, a platform that helps event organizers streamline their planning process.
              </p>
              
              <div className="pt-2">
                <div className="px-4 py-3 bg-amber-50 border border-amber-100 rounded-lg text-amber-800 italic mx-auto max-w-xl">
                  "Built by failure, driven by purpose."
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Philosophy items */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <PhilosophyItem 
              icon={<LightbulbIcon />} 
              title="Problem First" 
              description="I build solutions to real problems I've experienced firsthand" 
              color="bg-amber-50 text-amber-600"
            />
            <PhilosophyItem 
              icon={<RocketIcon />} 
              title="Launch Early" 
              description="Get to market quickly and iterate based on user feedback" 
              color="bg-sky-50 text-sky-600"
            />
            <PhilosophyItem 
              icon={<BrainCircuitIcon />} 
              title="Learn Always" 
              description="Each project is an opportunity to grow my skillset" 
              color="bg-rose-50 text-rose-600"
            />
          </div>
        </div>
        
        {/* Skills Section - Reimagined as a Journey */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">My Skills Journey</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              The tools and technologies that have shaped my path from engineer to founder
            </p>
            
            {/* Journey visualization - redesigned as tabs */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="flex justify-center mb-12">
                {skillJourney.map((stage, index) => {
                  const isActive = activeStage === stage.stage;
                  return (
                    <motion.button
                      key={stage.stage}
                      onClick={() => setActiveStage(stage.stage)}
                      className={`relative flex flex-col items-center mx-4 px-6 py-4 rounded-lg transition-all duration-300 ${
                        isActive ? 'bg-white shadow-md' : 'bg-transparent hover:bg-white/50'
                      }`}
                      whileHover={{ y: -5 }}
                      animate={isActive ? { y: -5 } : { y: 0 }}
                    >
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 
                          ${isActive 
                            ? `bg-gradient-to-r ${stage.color} shadow-lg` 
                            : 'bg-slate-100'}`
                      }>
                        <span className={isActive ? 'text-white scale-125' : 'text-slate-500'}>
                          {stage.icon}
                        </span>
                      </div>
                      <span className={`font-semibold ${isActive ? 'text-slate-800' : 'text-slate-500'}`}>
                        {stage.stage}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeMark"
                          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
              
              {/* Progress path visualization - simplified */}
              <div className="flex justify-center items-center space-x-4 mb-8">
                {skillJourney.map((stage, index) => (
                  <React.Fragment key={stage.stage}>
                    <motion.div 
                      animate={activeStage === stage.stage 
                        ? { scale: 1.2, backgroundColor: '#3b82f6' } 
                        : index < skillJourney.findIndex(s => s.stage === activeStage) 
                          ? { scale: 1, backgroundColor: '#3b82f6' } 
                          : { scale: 1, backgroundColor: '#e2e8f0' }
                      }
                      className="w-3 h-3 rounded-full bg-slate-200"
                    />
                    {index < skillJourney.length - 1 && (
                      <div className={`w-16 h-0.5 ${
                        index < skillJourney.findIndex(s => s.stage === activeStage) 
                          ? 'bg-blue-500' 
                          : 'bg-slate-200'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          
          {/* Active stage description */}
          <AnimatePresence mode="wait">
            {skillJourney.map((stage) => {
              if (stage.stage !== activeStage) return null;
              
              return (
                <motion.div 
                  key={stage.stage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center mb-10"
                >
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    {stage.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {/* Skills grid for active stage */}
          <AnimatePresence mode="wait">
            {skillJourney.map((stage) => {
              if (stage.stage !== activeStage) return null;
              
              return (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                >
                  {stage.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="group"
                    >
                      <div className={`relative overflow-hidden bg-white rounded-xl shadow-md h-full bg-gradient-to-br via-white`}>
                        {/* Glowing background effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500" />
                        
                        <div className="p-6 relative z-10">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                              {skill.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">{skill.name}</h3>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {skill.items.map((item, i) => (
                              <motion.span 
                                key={item}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + (i * 0.1) }}
                                className="px-4 py-2 bg-slate-50 rounded-lg text-sm font-medium text-slate-700 border border-slate-200 
                                           hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 transition-all duration-300"
                              >
                                {item}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

const PhilosophyItem: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => (
  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100 shadow-sm max-w-xs">
    <div className={`p-2 rounded-lg ${color}`}>
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-slate-800 mb-1">{title}</h4>
      <p className="text-sm text-slate-600">{description}</p>
    </div>
  </div>
);