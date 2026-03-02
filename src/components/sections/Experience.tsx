import React, { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Calendar, ChevronDown, ExternalLink, MapPin } from 'lucide-react';
import { Experience } from '../../types';
import { SectionHeader, SurfaceCard } from '../ui/primitives';
import { MotionReveal } from '../ui/MotionReveal';

const experiences: Experience[] = [
  {
    company: 'Septem Systems',
    position: 'Software Engineer',
    duration: 'February 2025 – Present',
    location: 'Lahore, Punjab, Pakistan',
    companyUrl: 'https://septemsystems.com/',
    description: [
      'Delivered core platform engineering for BigScoots V2, a multi-tenant NestJS microservices SaaS.',
      'Architected distributed RBAC and ACL across services to keep authorization decisions consistent at scale.',
      'Built a Redis-backed permission layer to reduce authorization latency across service boundaries.',
      'Implemented context-aware guards for tenant, team, and collaboration-level access control.',
      'Refactored auth contracts into shared libraries to reduce policy drift and simplify cross-service rollout.',
      'Designed secure inter-service communication patterns with explicit trust boundaries and validation.',
      'Implemented Cloudflare Worker gateway logic to centralize edge routing and policy enforcement.',
      'Added HMAC request signing and verification between services to harden request integrity.',
      'Drove OAuth, JWT, and refresh token lifecycle hardening with practical security and UX tradeoff analysis.',
      'Improved GitLab CI and GitHub Actions workflows for structured deployments and environment-aware automation.',
    ],
  },
  {
    company: 'Innovent Tech Solutions',
    position: 'Associate Software Engineer',
    duration: 'March 2024 – January 2025',
    location: 'Dubai, United Arab Emirates',
    companyUrl: 'https://www.innovent.io/',
    description: [
      "Co-developed a comprehensive 'Things' and 'Thing Types' system, enabling dynamic object modeling and relationships across enterprise applications, significantly reducing development time for new features",
      'Designed and developed a flexible Dynamic Forms engine supporting 12+ input types, allowing non-technical administrators to create complex forms with data relationships, validation rules, and business logic without coding',
      'Architected a sophisticated offline mapping system by integrating GeoServer WMS (Web Map Service) with MapboxGL, implementing custom raster tile services and proxy middleware for seamless rendering of multi-layered GeoTIFF data through RESTful APIs',
      'Engineered a distributed microservices architecture integrating Docker-containerized GeoServer (v2.26.2), Node.js proxy middleware, and static file serving, implementing CORS handling and secure WebSocket connections for real-time geospatial data streaming',
      'Developed an enterprise-grade geospatial infrastructure utilizing MapboxGL, GeoServer WMS, and custom tile services, implementing layer opacity controls, dynamic bounding box calculations, and efficient raster data rendering through EPSG:3857 projection system',
      'Engineered a sophisticated Dynamic Reporting architecture integrating with the Things framework, featuring tabular, historical, geographical, and summary views, powered by MongoDB aggregation pipelines and mongoose hooks',
      'Built secure role-based access control system with JWT authentication, managing menu items and permissions through backend configuration',
      'Implemented efficient state management patterns using Redux ecosystem (Redux Saga, Redux Thunk) to handle complex application states and async operations',
      'Created detailed technical documentation including Business Requirement Documents (BRDs) and UML diagrams to facilitate team understanding and project maintenance',
      'Successfully deployed enterprise solutions for government and large-scale clients including Ministry of Interior (Saudi Arabia), Abu Dhabi Civil Defense (ADCD), and RAK Ceramics',
      'Optimized MongoDB operations through advanced aggregation pipelines and indexing strategies, improving query performance and data retrieval efficiency',
      'Developed a comprehensive API documentation system using Swagger UI, enabling developers to easily understand and interact with the API',
    ],
  },
  {
    company: 'Renesis Tech Pvt. Ltd',
    position: 'Internee Software Engineer',
    duration: 'July 2023 – September 2023',
    location: 'Lahore, Punjab, Pakistan',
    companyUrl: 'https://renesistech.com',
    description: [
      'Developed and integrated RESTful APIs using Nest.js, implementing best practices for error handling, validation, and TypeScript interfaces',
      'Successfully led the API integration effort for Adboost-AI platform, coordinating with team members and ensuring seamless data flow between services',
      'Built responsive and performant user interfaces using Next.js and React.js, focusing on component reusability and modern React patterns',
      'Implemented proper API authentication, request validation, and error handling patterns across multiple microservices',
      'Gained hands-on experience with full-stack JavaScript development, including Express.js middleware, React hooks, and Next.js server-side rendering',
      'Participated in code reviews and technical discussions, receiving mentorship on architectural decisions and coding best practices',
    ],
  },
  {
    company: 'FaithOn Technologies',
    position: 'Frontend Web Development Intern',
    duration: 'March 2023 – May 2023',
    location: 'Lahore, Punjab, Pakistan',
    description: [
      'Engineered reusable React components following component composition principles and implementing proper prop typing',
      'Developed interactive user interfaces using modern React patterns including hooks, context, and efficient state management',
      'Collaborated with senior developers to implement responsive designs using Tailwind CSS and modern CSS practices',
      'Participated in structured learning exercises covering frontend architecture, component lifecycle, and React performance optimization',
      'Contributed to the development of a component library, focusing on maintainability, documentation, and consistent styling',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true });
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const timelineItems = useMemo(
    () => experiences.map((experience, index) => ({ index, company: experience.company, duration: experience.duration })),
    []
  );

  const handleFocusCompany = (index: number) => {
    setActiveIndex(index);
    setExpanded((current) => ({ ...current, [index]: true }));
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="space-y-12">
      <SectionHeader
        eyebrow="Experience"
        title="Professional journey with platform-level impact."
        subtitle="From productized frontend systems to secure multi-tenant architecture and delivery pipelines."
      />

      <MotionReveal delay={0.08}>
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-28 space-y-3 rounded-md border border-line bg-surface-1 p-4 shadow-surface">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-brand">Timeline Rail</p>
            {timelineItems.map((item) => {
              const isActive = item.index === activeIndex;
              return (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => handleFocusCompany(item.index)}
                  className={`ring-focus w-full rounded-md border px-3 py-3 text-left transition-colors ${
                    isActive
                      ? 'border-brand/40 bg-brand-soft text-text-strong'
                      : 'border-line bg-surface-1 text-text-body hover:border-brand/30'
                  }`}
                  aria-current={isActive ? true : undefined}
                >
                  <p className="text-sm font-semibold">{item.company}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">{item.duration}</p>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="space-y-6">
          {experiences.map((experience, index) => {
            const isExpanded = !!expanded[index];
            const summary = experience.description.slice(0, 2);
            const remaining = experience.description.slice(2);

            return (
              <motion.div
                key={experience.company}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onViewportEnter={() => setActiveIndex(index)}
              >
                <SurfaceCard className="overflow-hidden">
                  <div className="border-b border-line bg-surface-2 p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-text-strong">{experience.company}</h3>
                          {experience.companyUrl && (
                            <a
                              href={experience.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ring-focus rounded-md p-1 text-text-muted hover:text-brand"
                              aria-label={`Open ${experience.company} website`}
                            >
                              <ExternalLink size={15} />
                            </a>
                          )}
                        </div>
                        <p className="mt-1 text-sm font-semibold text-brand">{experience.position}</p>
                      </div>

                      <div className="space-y-2 text-sm text-text-body">
                        <p className="flex items-center gap-2">
                          <Calendar size={14} className="text-text-muted" />
                          {experience.duration}
                        </p>
                        <p className="flex items-center gap-2">
                          <MapPin size={14} className="text-text-muted" />
                          {experience.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-6">
                    <ul className="space-y-3">
                      {summary.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-text-body">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      onClick={() => setExpanded((current) => ({ ...current, [index]: !isExpanded }))}
                      className="ring-focus inline-flex items-center gap-2 rounded-md border border-line bg-surface-1 px-4 py-2 text-sm font-semibold text-text-body hover:border-brand/30 hover:text-brand"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? 'Hide detailed outcomes' : `Show ${remaining.length} detailed outcomes`}
                      <ChevronDown size={15} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isExpanded && remaining.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 border-t border-line pt-4">
                            {remaining.map((item) => (
                              <li key={item} className="flex items-start gap-3 text-sm text-text-body">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </SurfaceCard>
              </motion.div>
            );
          })}
        </div>
      </div>
      </MotionReveal>
    </div>
  );
};
