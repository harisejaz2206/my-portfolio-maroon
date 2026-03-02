import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, ExternalLink, Eye, Github, X } from 'lucide-react';
import { MetricPill, SectionHeader, SecondaryCTA, SurfaceCard, TagChip } from '../ui/primitives';
import { loadGsap } from '../../lib/gsap';
import { MotionReveal } from '../ui/MotionReveal';
import { UpworkLink } from '../ui/UpworkLink';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  showAllTechnologies?: boolean;
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
    description:
      'Quickevent allows creators to easily launch and share single-page event pages with paid access to live or downloadable content, empowering users to monetize their events and engage audiences.',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe'],
    image: '/images/quickevent-logo.png',
    liveLink: 'https://quickevent.app',
    keyFeatures: [
      'Enable creators to create and share one-page event pages with paid access',
      'Integrated Stripe for seamless payment processing and subscription management',
      'Support for live events (Zoom integration) and downloadable content',
      'Real-time event analytics for creators to track engagement and revenue',
    ],
    stats: [
      { value: '99%', label: 'System Uptime' },
      { value: '30+', label: 'Events Launched' },
      { value: '< 2s', label: 'Page Load Time' },
    ],
  },
  {
    title: 'F1IQ — Formula 1 Intelligence Platform',
    description:
      'F1IQ is a production Formula 1 analytics product built to turn third-party race data into actionable insights. I evolved the platform into a premium SaaS experience while preserving core data logic and reliability. It unifies live race diagnostics, driver and team modeling, circuit strategy context, and season-level narrative intelligence in one product.',
    technologies: [
      'React 18',
      'TypeScript',
      'Vite',
      'React Router DOM',
      'Tailwind CSS',
      'PostCSS',
      'Recharts',
      'Zod',
      'Lucide React',
      'Vercel Analytics',
      'Jolpica Ergast F1 API',
    ],
    showAllTechnologies: true,
    image: 'https://images2.alphacoders.com/121/1214052.png',
    githubLink: 'https://github.com/harisejaz2206/formula1-analytics',
    liveLink: 'https://f1iq.com',
    keyFeatures: [
      'Live Race Intelligence: season and round-aware race analysis with lap behavior, pit-stop context, position deltas, and qualifying-to-finish comparisons',
      'Driver and Team Modeling: standings-driven models with form, consistency, racecraft, pressure, balance, and depth signals',
      'Circuit Context Engine: circuit archetyping with weather pressure weighting, pole-to-win tendency, winner-grid behavior, and volatility indicators',
      'Season Storyline Lab: championship tension metrics, momentum trends, leader-gap arcs, constructor parity views, and swing-moment timeline',
      'Cross-product UX layer: premium responsive navigation, dark and light theming, resilient loading and error states, and consistent analytics presentation',
      'Engineered typed data contracts with Zod validation, resilient fetch logic (timeout + retries), and TTL caching for third-party API stability',
      'Built deterministic frontend analytics modeling with composable helpers, memoized computations, route-level code splitting, and multi-view Recharts narratives',
    ],
    stats: [
      { value: '7', label: 'Routed Surfaces' },
      { value: '11', label: 'API Methods' },
      { value: '20+', label: 'Derived Indicators' },
    ],
  },
  {
    title: 'Haris Ejaz × WHOOP 5.0 — Performance Capsule',
    description:
      'A cinematic performance campaign concept where recovery data meets editorial motion through scroll chapters, disciplined typography, and premium UX clarity.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis', 'React Router DOM'],
    showAllTechnologies: true,
    image: '/images/harisxwhoop-ss.png',
    liveLink: 'https://whoop.harisejaz.com',
    keyFeatures: [
      'Directed a campaign-style landing architecture with full-screen storytelling chapters and route-level continuity',
      'Engineered a reusable motion system with Framer Motion, intersection-based reveals, and reduced-motion support',
      'Built a polished commerce-style flow with drops grid, product detail, strap selection, and animated cart drawer',
      'Integrated cinematic media handling, curated image grading, and accessibility-first interaction patterns',
      'Crafted signature moments including masked hero reveals, animated metrics with waveform feedback, and spotlight-backed capsule interactions',
    ],
    stats: [
      { value: '8', label: 'Scroll Chapters' },
      { value: '16', label: 'UI Modules' },
      { value: '6', label: 'Interactive Flows' },
    ],
  },
  {
    title: 'THE SYSTEM — Scroll Film Portfolio',
    description:
      'A campaign-style scroll film portfolio engineered to convert attention into project intent using cinematic choreography, typography-led hierarchy, and layered depth systems.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'GSAP', 'ScrollTrigger', 'SplitType', 'Lenis'],
    showAllTechnologies: true,
    image: '/images/the-system-haris-ss.png',
    liveLink: 'https://thesystem.harisejaz.com',
    keyFeatures: [
      'Built a reusable GSAP and ScrollTrigger choreography system with pinned chapters, scrub timelines, and section rhythm control',
      'Implemented a typography system for editorial scale shifts and SplitType-driven masked headline reveals',
      'Designed a global depth stack with fixed radial lighting, subtle grid scaffold, and grain texture for cinematic atmosphere',
      'Shipped responsive motion strategy with matchMedia, reduced-motion fallbacks, Lenis integration, and cleaned GSAP contexts',
      'Structured the narrative from hero and system boot to modules trilogy, proof drops, and conversion-focused closing sequence',
    ],
    stats: [
      { value: '5', label: 'Story Chapters' },
      { value: '3', label: 'Core Modules' },
      { value: '2', label: 'Conversion Paths' },
    ],
  },
];

