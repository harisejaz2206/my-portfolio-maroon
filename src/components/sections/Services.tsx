import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Briefcase, CheckCircle2, Clock3, Layers3, Rocket, ShieldCheck } from 'lucide-react';
import { PrimaryCTA, SectionHeader, SecondaryCTA, SurfaceCard, TagChip } from '../ui/primitives';
import { MotionReveal } from '../ui/MotionReveal';

const offers = [
  {
    title: 'Product Build Sprint',
    deliverables: ['MVP architecture + delivery plan', 'Core user flows + implementation', 'Deployment-ready handoff'],
    timeline: '2–6 weeks',
    outcome: 'Launch a real product quickly without sacrificing quality.',
    icon: <Rocket size={18} />,
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Frontend System Upgrade',
    deliverables: ['Design token layer', 'Component primitives + patterns', 'Interaction and motion polish'],
    timeline: '1–4 weeks',
    outcome: 'Turn a functional UI into a premium, conversion-ready product experience.',
    icon: <Layers3 size={18} />,
    stack: ['Tailwind CSS', 'Framer Motion', 'Design Systems'],
  },
  {
    title: 'Platform Reliability & Security',
    deliverables: ['Auth/permission architecture review', 'API boundary hardening', 'Release and observability improvements'],
    timeline: '2–5 weeks',
    outcome: 'Improve production confidence for multi-tenant and growth-stage systems.',
    icon: <ShieldCheck size={18} />,
    stack: ['NestJS', 'Redis', 'Cloudflare', 'CI/CD'],
  },
];

const reasons = [
  'I operate end-to-end across UX, architecture, and delivery.',
  'I optimize for measurable outcomes, not vanity complexity.',
  'I communicate clearly and maintain reliable execution cadence.',
  'I treat performance and accessibility as baseline quality bars.',
];

const faqs = [
  {
    question: 'How do engagements usually start?',
    answer: 'We begin with a focused scoping call. You get a concrete delivery plan, timeline range, and implementation path before code starts.',
  },
  {
    question: 'Can you work with existing products and codebases?',
    answer: 'Yes. Most engagements involve improving existing systems while preserving business logic, integrations, and production stability.',
  },
  {
    question: 'What does communication and delivery cadence look like?',
    answer: 'Clear milestones, async updates, and visible progress. You always know scope status, risks, and next steps.',
  },
  {
    question: 'Do you support both UI quality and backend architecture?',
    answer: 'Yes. I work across frontend systems and backend/service architecture when product outcomes require both.',
  },
];

export const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="space-y-16">
      <SectionHeader
        eyebrow="Services"
        title="Productized engineering offers for serious builds."
        subtitle="Specific engagement tracks with deliverables, timelines, and outcomes."
      />

      <MotionReveal delay={0.08}>
      <div className="grid gap-6 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
          >
            <SurfaceCard className="h-full p-6" interactive>
              <div className="mb-4 inline-flex rounded-md border border-brand/20 bg-brand-soft p-2 text-brand">{offer.icon}</div>
              <h3 className="text-xl font-bold text-text-strong">{offer.title}</h3>
              <p className="mt-3 text-sm text-text-body">{offer.outcome}</p>

              <div className="mt-5">
                <p className="font-mono text-xs uppercase tracking-[0.13em] text-text-muted">Deliverables</p>
                <ul className="mt-3 space-y-2">
                  {offer.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-text-body">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex items-center gap-2 rounded-md border border-line bg-surface-2 px-3 py-2">
                <Clock3 size={14} className="text-brand" />
                <p className="text-sm font-semibold text-text-strong">{offer.timeline}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {offer.stack.map((tech) => (
                  <TagChip key={tech} label={tech} />
                ))}
              </div>
            </SurfaceCard>
          </motion.div>
        ))}
      </div>
      </MotionReveal>

      <MotionReveal delay={0.14}>
      <SurfaceCard className="p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand">Why Work With Me</p>
            <h3 className="mt-2 text-2xl font-bold text-text-strong">Execution quality with product-level thinking.</h3>
            <ul className="mt-5 space-y-3">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-sm text-text-body">
                  <CheckCircle2 size={16} className="mt-0.5 text-brand" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-line bg-surface-2 p-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand">Engagement Format</p>
            <ul className="mt-3 space-y-2 text-sm text-text-body">
              <li>• Hourly: $15–$20/hr for iterative scopes</li>
              <li>• Fixed-price: clear deliverables and milestones</li>
              <li>• Best fit: founders, teams, and product leads</li>
            </ul>
            <div className="mt-5">
              <PrimaryCTA href="#contact" icon={<ArrowRight size={15} />}>
                Start Your Project
              </PrimaryCTA>
            </div>
          </div>
        </div>
      </SurfaceCard>
      </MotionReveal>

      <MotionReveal delay={0.18}>
      <div>
        <SectionHeader
          eyebrow="FAQ"
          title="Practical questions clients ask before we start."
          align="left"
          className="mb-6"
        />
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <SurfaceCard key={faq.question} className="overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="ring-focus flex w-full items-center justify-between px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base font-semibold text-text-strong">{faq.question}</h3>
                  <span className={`text-text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                    <ArrowRight size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-line bg-surface-2 px-5 py-4 text-sm text-text-body">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SurfaceCard>
            );
          })}
        </div>
      </div>
      </MotionReveal>

      <MotionReveal delay={0.24}>
      <div className="flex flex-wrap items-center gap-3">
        <SecondaryCTA href="#projects" icon={<Briefcase size={15} />}>
          Review Work Samples
        </SecondaryCTA>
        <PrimaryCTA href="#contact" icon={<ArrowRight size={15} />}>
          Book a Discovery Call
        </PrimaryCTA>
      </div>
      </MotionReveal>
    </div>
  );
};
