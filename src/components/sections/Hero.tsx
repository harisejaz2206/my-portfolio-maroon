import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Briefcase, ExternalLink, Github, Linkedin, Trophy, Twitter, X } from 'lucide-react';
import { PrimaryCTA, SecondaryCTA, SurfaceCard, TrustChip } from '../ui/primitives';
import { loadGsap } from '../../lib/gsap';
import { UpworkLink } from '../ui/UpworkLink';

type ProofMetric = {
  label: string;
  target: number;
  format: (value: number) => string;
};

const proofMetrics: ProofMetric[] = [
  { label: 'Products Shipped', target: 4, format: (value) => `${Math.round(value)}` },
  { label: 'Monthly Users', target: 5000, format: (value) => `${(Math.round(value) / 1000).toFixed(1).replace('.0', '')}k+` },
  { label: 'Avg Response SLA', target: 24, format: (value) => `${Math.round(value)}h` },
];

export const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const endorsementTriggerRef = useRef<HTMLButtonElement>(null);
  const endorsementModalRef = useRef<HTMLDivElement>(null);
  const primaryCtaRef = useRef<HTMLDivElement>(null);
  const secondaryCtaRef = useRef<HTMLDivElement>(null);
  const [metricValues, setMetricValues] = useState<string[]>(() => proofMetrics.map(() => '0'));
  const [showEndorsementHoverPreview, setShowEndorsementHoverPreview] = useState(false);
  const [isEndorsementModalOpen, setIsEndorsementModalOpen] = useState(false);

  const supportsHover = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setMetricValues(proofMetrics.map((metric) => metric.format(metric.target)));
      return;
    }

    if (!heroRef.current) return;

    let cleanup: (() => void) | undefined;
    const showMarkers = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('stdebug');

    const runHeroTimeline = async () => {
      try {
        const { gsap } = await loadGsap();
        const localCleanups: Array<() => void> = [];

        const ctx = gsap.context(() => {
          const introTimeline = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.15 });

          introTimeline
            .fromTo(
              '[data-hero-mask="kicker"]',
              { opacity: 0, y: 18, clipPath: 'inset(0 0 100% 0)' },
              { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 0.95 }
            )
            .fromTo(
              '[data-hero-mask="title"]',
              { opacity: 0, y: 52, clipPath: 'inset(0 0 100% 0)' },
              { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.55 },
              '-=0.45'
            )
            .fromTo(
              '[data-hero-mask="subtitle"]',
              { opacity: 0, y: 36, clipPath: 'inset(0 0 100% 0)' },
              { opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)', duration: 1.25 },
              '-=0.88'
            )
            .fromTo(
              '[data-proof-chip]',
              { opacity: 0, y: 24, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.82, stagger: 0.28, ease: 'power2.out' },
              '-=0.5'
            )
            .fromTo(
              '[data-hero-cta]',
              { opacity: 0, y: 16 },
              { opacity: 1, y: 0, duration: 0.78, stagger: 0.18 },
              '-=0.48'
            )
            .fromTo(
              '[data-hero-endorsement]',
              { opacity: 0, y: 14 },
              { opacity: 1, y: 0, duration: 0.8 },
              '-=0.5'
            )
            .fromTo(
              '[data-hero-socials]',
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.62 },
              '-=0.46'
            )
            .fromTo(
              '[data-hero-visual]',
              { opacity: 0, y: 32, scale: 0.98 },
              { opacity: 1, y: 0, scale: 1, duration: 1.1 },
              '-=1.28'
            );

          introTimeline.call(() => {
            proofMetrics.forEach((metric, index) => {
              const proxy = { value: 0 };
              gsap.to(proxy, {
                value: metric.target,
                duration: 2.05,
                delay: index * 0.12,
                ease: 'power2.out',
                onUpdate: () => {
                  const nextValue = metric.format(proxy.value);
                  setMetricValues((current) => {
                    if (current[index] === nextValue) return current;
                    const copy = [...current];
                    copy[index] = nextValue;
                    return copy;
                  });
                },
                onComplete: () => {
                  const nextValue = metric.format(metric.target);
                  setMetricValues((current) => {
                    if (current[index] === nextValue) return current;
                    const copy = [...current];
                    copy[index] = nextValue;
                    return copy;
                  });
                },
              });
            });
          }, undefined, '>-0.7');

          gsap.to('[data-hero-parallax="text"]', {
            y: -34,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top+=70',
              end: 'bottom top',
              scrub: 0.85,
              markers: showMarkers,
            },
          });

          gsap.to('[data-hero-parallax="visual"]', {
            y: 26,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top+=70',
              end: 'bottom top',
              scrub: 0.85,
              markers: showMarkers,
            },
          });

          gsap.to('[data-hero-grid]', {
            y: 54,
            scale: 1.04,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top+=70',
              end: 'bottom top',
              scrub: 1,
              markers: showMarkers,
            },
          });

          if (supportsHover) {
            const grid = heroRef.current?.querySelector<HTMLElement>('[data-hero-grid]');
            if (grid) {
              const moveGridX = gsap.quickTo(grid, 'x', { duration: 0.5, ease: 'power3.out' });
              const moveGridY = gsap.quickTo(grid, 'y', { duration: 0.5, ease: 'power3.out' });

              const onPointerMove = (event: PointerEvent) => {
                if (!heroRef.current) return;
                const rect = heroRef.current.getBoundingClientRect();
                const pointerX = (event.clientX - rect.left) / rect.width - 0.5;
                const pointerY = (event.clientY - rect.top) / rect.height - 0.5;
                moveGridX(pointerX * 22);
                moveGridY(pointerY * 16);
              };

              const onPointerLeave = () => {
                moveGridX(0);
                moveGridY(0);
              };

              heroRef.current.addEventListener('pointermove', onPointerMove);
              heroRef.current.addEventListener('pointerleave', onPointerLeave);
              localCleanups.push(() => {
                heroRef.current?.removeEventListener('pointermove', onPointerMove);
                heroRef.current?.removeEventListener('pointerleave', onPointerLeave);
              });
            }

            const setupMagneticHover = (element: HTMLElement | null, strength = 10) => {
              if (!element) return;
              const moveX = gsap.quickTo(element, 'x', { duration: 0.26, ease: 'power3.out' });
              const moveY = gsap.quickTo(element, 'y', { duration: 0.26, ease: 'power3.out' });
              const onMove = (event: PointerEvent) => {
                const rect = element.getBoundingClientRect();
                const x = (event.clientX - rect.left) / rect.width - 0.5;
                const y = (event.clientY - rect.top) / rect.height - 0.5;
                moveX(x * strength);
                moveY(y * strength);
              };
              const onLeave = () => {
                moveX(0);
                moveY(0);
              };
              element.addEventListener('pointermove', onMove);
              element.addEventListener('pointerleave', onLeave);
              localCleanups.push(() => {
                element.removeEventListener('pointermove', onMove);
                element.removeEventListener('pointerleave', onLeave);
              });
            };

            setupMagneticHover(primaryCtaRef.current, 11);
            setupMagneticHover(secondaryCtaRef.current, 9);
          }
        }, heroRef);

        cleanup = () => {
          localCleanups.forEach((dispose) => dispose());
          ctx.revert();
        };
      } catch {
        setMetricValues(proofMetrics.map((metric) => metric.format(metric.target)));
      }
    };

    runHeroTimeline();
    return () => cleanup?.();
  }, [prefersReducedMotion, supportsHover]);

  useEffect(() => {
    if (!isEndorsementModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    const triggerElement = endorsementTriggerRef.current;
    document.body.style.overflow = 'hidden';

    const focusableElements = endorsementModalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusableElements?.[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsEndorsementModalOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !focusableElements || focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      triggerElement?.focus();
    };
  }, [isEndorsementModalOpen]);

  return (
    <div ref={heroRef} className="relative grid gap-10 pt-24 md:grid-cols-[1.25fr_0.9fr] md:items-center md:gap-12 md:pt-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          data-hero-grid
          className="absolute inset-[-10%] opacity-40 [background-image:linear-gradient(to_right,hsl(var(--color-line)/0.55)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--color-line)/0.55)_1px,transparent_1px)] [background-size:34px_34px]"
        />
        <div className="absolute -right-16 top-2 h-64 w-64 rounded-full bg-brand-soft/70 blur-3xl" />
      </div>

      <div data-hero-parallax="text" className="relative z-10 space-y-8">
        <p data-hero-mask="kicker" className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
          Product Engineer • Frontend Systems • SaaS Execution
        </p>

        <h1
          data-hero-mask="title"
          className="max-w-4xl text-balance text-4xl font-bold leading-[1.04] text-text-strong sm:text-5xl md:text-6xl"
        >
          I build software products that make complex systems feel obvious.
        </h1>

        <p data-hero-mask="subtitle" className="max-w-2xl text-lg text-text-body">
          Software Engineer at Septem Systems. I ship product-grade UX and platform logic that hold up in production.
        </p>

        <div className="flex flex-wrap gap-3">
          <div ref={primaryCtaRef} data-hero-cta className="inline-flex">
            <PrimaryCTA href="#projects" icon={<ArrowRight size={16} />}>
              View Featured Work
            </PrimaryCTA>
          </div>
          <div ref={secondaryCtaRef} data-hero-cta className="inline-flex">
            <SecondaryCTA href="#contact" icon={<ExternalLink size={16} />}>
              Start a Project
            </SecondaryCTA>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {proofMetrics.map((metric, index) => (
            <div
              key={metric.label}
              data-proof-chip
              className="rounded-md border border-line bg-surface-2 px-4 py-3"
            >
              <div className="font-mono text-lg font-semibold text-brand">{metricValues[index]}</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-muted">{metric.label}</div>
            </div>
          ))}
        </div>

        <TrustChip
          label="Available on Upwork"
          detail="Contracts + escrow supported"
          icon={<Briefcase size={14} />}
          action={
            <UpworkLink
              placement="hero_chip"
              variant="inline"
              showIcon
              className="text-xs"
              ariaLabel="Open Upwork profile from hero trust chip"
            >
              View profile
            </UpworkLink>
          }
        />

        <button
          ref={endorsementTriggerRef}
          type="button"
          data-hero-endorsement
          onClick={() => setIsEndorsementModalOpen(true)}
          onMouseEnter={() => supportsHover && setShowEndorsementHoverPreview(true)}
          onMouseLeave={() => supportsHover && setShowEndorsementHoverPreview(false)}
          className="ring-focus relative w-full max-w-2xl rounded-md text-left"
          aria-haspopup="dialog"
          aria-expanded={isEndorsementModalOpen}
          aria-controls="endorsement-dialog"
        >
          <SurfaceCard className="p-4 sm:p-5" interactive>
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="mt-0.5 rounded-full bg-brand-soft p-2 text-brand">
                <Trophy size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-text-muted">Endorsement</p>
                <p className="mt-1 text-sm text-text-body sm:text-base">
                  “You have some really sleek design concepts.” <span className="font-semibold text-text-strong">Ian Brunton</span>, Head of Software Engineering at Red Bull Racing.
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.13em] text-brand">
                  {supportsHover ? 'Hover to preview • Click to open' : 'Tap to open'}
                </p>
              </div>
            </div>
          </SurfaceCard>

          <AnimatePresence>
            {showEndorsementHoverPreview && supportsHover && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 z-40 mb-3 hidden w-[360px] md:block"
              >
                <div className="rounded-md border border-line bg-surface-1 p-2 shadow-surface-xl">
                  <img
                    src="/images/ian-endorsement-dm.png"
                    alt="Preview of Ian Brunton endorsement screenshot"
                    className="w-full rounded-md border border-line/70"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        <div data-hero-socials className="flex items-center gap-3">
          <SocialLink href="https://github.com/harisejaz2206" label="GitHub">
            <Github size={18} />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/harisejaz22/" label="LinkedIn">
            <Linkedin size={18} />
          </SocialLink>
          <SocialLink href="https://x.com/buildwithharis" label="X">
            <Twitter size={18} />
          </SocialLink>
        </div>
      </div>

      <div data-hero-parallax="visual" data-hero-visual className="relative z-10">
        <SurfaceCard className="overflow-hidden p-2 shadow-surface-lg">
          <img
            src="/images/profilepic.png"
            alt="Portrait of Haris Ejaz"
            className="h-full min-h-[320px] w-full rounded-md object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute bottom-6 left-6 rounded-md border border-white/70 bg-white/90 px-4 py-2 backdrop-blur">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand">Current Focus</p>
            <p className="mt-1 text-sm font-semibold text-text-strong">Platform-grade UX + analytics products</p>
          </div>
        </SurfaceCard>
      </div>

      <AnimatePresence>
        {isEndorsementModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-end justify-center bg-slate-950/70 p-0 md:items-center md:p-4"
            onClick={() => setIsEndorsementModalOpen(false)}
          >
            <motion.div
              id="endorsement-dialog"
              ref={endorsementModalRef}
              role="dialog"
              aria-modal="true"
              aria-label="LinkedIn endorsement from Ian Brunton"
              aria-describedby="endorsement-context"
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.24 }}
              className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-t-xl border border-line bg-surface-1 p-4 shadow-surface-xl md:rounded-lg md:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-brand">LinkedIn Endorsement</p>
                  <h3 className="mt-1 text-xl font-bold text-text-strong">Ian Brunton • Red Bull Racing</h3>
                  <p id="endorsement-context" className="mt-2 max-w-2xl text-sm text-text-body">
                    Why it matters: independent validation from a senior engineering leader in a world-class high-performance environment.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEndorsementModalOpen(false)}
                  className="ring-focus rounded-md border border-line bg-surface-2 p-2 text-text-body hover:text-text-strong"
                  aria-label="Close endorsement dialog"
                >
                  <X size={18} />
                </button>
              </div>
              <img
                src="/images/ian-endorsement-dm.png"
                alt="Screenshot of endorsement message from Ian Brunton"
                className="w-full rounded-md border border-line/80 shadow-surface"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; label: string; children: React.ReactNode }> = ({ href, label, children }) => (
  <motion.a
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.98 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="ring-focus flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface-1 text-text-body shadow-surface hover:border-brand/30 hover:text-brand"
  >
    {children}
  </motion.a>
);
