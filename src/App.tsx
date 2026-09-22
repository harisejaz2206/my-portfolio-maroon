import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail, Menu, X } from 'lucide-react';
import { track } from './lib/analytics';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  {
    id: 'arcflow',
    number: '01',
    title: 'arcflow',
    kind: 'Engineering Founder / Independent product',
    stamp: 'PRIMARY CASE STUDY',
    statement: 'A place to understand the systems behind the software.',
    description:
      'I founded Arcflow to make serious engineering concepts easier to understand. It is a structured learning platform for system design, distributed systems, backend architecture, AWS, scalability, reliability, and AI engineering from first principles.',
    ownershipLabel: 'FOUNDER OWNERSHIP',
    ownership:
      'Concept, product direction, learning architecture, information architecture, UX, application architecture, content tooling, and production implementation.',
    deliveryLabel: 'BUILT ACROSS',
    delivery: 'Product · Interface · Content platform · Interactive systems · Deployment',
    href: 'https://www.arcflow.me',
    image: '/images/arcflow-architecture.png',
    theme: 'arcflow',
  },
  {
    id: 'al-thakeel',
    number: '02',
    title: 'AL THAKEEL',
    kind: 'Marketplace / Product engineering',
    stamp: 'MARKETPLACE CASE STUDY',
    statement: 'Heavy equipment. A lighter way to find it.',
    description:
      'I architected and implemented a bilingual heavy-equipment marketplace for Kuwait and the wider Gulf, spanning product flows, accounts, data, and production delivery.',
    ownershipLabel: 'BUILT END TO END',
    ownership:
      'Frontend and backend architecture, database modelling, authentication, individual and business accounts, and marketplace flows for selling, buying, and renting equipment.',
    deliveryLabel: 'PRODUCT + SYSTEM',
    delivery:
      'Arabic and English localization, RTL, responsive interfaces, API integration, infrastructure, deployment, and the engineering decisions connecting them.',
    image: '/images/al-thakeel-industrial.jpg',
    theme: 'thakeel',
  },
];

const credentialFlags = {
  // Set to true only after the official exam result is received.
  awsSolutionsArchitectAssociate: false,
};

const awsCredential = {
  title: 'AWS Certified Solutions Architect – Associate',
  issuer: 'Amazon Web Services',
};

const experience = [
  {
    period: 'CURRENT',
    role: 'Engineering Founder',
    company: 'Arcflow',
    companyHref: 'https://arcflow.me',
    copy: 'Founded and building the product end to end, from learning architecture and systems content to application engineering and production delivery.',
    current: true,
  },
  {
    period: 'CURRENT',
    role: 'Product Development Partner',
    company: 'Aswad Labs',
    copy: 'Partnering on product development and engineering delivery.',
    current: true,
  },
  {
    period: 'FEB 2025 / MAY 2026',
    role: 'Software Engineer',
    company: 'Septem Systems',
    copy: 'Built multi-tenant platform systems, authorization infrastructure, secure service boundaries, and delivery workflows.',
  },
  {
    period: 'MAR 2024 / JAN 2025',
    role: 'Associate Software Engineer',
    company: 'Innovent Tech Solutions',
    copy: 'Built enterprise product systems spanning dynamic forms, reporting, geospatial infrastructure, access control, and data-heavy workflows.',
  },
  {
    period: 'JUL / SEP 2023',
    role: 'Software Engineering Intern',
    company: 'Renesis Tech',
    copy: 'Worked across APIs and product interfaces, leading integration work for a full-stack product.',
  },
];

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ArcflowLink({ className = '' }: { className?: string }) {
  return <a className={`arcflow-word ${className}`} href="https://arcflow.me" target="_blank" rel="noreferrer" onClick={() => track('project_visit', { project: 'Arcflow', placement: 'inline' })}>arcflow<span aria-hidden="true">↗</span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Haris Ejaz, back to top">HE<span>®</span></a>
      <p className="header-role">Software Engineer<br />Lahore, PK</p>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="availability" href="mailto:harisejaz2206@gmail.com"><span /> Available for select work</a>
      <button className="menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={24} /></button>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ clipPath: 'inset(0 0 100% 0)' }} animate={{ clipPath: 'inset(0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}>
            <div className="mobile-menu-top"><span>HARIS EJAZ</span><button type="button" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
            <nav aria-label="Mobile navigation">
              {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{link.label}</a>)}
            </nav>
            <p>Software, systems, and products. Built with care.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div className="hero-photo" style={{ y: reduceMotion ? 0 : photoY }}>
        <img src="/images/IMG_6997-portfolio.jpg" alt="Low-angle portrait of Haris Ejaz beneath a vivid blue sky" loading="eager" />
      </motion.div>
      <div className="hero-shade" />
      <motion.div className="hero-intro" style={{ y: reduceMotion ? 0 : copyY }}>
        <p className="eyebrow">PRODUCT ENGINEERING · SYSTEMS · INFRASTRUCTURE</p>
        <h1>Software engineer.<span>Builds the whole thing.</span></h1>
        <p className="hero-deck">From the interface people touch to the infrastructure that keeps it alive.</p>
      </motion.div>
      <motion.div className="hero-name" initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1.15, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} aria-label="Haris Ejaz">
        <span>HARIS</span><span>EJAZ</span>
      </motion.div>
      <a className="scroll-cue" href="#work"><ArrowDown size={17} /> Selected work</a>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <div className="section-tag"><span>00</span>Point of view</div>
      <Reveal className="manifesto-copy">
        <h2 id="manifesto-title">Good software is more than code that works.</h2>
        <p>It should make the hard parts feel deliberate: the model, the failure path, the interface, the tradeoff.</p>
      </Reveal>
      <Reveal className="manifesto-aside" delay={0.12}>
        <p>I like the seams where product decisions become system decisions. AI speeds up the work. It does not make the call.</p>
        <span>Three years in production systems.<br />Building with founder stakes now.</span>
      </Reveal>
    </section>
  );
}

