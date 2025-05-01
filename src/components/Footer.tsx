import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and bio */}
          <div className="mb-8 md:mb-0 text-center md:text-left max-w-xs">
            <div className="mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
                HE
              </span>
            </div>
            <p className="text-slate-600 text-sm">
              Building profitable micro-SaaS for creators and racing fans. Turning ideas into streamlined solutions.
            </p>
          </div>
          
          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-16">
            <div>
              <h4 className="text-sm font-semibold text-slate-800 mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-600 hover:text-sky-600 text-sm">Home</a></li>
                <li><a href="#about" className="text-slate-600 hover:text-sky-600 text-sm">About</a></li>
                <li><a href="#projects" className="text-slate-600 hover:text-sky-600 text-sm">Projects</a></li>
                <li><a href="#contact" className="text-slate-600 hover:text-sky-600 text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-800 mb-3">Projects</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://quickevent.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-sky-600 text-sm flex items-center gap-1"
                  >
                    Quickevent
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://f1iq.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-sky-600 text-sm flex items-center gap-1"
                  >
                    F1IQ
                    <ExternalLink size={12} />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://floty.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-sky-600 text-sm flex items-center gap-1"
                  >
                    Floty
                    <ExternalLink size={12} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-slate-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} Haris Ejaz. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/harisejaz2206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/harisejaz22/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:harisejaz2206@gmail.com" 
              className="text-slate-500 hover:text-sky-600 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 