import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layers, Database, Terminal, ArrowRight, ExternalLink,
  Zap, Rocket, Sparkles, LayoutGrid, Palette, LineChart, Clock, Briefcase 
} from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

const ServiceCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-sky-100 hover:shadow-md transition-all duration-300"
    >
      <div className="text-sky-500 mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">{description}</p>
    </motion.div>
  );
};

const FAQ: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void; icon?: React.ReactNode }> = 
  ({ question, answer, isOpen, onClick, icon }) => {
  return (
    <div className="mb-3 last:mb-0">
      <button 
        onClick={onClick}
        className="w-full py-4 px-5 flex justify-between items-center text-left rounded-lg transition-all duration-300 hover:bg-gray-50 group"
      >
        <div className="flex items-center gap-3">
          {icon && <div className="text-xl">{icon}</div>}
          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-sky-700 transition-colors">{question}</h3>
        </div>
        <div className="bg-sky-100 rounded-full p-1 text-sky-500 transition-all duration-300 transform">
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <div className="h-5 w-5 flex items-center justify-center">
                <span className="text-lg font-semibold">-</span>
              </div>
            ) : (
              <div className="h-5 w-5 flex items-center justify-center">
                <span className="text-lg font-semibold">+</span>
              </div>
            )}
          </motion.div>
        </div>
      </button>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 pt-1 ml-8 border-l-2 border-sky-100 font-mono text-slate-600 bg-slate-50 bg-opacity-50 rounded-r-lg">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export const Services: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    budget: '',
    timeline: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation for form submission would go here
    console.log(formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
  };

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const services = [
    {
      icon: <LayoutGrid size={24} className="text-rose-500" />,
      title: "Dashboards That Don't Suck",
      description: "Tools that humans actually want to use. No more clunky interfaces or data headaches."
    },
    {
      icon: <Rocket size={24} className="text-amber-500" />,
      title: "Conversion-Focused Pages",
      description: "Landing pages that turn visitors into customers. Because pretty means nothing if it doesn't convert."
    },
    {
      icon: <Layers size={24} className="text-indigo-500" />,
      title: "SaaS That Actually Ships",
      description: "From idea to profitable launch without the never-ending development cycle. Build, test, profit."
    },
    {
      icon: <Database size={24} className="text-emerald-500" />,
      title: "APIs Worth Paying For",
      description: "Clean, intuitive, and rock-solid APIs that developers thank you for, not curse at 2am."
    },
    {
      icon: <Terminal size={24} className="text-violet-500" />,
      title: "Technical Direction",
      description: "No BS architecture guidance when you're lost in the tech wilderness. Clear paths forward only."
    },
    {
      icon: <Palette size={24} className="text-blue-500" />,
      title: "Pixel-Perfect UI",
      description: "Implementation that makes your designer smile, not cry. No detail too small, no animation too smooth."
    },
    {
      icon: <LineChart size={24} className="text-green-500" />,
      title: "Speed Optimization",
      description: "Make your sluggish app feel snappy again. No more waiting for pages to load or actions to complete."
    },
    {
      icon: <Briefcase size={24} className="text-orange-500" />,
      title: "Stand-Out Portfolios",
      description: "Personal sites that get you noticed, hired, or funded. Because generic templates don't cut it."
    },
  ];

  const faqs = [
    {
      question: "How much do you charge?",
      answer: "Depends on scope. I work hourly ($15–20/hr) or fixed-price for clear outcomes. I believe in transparency and will provide detailed quotes based on your specific needs.",
      icon: "💰"
    },
    {
      question: "Can you help with design?",
      answer: "Yes — I collaborate with a designer to deliver polished UI/UX. We work as a team to create interfaces that are both beautiful and functional.",
      icon: "🎨"
    },
    {
      question: "What if I don't know where to start?",
      answer: "I guide non-technical founders from idea to launch. We'll start with a discovery call to clarify your vision, define requirements, and create a roadmap that makes sense for your budget and timeline.",
      icon: "🧭"
    },
    {
      question: "What technologies do you use?",
      answer: "I specialize in JavaScript-based technologies: React, Next.js, Node.js, NestJS, Express, Supabase (PostgreSQL), and Stripe. This stack allows for rapid development without sacrificing quality or scalability.",
      icon: "⚙️"
    },
    {
      question: "How long does a typical project take?",
      answer: "Simple landing pages can be completed in 1-2 weeks. Full web apps typically take 4-8 weeks depending on complexity. I value your time and work efficiently to deliver results without unnecessary delays.",
      icon: "⏱️"
    },
    {
      question: "Will you ghost me mid-project?",
      answer: "I ship. Check my track record. I've built and launched multiple products end-to-end and take delivery commitments seriously. No disappearing acts here.",
      icon: "🚀"
    }
  ];

  const projects = [
    {
      title: "Quickevent.app",
      description: "Event management SaaS for creators, from ticketing to analytics.",
      link: "#projects"
    },
    {
      title: "F1IQ.com",
      description: "Interactive racing stats platform with real-time data visualizations.",
      link: "#projects"
    }
  ];

  return (
    <div className="py-16 md:py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      </div>

      {/* Hero Section */}
      <div className="mb-24 max-w-4xl mx-auto text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-5 flex items-center justify-center gap-3"
        >
          <Briefcase className="text-sky-500" size={36} />
          Hire Me
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto mb-8"
        >
          For creators, founders, and visionaries ready to build.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a 
            href="#contact-form" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="mb-24">
        <SectionTitle title="What I Offer" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/* Why Work With Me */}
      <div className="mb-24 px-4">
        <SectionTitle title="Why Work With Me" />
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Indie-built credibility</h3>
                  <p className="text-slate-600">I've shipped multiple SaaS projects solo — I know what it takes to deliver end-to-end.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Real-world velocity</h3>
                  <p className="text-slate-600">You get execution, not meetings. I focus on shipping valuable features fast.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                  <Rocket size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Startup-native thinking</h3>
                  <p className="text-slate-600">I build with speed, scalability, and hand-off in mind. Your success is the priority.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                  <Code2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Tech stack mastery</h3>
                  <p className="text-slate-600">React, Next.js, Node.js, NestJS, Express, Supabase, Stripe — everything JS-based.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#contact-form" 
              className="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </div>

      {/* Portfolio Highlights */}
      <div className="mb-24 px-4">
        <SectionTitle title="Featured Projects" subtitle="Check out some of my recent work" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              whileHover={{ y: -5 }}
              className="block p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-sky-100 hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-2 flex items-center">
                {project.title}
                <ExternalLink size={16} className="ml-2 text-sky-500" />
              </h3>
              <p className="text-slate-600">{project.description}</p>
            </motion.a>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-24 px-4">
        <SectionTitle title="Real questions I actually get. No fluff." />
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-white to-slate-50 shadow-sm border border-slate-100 overflow-hidden p-6">
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeQuestion === index}
                onClick={() => toggleQuestion(index)}
                icon={faq.icon}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Callout */}
      <div className="mb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-gradient-to-r from-sky-50 to-indigo-50 border border-sky-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Transparent Pricing</h2>
            <p className="text-lg text-slate-700 mb-6">
              I don't do one-size-fits-all packages. Let's scope your idea first — I charge $15–$20/hr or fixed-price per deliverable. Clarity comes before code.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700"
            >
              Get in touch for a quote
              <ArrowRight size={16} className="ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Floating CTA */}
      <motion.div 
        className="fixed bottom-8 right-8 z-40 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Zap size={18} />
          <span>Start Your Project</span>
        </motion.a>
      </motion.div>
    </div>
  );
}; 