function ArcflowVisual() {
  return <div className="project-visual arcflow-visual" aria-hidden="true"><span className="visual-stamp">PAIN FIRST / MECHANICS SECOND</span><img src="/images/arcflow-architecture.png" alt="" loading="lazy" /><div className="arc-orbit"><span>KNOWLEDGE SHOULD CONNECT</span></div></div>;
}

function ThakeelVisual() {
  return <div className="project-visual thakeel-visual" aria-hidden="true"><img src="/images/al-thakeel-industrial.jpg" alt="" loading="lazy" /><div className="thakeel-visual-meta"><span>HEAVY EQUIPMENT MARKETPLACE</span><span>KUWAIT / GULF</span></div><span className="visual-stamp">BUILT FOR THE GULF</span></div>;
}

function Project({ project }: { project: typeof projects[number] }) {
  return (
    <article className={`project project-${project.theme}`} id={`project-${project.id}`}>
      <div className="project-topline"><span>{project.number}</span><span>{project.kind}</span><span>{project.stamp}</span></div>
      <div className="project-title-wrap">
        <Reveal><h3>{project.title}</h3></Reveal>
        {project.theme === 'thakeel' && <div className="thakeel-identity"><span className="thakeel-arabic" lang="ar" dir="rtl">الثقيل</span><img src="/images/al-thakeel-logo.png" alt="Al Thakeel logo" loading="lazy" /><small>KUWAIT<br />GULF MARKETPLACE</small></div>}
        <p>{project.statement}</p>
      </div>
      <motion.div className="visual-wrap" initial={{ clipPath: 'inset(8% 8% 8% 8%)', scale: 0.96 }} whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }} viewport={{ once: true, margin: '-15%' }} transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}>
        {project.theme === 'arcflow' ? <ArcflowVisual /> : <ThakeelVisual />}
      </motion.div>
      <div className="project-details">
        <p className="project-description">{project.theme === 'arcflow' ? <>I founded <ArcflowLink className="project-arcflow-word" /> to make serious engineering concepts easier to understand. It is a structured learning platform for system design, distributed systems, backend architecture, AWS, scalability, reliability, and AI engineering from first principles.</> : project.description}</p>
        <div className="project-meta"><div><span>{project.ownershipLabel}</span><p>{project.ownership}</p></div><div><span>{project.deliveryLabel}</span><p>{project.delivery}</p></div></div>
        {project.href && <a className="text-link" href={project.href} target="_blank" rel="noreferrer" onClick={() => track('project_visit', { project: project.title })}>Visit the product <ArrowUpRight size={17} /></a>}
      </div>
    </article>
  );
}

