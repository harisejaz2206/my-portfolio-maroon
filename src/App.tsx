import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, X } from 'lucide-react';
import { ArcflowMedia } from './components/ArcflowMedia';
import { InteractionLayer } from './components/InteractionLayer';
import { ClipReveal, MediaReveal, Reveal } from './components/MotionPrimitives';
import { track } from './lib/analytics';
import { EDITORIAL_EASE } from './lib/motion';

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
    ownershipLabel: 'SCOPE',
    ownership: 'Web · API · Data · Infrastructure · Delivery',
    deliveryLabel: 'MARKET',
    delivery: 'Kuwait · Gulf · Arabic / English · RTL',
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

const resume = {
  // Add the PDF at public/haris-ejaz-resume.pdf, then set this value to that path.
  href: null as string | null,
};

const arcflowMotionMedia = {
  mp4: '/videos/arcflow-systems.mp4' as string | null,
  // Add the WebM export here when it is available.
  webm: null as string | null,
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

function ArcflowLink({ className = '' }: { className?: string }) {
  return <a className={`arcflow-word ${className}`} href="https://arcflow.me" target="_blank" rel="noreferrer" data-cursor="external" onClick={() => track('project_visit', { project: 'Arcflow', placement: 'inline' })}>arcflow<span aria-hidden="true">↗</span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <motion.header
      className="site-header"
      initial={reduceMotion ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.58, ease: EDITORIAL_EASE }}
    >
      <a className="wordmark" href="#top" aria-label="Haris Ejaz, back to top" data-magnetic>
        <img className="wordmark-mark" src="/images/haris-mark/svg/mark-white-red.svg" alt="" />
        <img className="wordmark-name" src="/images/haris-identity/web/haris-wordmark-compact-dark.svg" alt="" />
      </a>
      <p className="header-role">Software Engineer<br />Lahore, PK</p>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="availability" href="mailto:harisejaz2206@gmail.com" data-cursor="write"><span /> Available for select work</a>
      <button className="menu-button" type="button" onClick={() => setOpen(true)} aria-label="Open menu"><span className="menu-glyph" aria-hidden="true" /></button>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={reduceMotion ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }} animate={reduceMotion ? { opacity: 1 } : { clipPath: 'inset(0)' }} exit={reduceMotion ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: reduceMotion ? 0.15 : 0.55, ease: [0.76, 0, 0.24, 1] }}>
            <div className="mobile-menu-top"><span>HARIS EJAZ</span><button type="button" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
            <nav aria-label="Mobile navigation">
              {links.map((link, index) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}><small>0{index + 1}</small>{link.label}</a>)}
            </nav>
            <p>Software, systems, and products. Built with care.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const intro = {
    hidden: {},
    visible: { transition: { delayChildren: 0.16, staggerChildren: 0.1 } },
  };
  const introItem = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: EDITORIAL_EASE } },
  };
  const introLine = {
    hidden: { opacity: 0, y: '108%' },
    visible: { opacity: 1, y: '0%', transition: { duration: 0.82, ease: EDITORIAL_EASE } },
  };

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div
        className="hero-photo"
        style={{ y: reduceMotion ? 0 : photoY }}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.95, ease: EDITORIAL_EASE }}
      >
        <img src="/images/IMG_6997-portfolio.jpg" alt="Low-angle portrait of Haris Ejaz beneath a vivid blue sky" loading="eager" />
      </motion.div>
      <div className="hero-shade" />
      <motion.div className="hero-intro" style={{ y: reduceMotion ? 0 : copyY }} variants={intro} initial={reduceMotion ? false : 'hidden'} animate="visible">
        <motion.p className="eyebrow" variants={introItem}>PRODUCT ENGINEERING · SYSTEMS · INFRASTRUCTURE</motion.p>
        <h1>
          <span className="hero-line-mask"><motion.span className="hero-line" variants={introLine}>Software engineer.</motion.span></span>
          <span className="hero-line-mask hero-script-mask"><motion.span className="hero-line hero-line-script" variants={introLine}>Builds the whole thing.</motion.span></span>
        </h1>
        <motion.p className="hero-deck" variants={introItem}>I build products from interface to infrastructure.</motion.p>
      </motion.div>
      <motion.div className="hero-name" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.48, ease: EDITORIAL_EASE }} aria-label="Haris Ejaz">
        <span>HARIS EJAZ</span><span>PORTFOLIO / 2026</span>
      </motion.div>
      <motion.a className="scroll-cue" href="#work" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.68, ease: EDITORIAL_EASE }}><ArrowDown size={17} /> Selected work</motion.a>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="manifesto" aria-labelledby="manifesto-title">
      <div className="section-tag"><span>00</span>Point of view</div>
      <div className="manifesto-copy">
        <ClipReveal><h2 id="manifesto-title">Good software is more than code that works.</h2></ClipReveal>
        <Reveal delay={0.08}><p>It should make the hard parts feel deliberate: the model, the failure path, the interface, the tradeoff.</p></Reveal>
      </div>
      <Reveal className="manifesto-aside" delay={0.12}>
        <p>I like the seams where product decisions become system decisions. AI speeds up the work. It does not make the call.</p>
        <span>Three years in production systems.<br />Building with founder stakes now.</span>
      </Reveal>
    </section>
  );
}

