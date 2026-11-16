# harisejaz.com — Site Audit

Date: 2026-11-17
Scope: full single-page site, as of commit `3a02ed5`.

## 1. Project map

- **Framework**: Vite + React 18 + TypeScript. No router — single page, anchor-linked sections (`#work`, `#about`, `#experience`, `#contact`).
- **Content storage**: 100% hard-coded in JSX. No CMS, no MDX, no JSON. Everything lives in [src/App.tsx](src/App.tsx) (408 lines) — `projects[]`, `experience[]`, `awsCredential`, `resume`, `credentialFlags` are the only data arrays, all defined at the top of that file. There is no `src/data/` directory despite its presence in the file tree expectation — it doesn't exist.
- **Components**: three small presentational/motion helpers outside `App.tsx`:
  - [src/components/MotionPrimitives.tsx](src/components/MotionPrimitives.tsx) — `Reveal`, `ClipReveal`, `MediaReveal`. All three branch on `useReducedMotion()` and disable animation cleanly.
  - [src/components/ArcflowMedia.tsx](src/components/ArcflowMedia.tsx) — swaps a poster image for autoplay video on wide viewports/intersection, falls back to the poster on error or reduced motion.
  - [src/components/InteractionLayer.tsx](src/components/InteractionLayer.tsx) — the custom cursor (desktop, fine-pointer only).
- **Styles**: one file, [src/index.css](src/index.css) (428 lines), plain CSS with custom properties, no Tailwind/CSS-in-JS. Two breakpoints: `960px` and `700px`, plus a `prefers-reduced-motion` block and a `pointer:fine` block for the custom cursor.
- **Fonts**: loaded via Google Fonts `@import` — Manrope (sans, body/UI), Instrument Serif (italic serif accents), DM Mono (mono/labels), Alexandria (Al Thakeel wordmark), Paytone One (Arcflow wordmark).
- **Animation**: Framer Motion throughout (scroll-linked transforms in the hero and Al Thakeel visual, `whileInView` reveals, a spring-driven work-index preview card, a scroll-progress bar). `EDITORIAL_EASE = [0.16, 1, 0.3, 1]` ([src/lib/motion.ts](src/lib/motion.ts)) is the one eased curve used everywhere, which is why the motion feels consistent.
- **Analytics**: [src/lib/analytics.ts](src/lib/analytics.ts) is a thin `track()` wrapper over `window.va` / `gtag` / `plausible`, none of which are actually wired into `index.html` — calls are currently no-ops.
- **Images/video**: static files in `public/images` and `public/videos`, referenced by absolute path. No image optimization pipeline (no `next/image`-equivalent, no responsive `srcset`) — the Al Thakeel and hero photos ship at their source resolution.
- **Build/deploy**: `vite build` → `dist/`. No CI config, no `vercel.json`/`netlify.toml` in the repo, so hosting config lives outside the repo.

## 2. Visual/design system (as built)

- **Type scale**: display headlines use a grotesque sans (Manrope, 550–650 weight, letter-spacing −0.07em to −0.085em, line-height ~0.85) sized with `clamp()` against viewport width. Nearly every `<h2>` pairs a plain line with an `<em>` line set in italic Instrument Serif — that swap is the single most consistent signature move on the site (manifesto, work heading, endorsement, engineering, capabilities, experience, about, contact all do it).
- **Mono labels**: DM Mono, uppercase, letter-spacing ~0.1–0.15em, used for the numbered section tags (`.section-tag`, e.g. "00 · POINT OF VIEW ——"), the eyebrow above the hero h1, visual stamps, and footer meta. The trailing rule after each section tag (`.section-tag::after`) is a hairline drawn with `currentColor` at 45% opacity — this is the single most reusable "native" motif for a new label.
- **Numbered rows**: `.capability-row`, `.principle`, `.experience-list article`, `.work-index > a` all share the same shape — a leading two-digit mono number, a border-bottom hairline, generous vertical padding, and a hover state that nudges content sideways. This is the pattern to reuse for any new ledger/spec list.
- **Color blocks per section**: navy hero (`#0f6fc8` photo tint), warm off-white manifesto (`--paper #e9e7df`), near-black work/capabilities (`--ink #11110f` / `#171816`), Arcflow navy card (`#11264a`/`#0e2141`), khaki Al Thakeel (`#c9bf9f` bg / `#20251b` text), near-black endorsement (`#0b0b0a`), lime engineering section (`--acid #d8ff35`), slate-blue about (`#b9c4cb`), near-black contact/footer. Every project section owns a distinct palette rather than sharing one card style.
- **Lime scroll-progress bar**: fixed 3px top bar, `scaleX` driven directly by `useScroll()`, `transform-origin: left` — cheap and framerate-safe.
- **Hairline rules**: `rgba(17,17,15,.22)` on light sections, `rgba(255,255,255,.18–.32)` on dark sections — used for section borders, list dividers, and the `.section-tag::after` tick. Consistent 1px weight throughout, never a box-shadow pretending to be a rule.
- **Photography & brand marks**: one treated portrait in the hero (blue-tinted, gradient-masked), one documentary-style industrial photo for Al Thakeel (desaturated, Ken-Burns on scroll), one architecture-diagram PNG for Arcflow, one childhood photo for About, one screenshotted DM for the Red Bull anecdote. The Haris mark/wordmark SVGs appear only in the header. The Al Thakeel circular mark and Arabic wordmark (`الثقيل`, `lang="ar" dir="rtl"`) appear once, in that project's identity block — this is the only place the site demonstrates the bilingual/RTL claim visually.
- **Motion**: page-load stagger on the hero, scroll-linked parallax on hero photo + Al Thakeel photo, `whileInView` reveals (once-only) everywhere else, a spring-driven floating preview thumbnail in the work index, a rotating orbit decoration in the Arcflow visual. All of it is gated through `useReducedMotion()` or the global reduced-motion media query — no untested escape hatch.

