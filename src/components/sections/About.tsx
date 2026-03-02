import React from 'react';
import { CheckCircle2, Layers3, Rocket, ShieldCheck } from 'lucide-react';
import { SectionHeader, SurfaceCard, TagChip } from '../ui/primitives';
import { MotionReveal, MotionStagger, MotionStaggerItem } from '../ui/MotionReveal';

const capabilityCards = [
  {
    title: 'Product Engineering',
    solve: 'Ship complete products from idea to launch without losing execution speed.',
    proof: 'Built and launched multiple SaaS products used by real users.',
    stack: ['React', 'TypeScript', 'Next.js', 'Node.js'],
    icon: <Rocket size={18} />,
  },
  {
    title: 'Frontend Systems',
    solve: 'Turn dense workflows into clear, conversion-focused interfaces.',
    proof: 'Designed and shipped premium analytics and campaign-grade UI systems.',
    stack: ['Tailwind CSS', 'Framer Motion', 'Recharts', 'React Router'],
    icon: <Layers3 size={18} />,
  },
  {
    title: 'Platform Architecture',
    solve: 'Design secure multi-tenant backend flows and resilient service integrations.',
    proof: 'Implemented distributed auth and API gateway patterns in production environments.',
    stack: ['NestJS', 'Redis', 'JWT', 'Cloudflare Workers'],
    icon: <ShieldCheck size={18} />,
  },
  {
    title: 'Delivery & Reliability',
    solve: 'Keep releases predictable with practical CI/CD and performance discipline.',
    proof: 'Improved deployment workflows and hardened production behavior across projects.',
    stack: ['GitLab CI', 'GitHub Actions', 'Vercel', 'PostgreSQL'],
    icon: <CheckCircle2 size={18} />,
  },
];

export const About: React.FC = () => {
  return (
    <div className="space-y-16 md:space-y-20">
      <SectionHeader
        eyebrow="About"
        title="Built by curiosity. Refined by execution."
        subtitle="I’m a software engineer and product builder focused on turning technical depth into high-clarity user experiences."
      />

      <MotionReveal delay={0.08}>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SurfaceCard className="p-4 sm:p-6">
          <div className="relative overflow-hidden rounded-md">
            <img
              src="/images/haris-youngpic.JPG"
              alt="Haris Ejaz childhood photo"
              className="h-[340px] w-full object-contain bg-surface-2"
              loading="lazy"
            />
            <div className="absolute inset-x-3 bottom-3 rounded-md border border-white/70 bg-white/90 p-3 backdrop-blur">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-brand">Early Signal</p>
              <p className="mt-1 text-sm font-semibold text-text-strong">Always dismantling systems to understand how they work.</p>
            </div>
          </div>
        </SurfaceCard>

        <SurfaceCard className="space-y-5 p-6 sm:p-8">
          <p className="text-base leading-relaxed text-text-body">
            I started with pure engineering and moved toward product ownership because I care about outcomes, not just implementation. That shift now defines my work: strong architecture, disciplined UX decisions, and rapid delivery.
          </p>
          <p className="text-base leading-relaxed text-text-body">
            Today I build at the intersection of frontend systems and business intent, from multi-tenant platform logic to high-fidelity interfaces that users actually enjoy.
          </p>
          <div className="rounded-md border border-brand/20 bg-brand-soft/50 p-4">
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand">Operating Principle</p>
            <p className="mt-2 text-sm font-semibold text-text-strong">Clarity over complexity. Ship value fast. Keep quality non-negotiable.</p>
          </div>
        </SurfaceCard>
        </div>
      </MotionReveal>

      <MotionReveal delay={0.14}>
      <div>
        <SectionHeader
          eyebrow="Capabilities"
          title="What I build and why teams hire me."
          subtitle="Outcome-driven capability matrix across product, frontend, platform, and delivery."
          align="left"
          className="mb-8"
        />
        <MotionStagger className="grid gap-5 md:grid-cols-2" delayChildren={0.06} staggerChildren={0.08}>
          {capabilityCards.map((item) => (
            <MotionStaggerItem key={item.title}>
              <SurfaceCard className="h-full p-6" interactive>
                <div className="mb-3 inline-flex rounded-md border border-brand/20 bg-brand-soft p-2 text-brand">{item.icon}</div>
                <h3 className="text-xl font-bold text-text-strong">{item.title}</h3>
                <p className="mt-3 text-sm text-text-body">{item.solve}</p>
                <p className="mt-3 text-sm font-medium text-text-strong">{item.proof}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <TagChip key={tech} label={tech} />
                  ))}
                </div>
              </SurfaceCard>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
      </MotionReveal>
    </div>
  );
};
