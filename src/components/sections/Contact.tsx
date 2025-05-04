import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const Contact: React.FC = () => {
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
    console.log(formData);
    alert('Thanks for reaching out! I\'ll get back to you soon.');
  };

  return (
    <div className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Section header with icon */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <Send className="text-sky-500" size={32} />
            Let's make it real.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tell me about your project and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact form and info */}
        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Get in Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p className="text-slate-700">harisejaz2206@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Social</p>
                    <p className="text-slate-700">@harisejaz_dev on Twitter/X</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h4 className="text-sm font-medium text-slate-500 mb-3">Or check out my products</h4>
                <a 
                  href="https://quickevent.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg text-sm font-medium hover:shadow-md transition-all duration-300"
                >
                  Visit Quickevent.app
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition"
                    placeholder="Tell me about your project, question, or idea"
                  ></textarea>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-1">Budget (Optional)</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition"
                    >
                      <option value="">Select a range</option>
                      <option value="<$1k">Less than $1,000</option>
                      <option value="$1-3k">$1,000 - $3,000</option>
                      <option value="$3-5k">$3,000 - $5,000</option>
                      <option value="$5k+">$5,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-1">Preferred Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">As soon as possible</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3+ months">3+ months</option>
                    </select>
                  </div>
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span>Send Message</span>
                  <Send size={16} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}; 