**Implication for new work**: anything new should reuse `.section-tag`, the numbered-row pattern, `clamp()`-sized display type with the serif-`<em>` swap, and `Reveal`/`ClipReveal`/`MediaReveal` rather than inventing new components. A new diagram should be built as inline SVG in the site's own palette/type (see Phase 2 plan) rather than another PNG, so it can sit on `--paper` or `--ink` and theme correctly in light/dark review.

## 3. Copy inventory (section by section)

Legend: **E**vidence (real work/number) · **P**ositioning (says what I do) · **A**tmosphere (mood, no information).

| Section | Copy | Type |
|---|---|---|
| Header | "Software Engineer / Lahore, PK" | P |
| Header | "Available for select work" | P |
| Hero | "PRODUCT ENGINEERING · SYSTEMS · INFRASTRUCTURE" (eyebrow) | P |
| Hero | "Software engineer. Builds the whole thing." | P/A — title says role, "builds the whole thing" is a claim with no backing yet |
| Hero | "I build products from interface to infrastructure." | P |
| Manifesto (00) | "Good software is more than code that works." | A |
| Manifesto | "It should make the hard parts feel deliberate: the model, the failure path, the interface, the tradeoff." | A |
| Manifesto | "I like the seams where product decisions become system decisions. AI speeds up the work. It does not make the call." | A |
| Manifesto | "Three years in production systems. Building with founder stakes now." | E (a number) but **wrong number** — see §6 below |
| Work heading (01) | "One founded. One engineered." | P — good, concrete contrast between the two case studies |
| Work heading | "Independent product ownership meets substantial marketplace engineering." | P, vague ("substantial") |
| Arcflow case study | "A place to understand the systems behind the software." | A |
| Arcflow | "I founded arcflow to make serious engineering concepts easier to understand. It is a structured learning platform for system design, distributed systems, backend architecture, AWS, scalability, reliability, and AI engineering from first principles." | E/P — solid, names real subject matter |
| Arcflow | SCOPE: "Concept, product direction, learning architecture, information architecture, UX, application architecture, content tooling, and production implementation." | P, no numbers, no stack named |
| Arcflow | "BUILT ACROSS: Product · Interface · Content platform · Interactive systems · Deployment" | P, no stack, no users, no AWS mention |
| Al Thakeel case study | "Heavy equipment. A lighter way to find it." | A |
| Al Thakeel | "I architected and implemented a bilingual heavy-equipment marketplace for Kuwait and the wider Gulf, spanning product flows, accounts, data, and production delivery." | P — no mention of sole-engineer, no timeline, no users, no stack |
| Al Thakeel | SCOPE: "Web · API · Data · Infrastructure · Delivery" | P, generic |
| Al Thakeel | MARKET: "Kuwait · Gulf · Arabic / English · RTL" | E (true) but thin |
| Al Thakeel | No live link, no metrics, no architecture, no engineering decisions anywhere in this section | **Gap** — this is supposed to be the flagship and currently carries the least evidence of any section |
| Endorsement (02) | Red Bull Racing anecdote + quote | E — keep as-is per brief |
| Engineering (03) "How I think" | "Understand the system" / "Use AI as leverage" / "Ship the complete loop" + 3 supporting lines | A, but coherent and on-brand — low priority to touch |
| Capabilities (04) "Bring me the part that crosses layers" | "Product engineering" / "Backend + systems" / "End-to-end delivery" rows | **A** — exactly the vague section flagged in the brief. No proof point, no named technology, interchangeable with any mid-level engineer's self-description |
| Experience (05) | "Build the product. Own the consequences." | P |
| Experience | "Founded and building the product end to end, from learning architecture and systems content to application engineering and production delivery." (Arcflow row) | P, no stack/users |
| Experience | "Partnering on product development and engineering delivery." (Aswad Labs row) | **A** — says nothing; this is the row the brief calls out by name |
| Experience | Septem Systems / Innovent Tech / Renesis Tech one-liners | P — reasonably specific, but see reconciliation items in §6 |
| About (06) | "Curious enough to take it apart. Stubborn enough to put it back better." | A |
| About | "I'm Haris, a software engineer in Lahore. I care about the entire product: how it reads, how it moves, how its data flows, and what happens when something fails." | A/P mix |
| About | AWS credential line | **Present in code but never rendered** — gated behind `credentialFlags.awsSolutionsArchitectAssociate = false` (App.tsx:54-57). The site currently shows the AWS credential nowhere, despite it being central to the new positioning. |
| Contact (07) | "Software engineer and founder. Product, system, and delivery decisions owned together." | P |
| Contact | "Let's build something difficult." | A |
| Contact | Email + GitHub/LinkedIn/X/Upwork links | E (real links) |
| Contact | "LAHORE / PK · UTC +5" | E |