function ArcflowVisual() {
  return <div className="project-visual arcflow-visual" aria-hidden="true"><span className="visual-stamp">PAIN FIRST / MECHANICS SECOND</span><ArcflowMedia poster="/images/arcflow-architecture.png" mp4={arcflowMotionMedia.mp4} webm={arcflowMotionMedia.webm} /><div className="arc-orbit"><span>KNOWLEDGE SHOULD CONNECT</span></div></div>;
}

function ThakeelVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [desktopMotion, setDesktopMotion] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-1.5%', '1.5%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.55], [1.035, 1]);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 961px) and (pointer: fine)');
    const update = () => setDesktopMotion(query.matches);
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  return <div className="project-visual thakeel-visual" ref={ref} aria-hidden="true"><motion.img src="/images/al-thakeel-industrial.jpg" alt="" loading="lazy" style={reduceMotion || !desktopMotion ? undefined : { y: imageY, scale: imageScale }} /><div className="thakeel-visual-meta"><span>HEAVY EQUIPMENT MARKETPLACE</span><span>KUWAIT / GULF</span></div><span className="visual-stamp">BUILT FOR THE GULF</span></div>;
}

function Project({ project }: { project: typeof projects[number] }) {
  return (
    <article className={`project project-${project.theme}`} id={`project-${project.id}`}>
      <div className="project-topline"><span>{project.number}</span><span>{project.kind}</span><span>{project.stamp}</span></div>
      {project.theme === 'thakeel' ? (
        <div className="project-title-wrap thakeel-title-wrap">
          <Reveal className="thakeel-title"><h3 aria-label="Al Thakeel"><span>AL</span><span>THAKEEL</span></h3></Reveal>
          <div className="thakeel-identity">
            <span className="thakeel-arabic" lang="ar" dir="rtl">الثقيل</span>
            <img src="/images/al-thakeel-logo.png" alt="Al Thakeel circular mark" loading="lazy" />
            <small>KUWAIT / GULF<br />HEAVY EQUIPMENT MARKETPLACE</small>
          </div>
          <p>{project.statement}</p>
        </div>
      ) : (
        <div className="project-title-wrap">
          <Reveal><h3>{project.title}</h3></Reveal>
          <p>{project.statement}</p>
        </div>
      )}
      <MediaReveal className="visual-wrap">
        {project.theme === 'arcflow' ? <ArcflowVisual /> : <ThakeelVisual />}
      </MediaReveal>
      <div className="project-details">
        <p className="project-description">{project.theme === 'arcflow' ? <>I founded <ArcflowLink className="project-arcflow-word" /> to make serious engineering concepts easier to understand. It is a structured learning platform for system design, distributed systems, backend architecture, AWS, scalability, reliability, and AI engineering from first principles.</> : project.description}</p>
        <div className={`project-meta ${project.theme === 'thakeel' ? 'project-meta-thakeel' : ''}`}><div><span>{project.ownershipLabel}</span><p>{project.ownership}</p></div><div><span>{project.deliveryLabel}</span><p>{project.delivery}</p></div></div>
        {project.href && <a className="text-link" href={project.href} target="_blank" rel="noreferrer" data-cursor="explore" data-magnetic onClick={() => track('project_visit', { project: project.title })}>Visit the product <ArrowUpRight size={17} /></a>}
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
      {projects.map((project) => <a href={`#project-${project.id}`} key={project.id} data-cursor={project.theme === 'arcflow' ? 'explore' : 'view'} onPointerEnter={() => setActive(project)} onFocus={() => focusPreview(project)} onBlur={() => setActive(null)}><span>{project.number}</span><strong className={`${project.theme}-index-title`}>{project.title}</strong><em>{project.theme === 'arcflow' ? 'Founder-led learning platform' : 'Gulf heavy-equipment marketplace'}</em><img className="work-index-thumb" src={project.image} alt="" loading="lazy" /></a>)}
      <AnimatePresence>{active && <motion.div className={`work-preview preview-${active.theme}`} aria-hidden="true" style={reduceMotion ? undefined : { x, y }} initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88, rotate: -3 }} animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, rotate: active.theme === 'arcflow' ? -2 : 2 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }} transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: EDITORIAL_EASE }}><img src={active.image} alt="" /><span>{active.number} / VIEW CASE STUDY</span></motion.div>}</AnimatePresence>
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
  const reduceMotion = useReducedMotion();
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
      <motion.button className="message-artifact" type="button" onClick={() => setOpen(true)} data-cursor="read" initial={reduceMotion ? false : { opacity: 0, y: 34, rotate: 5.5 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 2.8 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9, ease: EDITORIAL_EASE }} whileHover={reduceMotion ? undefined : { rotate: 1.2, y: -8 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} aria-label="Open Ian Brunton's message">
        <span className="paperclip" aria-hidden="true" /><img src="/images/ian-endorsement-dm.png" alt="LinkedIn message from Ian Brunton praising Haris's design concepts" loading="lazy" /><span className="artifact-note">CLICK TO READ</span>
      </motion.button>
      <div className="endorsement-caption"><p>“You have some really sleek design concepts.”</p><span>IAN BRUNTON<br />HEAD OF SOFTWARE ENGINEERING<br />RED BULL RACING</span></div>
      <AnimatePresence>{open && <motion.div className="image-dialog" role="dialog" aria-modal="true" aria-label="Ian Brunton message" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}><button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close message"><X /></button><motion.img src="/images/ian-endorsement-dm.png" alt="LinkedIn message from Ian Brunton" initial={reduceMotion ? false : { y: 30, rotate: 2 }} animate={reduceMotion ? undefined : { y: 0, rotate: 0 }} onClick={(event) => event.stopPropagation()} /></motion.div>}</AnimatePresence>
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
      <div className="section-tag"><span>03</span>How I think</div><Reveal className="engineering-title"><h2 id="engineering-title">Fundamentals first.<br /><em>AI in the loop.</em></h2></Reveal>
      <div className="principles">{principles.map(([number, title, copy], index) => <Reveal className="principle" key={title} delay={index * 0.08}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}</div>
    </section>
  );
}