export const Projects: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let cleanup: (() => void) | undefined;
    const showMarkers = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('stdebug');

    const runReveal = async () => {
      try {
        const { gsap } = await loadGsap();

        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
          const cards = gsap.utils.toArray<HTMLElement>('[data-project-card]');
          cards.forEach((card) => {
            gsap.fromTo(
              card,
              { autoAlpha: 0, y: 90, scale: 0.94 },
              {
                autoAlpha: 1,
                y: 0,
                scale: 1,
                duration: 0.95,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 88%',
                  once: true,
                  markers: showMarkers,
                },
              }
            );
          });
        }, sectionRef);

        cleanup = () => ctx.revert();
      } catch {
        // Framer handles baseline transitions if GSAP fails to load.
      }
    };

    runReveal();
    return () => cleanup?.();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])'
    );
    focusable?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [activeProject]);

  return (
    <div ref={sectionRef} className="space-y-10">
      <SectionHeader
        eyebrow="Projects"
        title="Case studies engineered for depth and clarity."
        subtitle="Featured builds with stack context, measurable outcomes, and implementation highlights."
      />

      <MotionReveal delay={0.08}>
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={project.title} data-project-card className="self-start">
            <ProjectCard
              project={project}
              expanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
              onQuickView={() => setActiveProject(project)}
            />
          </div>
        ))}
      </div>
      </MotionReveal>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/70 p-4 md:items-center"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={`${activeProject.title} quick view`}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-lg border border-line bg-surface-1 p-5 shadow-surface-xl md:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.15em] text-brand">Case Study Quick View</p>
                  <h3 className="mt-1 text-2xl font-bold text-text-strong">{activeProject.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="ring-focus rounded-md border border-line bg-surface-2 p-2 text-text-body hover:text-text-strong"
                  aria-label="Close case study dialog"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-text-body">{activeProject.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.technologies.map((tech) => (
                  <TagChip key={tech} label={tech} />
                ))}
              </div>
              {activeProject.keyFeatures && (
                <ul className="mt-6 space-y-3">
                  {activeProject.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-body">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard: React.FC<{
  project: Project;
  expanded: boolean;
  onToggle: () => void;
  onQuickView: () => void;
}> = ({ project, expanded, onToggle, onQuickView }) => {
  const visibleTags = project.showAllTechnologies ? project.technologies : project.technologies.slice(0, 5);
  const hiddenCount = project.technologies.length - visibleTags.length;

  return (
    <SurfaceCard className="overflow-hidden" interactive>
      <div className="relative h-44 overflow-hidden border-b border-line bg-surface-2">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-brand-soft to-surface-2" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/25 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <h3 className="text-balance text-lg font-bold text-white md:text-xl">{project.title}</h3>
          <div className="rounded-full bg-emerald-400/90 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-950">
            Live
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <p className="text-sm leading-relaxed text-text-body">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {visibleTags.map((tech) => (
            <TagChip key={tech} label={tech} />
          ))}
          {hiddenCount > 0 && <TagChip label={`+${hiddenCount} more`} />}
        </div>

        {project.stats && (
          <div className="grid grid-cols-3 gap-2">
            {project.stats.map((stat) => (
              <MetricPill key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-2">
          {project.liveLink && (
            <SecondaryCTA href={project.liveLink} target="_blank" rel="noopener noreferrer" icon={<ExternalLink size={15} />}>
              View Project
            </SecondaryCTA>
          )}
          {project.githubLink && (
            <SecondaryCTA href={project.githubLink} target="_blank" rel="noopener noreferrer" icon={<Github size={15} />}>
              Source
            </SecondaryCTA>
          )}
          <SecondaryCTA onClick={onQuickView} icon={<Eye size={15} />}>
            Quick View
          </SecondaryCTA>
          <button
            type="button"
            onClick={onToggle}
            className="ring-focus inline-flex items-center gap-1 rounded-md border border-line bg-surface-1 px-4 py-2 text-sm font-semibold text-text-body hover:border-brand/30 hover:text-brand"
            aria-expanded={expanded}
          >
            Highlights
            <ChevronDown size={15} className={`transition-transform ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {expanded && project.keyFeatures && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden rounded-md border border-line bg-surface-2"
            >
              <ul className="space-y-3 p-4">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-text-body">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-line px-4 py-3">
                <UpworkLink
                  placement="projects_highlight_drawer"
                  variant="inline"
                  ariaLabel="Hire via Upwork from project highlights"
                >
                  Want something like this? Hire via Upwork
                </UpworkLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SurfaceCard>
  );
};

export default Projects;