**Headline finding**: the site has exactly one section built entirely from atmosphere with zero evidence ("Bring me the part that crosses layers"), one case study that should be the flagship but is the thinnest ("Al Thakeel" — no metrics, no stack, no link), one factual claim that's already stale ("Three years in production systems"), and one credential that's coded but switched off.

## 4. SEO & sharing

- `<title>`: "Haris Ejaz | Software Engineer" — no credential, no differentiator.
- Meta description: "Haris Ejaz is a software engineer building complete products and systems, from interface to infrastructure." — reasonable but generic, no AWS mention.
- Open Graph: `og:title` "Haris Ejaz | Software Engineer", `og:description` "Products, systems, and AI-native engineering.", `og:type website`, `og:image` set to the hero photo. **Missing**: `og:url`, `og:site_name`.
- **Missing entirely**: Twitter card tags (`twitter:card`, `twitter:title`, etc.), canonical `<link rel="canonical">`, `robots.txt`, `sitemap.xml`, and any JSON-LD (`Person` or otherwise). A crawler or share-card renderer gets the OG tags and nothing structured.
- No `lang="ar"` issues beyond the one inline Arabic word, which is correctly marked `lang="ar" dir="rtl"`.

## 5. Accessibility & quality

- **Heading order**: correct top-to-bottom (`h1` in hero, `h2` per section, `h3` for sub-items) — no skipped levels found.
- **Alt text**: present and reasonable on all content images (hero portrait, Al Thakeel photo, Red Bull DM screenshot, childhood photo). Decorative images (`ArcflowMedia` poster, Al Thakeel visual background image) correctly use `alt=""` inside `aria-hidden="true"` wrappers.
- **Link names**: external links (`arcflow ↗`, GitHub/LinkedIn/X/Upwork) have visible, descriptive text. The mobile "Open menu" / "Close menu" buttons have `aria-label`.
- **Focus states**: global `:focus-visible { outline: 2px solid var(--acid) }` — works everywhere except inside the lime ("Engineering") section, where an acid outline on an acid background would be invisible. Not currently a real bug only because that section has no focusable elements, but worth remembering if one is added.
- **Contrast**:
  - Lime section (`--acid` bg, `--ink` text): very high contrast, no issue.
  - Khaki Al Thakeel section (`#c9bf9f` bg, `#20251b` text): passes comfortably for body-size text; the mono "project-meta" labels at `.58rem`/`opacity .55` on khaki are borderline for WCAG AA at that size — worth nudging opacity up when that section's content is rewritten.
  - Hero white text sits on a photo with only a partial left-to-right gradient; the sub-line ("I build products...") at `~21%` white on a light patch of sky would fail contrast in isolation, but in practice the gradient (`rgba(5,18,26,.7)` → transparent) keeps text within its darker zone. Worth re-checking once hero copy changes shift line lengths.
- **Reduced motion**: handled consistently — global CSS override plus every Framer Motion usage branches on `useReducedMotion()`. This is above-average diligence and should be preserved in any new component.
- **Console/network**: no console errors or warnings on load (desktop or mobile emulation); no broken requests observed.
- **Credential flag**: `credentialFlags.awsSolutionsArchitectAssociate` hardcoded `false` with a comment ("Set to true only after the official exam result is received") — this is the one piece of dead-but-wired content on the site today, and it directly blocks the new positioning until flipped.
- **Resume link**: `resume.href = null` — the "View résumé" link and footer "Résumé ↗" link are both coded but unrendered until a PDF path is supplied.

## 6. Facts that disagree with the brief (reconciliation needed — see plan doc, §open questions)

1. Innovent Tech Solutions: site says "Associate Software Engineer, Mar 2024 – Jan 2025"; résumé says "Software Engineer, Mar 2024 – Feb 2025."
2. Developers Core (Adboost-AI, Oct 2023 – Mar 2024) is on the résumé, missing from the site entirely.
3. Renesis Tech ("Software Engineering Intern, Jul–Sep 2023") is on the site, not on the résumé.
4. Arcflow title: site says "Engineering Founder"; résumé says "Founder & Software Engineer."
5. Aswad Labs: site says "Product Development Partner"; brief says this should become "Product Engineer" everywhere, with new dates (Jun 2026 – Present).
6. "Three years in production systems" (Manifesto aside) — first production role (Innovent, Mar 2024) to now (Nov 2026) is ~2 years 8 months, not three. Needs new wording regardless of which reconciliation answers land.

These are tracked as open questions in [docs/site-update-plan.md](docs/site-update-plan.md); nothing in this audit resolves them.