function Capabilities() {
  const capabilities = [
    ['01', 'Product engineering', 'I take products from rough requirements to working software. Architecture, interface, data, deployment, and the decisions between them.'],
    ['02', 'Backend + systems', 'APIs, authentication, data models, service boundaries, cloud infrastructure, and systems that keep their shape under real use.'],
    ['03', 'End-to-end delivery', 'I turn ambiguous product problems into shipped, operated software. One accountable engineering loop, not disconnected handoffs.'],
  ];
  return (
    <section className="capabilities" aria-labelledby="capabilities-title">
      <div className="section-tag light"><span>04</span>What I can own</div>
      <div className="capabilities-intro"><Reveal><h2 id="capabilities-title">Bring me the part<br /><em>that crosses layers.</em></h2></Reveal><p>Most useful when product, system, and delivery decisions need to be made together.</p></div>
      <div className="capability-list">{capabilities.map(([number, title, copy], index) => <Reveal className="capability-row" key={title} delay={index * 0.06}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight aria-hidden="true" /></Reveal>)}</div>
    </section>
  );
}

function Experience() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="experience" className="experience" aria-labelledby="experience-title">
      <div className="section-tag"><span>05</span>Experience</div>
      <div className="experience-intro"><Reveal><h2 id="experience-title">Build the product.<br /><em>Own the consequences.</em></h2></Reveal><div className="experience-aside"><p>Founder-led product work, engineering partnerships, and the systems experience underneath.</p>{resume.href && <a className="resume-link" href={resume.href} target="_blank" rel="noreferrer" data-cursor="external" data-magnetic>View résumé <ArrowUpRight size={16} /></a>}</div></div>
      <div className="experience-list">{experience.map((item, index) => <motion.article className={item.current ? 'is-current' : ''} key={`${item.company}-${item.role}`} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.58, delay: index * 0.045, ease: EDITORIAL_EASE }}><span>{item.period}</span><div><h3>{item.role}</h3><p>{item.companyHref ? <ArcflowLink className="experience-arcflow" /> : item.company}</p></div><p>{item.copy}</p></motion.article>)}</div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <MediaReveal className="about-photo"><img src="/images/haris-youngpic.JPG" alt="Haris as a child, wearing a suit" loading="lazy" /><p>THE EARLY BUILD<br />BEFORE THE BUGS</p></MediaReveal>
      <div className="about-copy"><div className="section-tag"><span>06</span>About, briefly</div><Reveal><h2 id="about-title">Curious enough to take it apart.<br /><em>Stubborn enough to put it back better.</em></h2></Reveal><div className="about-columns"><p>I’m Haris, a software engineer in Lahore. I care about the entire product: how it reads, how it moves, how its data flows, and what happens when something fails.</p><p>Alongside product partnerships, I’m building <ArcflowLink />. It is the learning platform I wish had existed when I started understanding complex systems.</p></div>{credentialFlags.awsSolutionsArchitectAssociate && <div className="credential-line"><span>CREDENTIAL</span><strong>{awsCredential.title}</strong><span>{awsCredential.issuer}</span></div>}</div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact">
      <div className="contact-top"><div className="section-tag light"><span>07</span>Available for select work</div><p>Software engineer and founder. Product, system, and delivery decisions owned together.</p></div>
      <div className="contact-main">
        <ClipReveal><h2>Let’s build<br /><em>something difficult.</em></h2></ClipReveal>
        <a className="contact-email" href="mailto:harisejaz2206@gmail.com" data-cursor="write" data-magnetic onClick={() => track('contact_click', { placement: 'footer' })} aria-label="Email Haris Ejaz"><span>harisejaz2206@gmail.com</span><ArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="footer-meta"><p>HARIS EJAZ © {new Date().getFullYear()}</p><div><a href="https://github.com/harisejaz2206" target="_blank" rel="noreferrer" data-cursor="external">GitHub ↗</a><a href="https://www.linkedin.com/in/harisejaz22/" target="_blank" rel="noreferrer" data-cursor="external">LinkedIn ↗</a>{resume.href && <a href={resume.href} target="_blank" rel="noreferrer" data-cursor="external">Résumé ↗</a>}<a href="https://x.com/buildwithharis" target="_blank" rel="noreferrer" data-cursor="external">X ↗</a><a href="https://www.upwork.com/freelancers/harisejaz" target="_blank" rel="noreferrer" data-cursor="external">Upwork ↗</a></div><p>LAHORE / PK<br />UTC +5</p></div>
    </footer>
  );
}

function ScrollProgress() { const { scrollYProgress } = useScroll(); return <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />; }

function App() {
  return <div className="portfolio-shell"><InteractionLayer /><ScrollProgress /><Header /><main><Hero /><Manifesto /><Work /><Endorsement /><Engineering /><Capabilities /><Experience /><About /></main><Contact /></div>;
}

export default App;
