import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Github, Linkedin, Loader2, Mail, Send, Twitter, XCircle } from 'lucide-react';
import { PrimaryCTA, SectionHeader, SurfaceCard, TagChip } from '../ui/primitives';
import { MotionReveal } from '../ui/MotionReveal';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    budget: '',
    timeline: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitState('loading');
    setStatusMessage('Preparing your message...');

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      const subject = encodeURIComponent(`New project inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget || 'Not specified'}\nTimeline: ${
          formData.timeline || 'Not specified'
        }\n\nProject details:\n${formData.description}`
      );

      window.location.href = `mailto:harisejaz2206@gmail.com?subject=${subject}&body=${body}`;
      setSubmitState('success');
      setStatusMessage('Thanks. Your email draft is ready and I will respond within 24 hours.');
    } catch {
      setSubmitState('error');
      setStatusMessage('Something went wrong. Please email me directly at harisejaz2206@gmail.com.');
    }
  };

  return (
    <div className="space-y-12" id="contact-form">
      <SectionHeader
        eyebrow="Contact"
        title="Tell me what you’re building."
        subtitle="I reply within 24 hours with clear next steps, scope notes, and a practical delivery path."
      />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <MotionReveal delay={0.08}>
        <SurfaceCard className="space-y-6 p-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand">Response SLA</p>
            <p className="mt-2 text-lg font-semibold text-text-strong">Typically within 24 hours (Mon–Fri)</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-md border border-line bg-surface-2 p-2 text-brand">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-strong">Email</p>
                <a href="mailto:harisejaz2206@gmail.com" className="ring-focus rounded-sm text-sm text-text-body hover:text-brand">
                  harisejaz2206@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-md border border-line bg-surface-2 p-2 text-brand">
                <Twitter size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-strong">X</p>
                <a
                  href="https://x.com/buildwithharis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-focus rounded-sm text-sm text-text-body hover:text-brand"
                >
                  @buildwithharis
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-md border border-line bg-surface-2 p-2 text-brand">
                <Linkedin size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-strong">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/harisejaz22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-focus rounded-sm text-sm text-text-body hover:text-brand"
                >
                  linkedin.com/in/harisejaz22
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-md border border-line bg-surface-2 p-2 text-brand">
                <Briefcase size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-strong">Upwork</p>
                <a
                  href="https://www.upwork.com/freelancers/harisejaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-focus rounded-sm text-sm text-text-body hover:text-brand"
                >
                  upwork.com/freelancers/harisejaz
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-md border border-line bg-surface-2 p-2 text-brand">
                <Github size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-text-strong">GitHub</p>
                <a
                  href="https://github.com/harisejaz2206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ring-focus rounded-sm text-sm text-text-body hover:text-brand"
                >
                  github.com/harisejaz2206
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand">Trust cues</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <TagChip label="Production SaaS experience" />
              <TagChip label="Platform engineering background" />
              <TagChip label="Clear delivery communication" />
            </div>
          </div>
        </SurfaceCard>
        </MotionReveal>

        <MotionReveal delay={0.14}>
        <SurfaceCard className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="ring-focus w-full rounded-md border border-line bg-surface-1 px-4 py-2.5 text-sm text-text-strong"
                  placeholder="Your name"
                />
              </Field>

              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="ring-focus w-full rounded-md border border-line bg-surface-1 px-4 py-2.5 text-sm text-text-strong"
                  placeholder="you@company.com"
                />
              </Field>
            </div>

            <Field label="Project Description" htmlFor="description">
              <textarea
                id="description"
                name="description"
                rows={5}
                required
                value={formData.description}
                onChange={handleInputChange}
                className="ring-focus w-full rounded-md border border-line bg-surface-1 px-4 py-2.5 text-sm text-text-strong"
                placeholder="Goal, current state, and what success looks like."
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Budget (Optional)" htmlFor="budget">
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="ring-focus w-full rounded-md border border-line bg-surface-1 px-4 py-2.5 text-sm text-text-strong"
                >
                  <option value="">Select budget range</option>
                  <option value="<$1k">Less than $1,000</option>
                  <option value="$1k-$3k">$1,000 - $3,000</option>
                  <option value="$3k-$5k">$3,000 - $5,000</option>
                  <option value="$5k+">$5,000+</option>
                </select>
              </Field>

              <Field label="Timeline" htmlFor="timeline">
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="ring-focus w-full rounded-md border border-line bg-surface-1 px-4 py-2.5 text-sm text-text-strong"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="2-4 weeks">2-4 weeks</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="3+ months">3+ months</option>
                </select>
              </Field>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <PrimaryCTA
                type="submit"
                icon={
                  submitState === 'loading' ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send size={16} />
                  )
                }
                disabled={submitState === 'loading'}
                ariaLabel="Send project inquiry"
              >
                {submitState === 'loading' ? 'Sending...' : 'Send Inquiry'}
              </PrimaryCTA>

              <p className="font-mono text-xs uppercase tracking-[0.13em] text-text-muted">No spam. Clear scope-first communication.</p>
            </div>

            {submitState !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-md border px-4 py-3 text-sm ${
                  submitState === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
                    : submitState === 'error'
                    ? 'border-rose-200 bg-rose-50 text-rose-800'
                    : 'border-sky-200 bg-sky-50 text-sky-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  {submitState === 'success' && <CheckCircle2 size={15} />}
                  {submitState === 'error' && <XCircle size={15} />}
                  {submitState === 'loading' && <Loader2 size={15} className="animate-spin" />}
                  <span>{statusMessage}</span>
                </div>
              </motion.div>
            )}
          </form>
        </SurfaceCard>
        </MotionReveal>
      </div>
    </div>
  );
};

const Field: React.FC<{ label: string; htmlFor: string; children: React.ReactNode }> = ({ label, htmlFor, children }) => (
  <div>
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-text-body">
      {label}
    </label>
    {children}
  </div>
);
