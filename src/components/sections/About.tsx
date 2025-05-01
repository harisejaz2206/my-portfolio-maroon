import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, LightbulbIcon, RocketIcon, BrainCircuitIcon } from 'lucide-react';

const skills = [
  {
    name: 'Frontend',
    icon: <Code />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    name: 'Backend',
    icon: <Database />,
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
    color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  },
  {
    name: 'Cloud',
    icon: <Cloud />,
    items: ['AWS', 'Docker', 'CI/CD', 'Microservices'],
    color: 'bg-violet-50 text-violet-600 border-violet-100'
  }
];

export const About: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-16"
      >
        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
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
                <div className="px-4 py-3 bg-amber-50 border border-amber-100 rounded-lg text-amber-800 italic">
                  "Built by failure, driven by purpose."
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
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
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-96">
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-200 via-indigo-200 to-violet-200 rounded-xl rotate-6 opacity-60"></div>
              <div className="absolute inset-0 bg-white rounded-xl overflow-hidden shadow-lg rotate-3">
                <img 
                  src="/images/profilepic2.png" 
                  alt="Haris Ejaz"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">My Skills</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              The tools and technologies I use to bring micro-SaaS products to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${skill.color} border`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{skill.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span 
                        key={item}
                        className="px-3 py-1 bg-slate-50 rounded-lg text-sm text-slate-700 border border-slate-200 hover:border-sky-200 transition-colors duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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