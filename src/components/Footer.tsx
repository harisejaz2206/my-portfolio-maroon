import React from 'react';
import { Briefcase, ExternalLink, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-line/80 bg-surface-1/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <p className="font-display text-xl font-bold text-brand">Haris Ejaz</p>
          <p className="mt-3 max-w-md text-sm text-text-body">
            Software engineer focused on premium product UX, platform-grade frontend systems, and practical delivery.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">Navigation</h4>
            <ul className="mt-3 space-y-2 text-sm text-text-body">
              <li><a href="#home" className="ring-focus rounded-sm hover:text-brand">Home</a></li>
              <li><a href="#about" className="ring-focus rounded-sm hover:text-brand">About</a></li>
              <li><a href="#projects" className="ring-focus rounded-sm hover:text-brand">Projects</a></li>
              <li><a href="#contact" className="ring-focus rounded-sm hover:text-brand">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.14em] text-text-muted">Flagship Projects</h4>
            <ul className="mt-3 space-y-2 text-sm text-text-body">
              <li>
                <a href="https://quickevent.app" target="_blank" rel="noopener noreferrer" className="ring-focus inline-flex items-center gap-1 rounded-sm hover:text-brand">
                  Quickevent <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://f1iq.com" target="_blank" rel="noopener noreferrer" className="ring-focus inline-flex items-center gap-1 rounded-sm hover:text-brand">
                  F1IQ <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://thesystem.harisejaz.com" target="_blank" rel="noopener noreferrer" className="ring-focus inline-flex items-center gap-1 rounded-sm hover:text-brand">
                  THE SYSTEM <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 sm:px-6 md:flex-row lg:px-8">
          <p className="text-sm text-text-muted">© {new Date().getFullYear()} Haris Ejaz. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="https://github.com/harisejaz2206" target="_blank" rel="noopener noreferrer" className="ring-focus rounded-md border border-line bg-surface-1 p-2 text-text-muted hover:text-brand" aria-label="GitHub">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/harisejaz22/" target="_blank" rel="noopener noreferrer" className="ring-focus rounded-md border border-line bg-surface-1 p-2 text-text-muted hover:text-brand" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="https://x.com/buildwithharis" target="_blank" rel="noopener noreferrer" className="ring-focus rounded-md border border-line bg-surface-1 p-2 text-text-muted hover:text-brand" aria-label="X">
              <Twitter size={16} />
            </a>
            <a href="https://www.upwork.com/freelancers/harisejaz" target="_blank" rel="noopener noreferrer" className="ring-focus rounded-md border border-line bg-surface-1 p-2 text-text-muted hover:text-brand" aria-label="Upwork">
              <Briefcase size={16} />
            </a>
            <a href="mailto:harisejaz2206@gmail.com" className="ring-focus rounded-md border border-line bg-surface-1 p-2 text-text-muted hover:text-brand" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