function ProjectIndex() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const reduceMotion = useReducedMotion();
  const indexRef = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 330, damping: 34, mass: 0.45 });
  const y = useSpring(pointerY, { stiffness: 330, damping: 34, mass: 0.45 });

  const movePreview = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !indexRef.current) return;
    const bounds = indexRef.current.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left + 90);
    pointerY.set(event.clientY - bounds.top);
  };

  const focusPreview = (project: (typeof projects)[number]) => {
    setActive(project);
    if (!indexRef.current) return;
    pointerX.set(indexRef.current.clientWidth * 0.68);
    pointerY.set(indexRef.current.clientHeight * 0.5);
  };

  return (
    <div className="work-index" ref={indexRef} onPointerMove={movePreview} onPointerLeave={() => setActive(null)} role="navigation" aria-label="Jump to a selected project">
      {projects.map((project) => <a href={`#project-${project.id}`} key={project.id} onPointerEnter={() => setActive(project)} onFocus={() => focusPreview(project)} onBlur={() => setActive(null)}><span>{project.number}</span><strong className={`${project.theme}-index-title`}>{project.title}</strong><em>{project.theme === 'arcflow' ? 'Founder-led learning platform' : 'Gulf heavy-equipment marketplace'}</em><img className="work-index-thumb" src={project.image} alt="" loading="lazy" /></a>)}
      <AnimatePresence>{active && <motion.div className={`work-preview preview-${active.theme}`} aria-hidden="true" style={reduceMotion ? undefined : { x, y }} initial={{ opacity: 0, scale: 0.88, rotate: -3 }} animate={{ opacity: 1, scale: 1, rotate: active.theme === 'arcflow' ? -2 : 2 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}><img src={active.image} alt="" /><span>{active.number} / VIEW CASE STUDY</span></motion.div>}</AnimatePresence>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="work-section" aria-labelledby="work-title">
      <div className="work-heading"><div className="section-tag light"><span>01</span>Selected work</div><h2 id="work-title">One founded.<br /><em>One engineered.</em></h2><p>Independent product ownership meets substantial marketplace engineering.</p><ProjectIndex /></div>
      {projects.map((project) => <Project key={project.title} project={project} />)}
    </section>
  );
}

function Endorsement() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false); document.addEventListener('keydown', close); return () => document.removeEventListener('keydown', close); }, []);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [open]);

  return (
    <section className="endorsement" aria-labelledby="endorsement-title">
      <div className="endorsement-grid" aria-hidden="true" /><div className="section-tag light"><span>02</span>A good day online</div>
      <Reveal className="endorsement-headline"><p>SOMETIMES THE INTERNET</p><h2 id="endorsement-title">sends a message<br />from the <em>fast lane.</em></h2><div className="endorsement-story"><strong>A project I shared online reached Red Bull Racing.</strong><span>Ian Brunton replied with direct feedback and an invitation to discuss an open engineering role in Formula 1.</span></div></Reveal>
      <motion.button className="message-artifact" type="button" onClick={() => setOpen(true)} whileHover={{ rotate: -1.5, y: -10 }} whileTap={{ scale: 0.98 }} aria-label="Open Ian Brunton's message">
        <span className="paperclip" aria-hidden="true" /><img src="/images/ian-endorsement-dm.png" alt="LinkedIn message from Ian Brunton praising Haris's design concepts" loading="lazy" /><span className="artifact-note">CLICK TO READ</span>
      </motion.button>
      <div className="endorsement-caption"><p>“You have some really sleek design concepts.”</p><span>IAN BRUNTON<br />HEAD OF SOFTWARE ENGINEERING<br />RED BULL RACING</span></div>
      <AnimatePresence>{open && <motion.div className="image-dialog" role="dialog" aria-modal="true" aria-label="Ian Brunton message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}><button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close message"><X /></button><motion.img src="/images/ian-endorsement-dm.png" alt="LinkedIn message from Ian Brunton" initial={{ y: 30, rotate: 2 }} animate={{ y: 0, rotate: 0 }} onClick={(event) => event.stopPropagation()} /></motion.div>}</AnimatePresence>
    </section>
  );
}

function Engineering() {
  const principles = [
    ['01', 'Understand the system', 'The fastest implementation is useless when it solves the wrong boundary. I map the product, data, failure modes, and tradeoffs first.'],
    ['02', 'Use AI as leverage', 'Research, exploration, implementation, and testing move faster. Architecture, judgment, and accountability stay human.'],
    ['03', 'Ship the complete loop', 'A feature is not done at the pull request. It needs to work for the user, fit the system, and survive production.'],
  ];
  return (
    <section className="engineering" aria-labelledby="engineering-title">
      <div className="section-tag"><span>03</span>How I engineer</div><Reveal className="engineering-title"><h2 id="engineering-title">Fundamentals first.<br /><em>AI in the loop.</em></h2></Reveal>
      <div className="principles">{principles.map(([number, title, copy], index) => <Reveal className="principle" key={title} delay={index * 0.08}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </section>
  );
}

function Capabilities() {
  const capabilities = [
    ['01', 'Product engineering', 'I take products from rough requirements to working software. Architecture, interface, data, deployment, and the decisions between them.'],
    ['02', 'Backend + systems', 'APIs, authentication, data models, service boundaries, cloud infrastructure, and systems that keep their shape under real use.'],
    ['03', 'Delivery with ownership', 'I turn ambiguous product problems into shipped, operated software. One accountable engineering loop, not disconnected handoffs.'],
  ];
  return (
    <section className="capabilities" aria-labelledby="capabilities-title">
      <div className="section-tag light"><span>04</span>Capabilities</div>
      <div className="capabilities-intro"><Reveal><h2 id="capabilities-title">Bring me the part<br /><em>that crosses layers.</em></h2></Reveal><p>Most useful when product, system, and delivery decisions need to be made together.</p></div>
      <div className="capability-list">{capabilities.map(([number, title, copy], index) => <Reveal className="capability-row" key={title} delay={index * 0.06}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight aria-hidden="true" /></Reveal>)}</div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="section-tag"><span>05</span>Experience</div>
      <div className="experience-intro"><Reveal><h2 id="experience-title">Build the product.<br /><em>Own the consequences.</em></h2></Reveal><p>Founder-led product work, engineering partnerships, and the systems experience underneath.</p></div>
      <div className="experience-list">{experience.map((item) => <article className={item.current ? 'is-current' : ''} key={`${item.company}-${item.role}`}><span>{item.period}</span><div><h3>{item.role}</h3><p>{item.companyHref ? <ArcflowLink className="experience-arcflow" /> : item.company}</p></div><p>{item.copy}</p></article>)}</div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about-photo"><img src="/images/haris-youngpic.JPG" alt="Haris as a child, wearing a suit" loading="lazy" /><p>THE EARLY BUILD<br />BEFORE THE BUGS</p></div>
      <div className="about-copy"><div className="section-tag"><span>06</span>About, briefly</div><Reveal><h2 id="about-title">Curious enough to take it apart.<br /><em>Stubborn enough to put it back better.</em></h2></Reveal><div className="about-columns"><p>I’m Haris, a software engineer in Lahore. I care about the entire product: how it reads, how it moves, how its data flows, and what happens when something fails.</p><p>Alongside product partnerships, I’m building <ArcflowLink />. It is the learning platform I wish had existed when I started understanding complex systems.</p></div>{credentialFlags.awsSolutionsArchitectAssociate && <div className="credential-line"><span>CREDENTIAL</span><strong>{awsCredential.title}</strong><span>{awsCredential.issuer}</span></div>}</div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact-top"><div className="section-tag light"><span>07</span>Contact</div><p>Software engineer and founder. I take products from first architecture to production.</p></div>
      <a className="contact-link" href="mailto:harisejaz2206@gmail.com" onClick={() => track('contact_click', { placement: 'footer' })} aria-label="Email Haris Ejaz"><span>BRING ME</span><span>THE HARD PART.</span><Mail /><small><b>START A CONVERSATION</b>harisejaz2206@gmail.com</small></a>
      <div className="footer-meta"><p>HARIS EJAZ © {new Date().getFullYear()}</p><div><a href="https://github.com/harisejaz2206" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/harisejaz22/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://x.com/buildwithharis" target="_blank" rel="noreferrer">X ↗</a><a href="https://www.upwork.com/freelancers/harisejaz" target="_blank" rel="noreferrer">Upwork ↗</a></div><p>LAHORE / PK<br />UTC +5</p></div>
    </footer>
  );
}

function ScrollProgress() { const { scrollYProgress } = useScroll(); return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />; }

function App() {
  return <div className="portfolio-shell"><ScrollProgress /><Header /><main><Hero /><Manifesto /><Work /><Endorsement /><Engineering /><Capabilities /><Experience /><About /></main><Contact /></div>;
}

export default App;
