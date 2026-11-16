# harisejaz.com — Update Plan

Companion to [docs/site-audit.md](docs/site-audit.md). Nothing in this plan has been implemented yet — it's waiting on the open questions in §5.

## 1. Hero & positioning — pick one

All three keep the existing structure (plain line → italic-serif line → sub-line → eyebrow) and the existing `ClipReveal`/stagger animation. Only the words change.

**Option A — closest to your draft (recommended)**
- Eyebrow: `PRODUCT ENGINEERING · AWS · END TO END`
- H1: *Product engineer.* / **Builds the whole thing.** *(serif italic, unchanged)*
- Sub-line: "From interface to infrastructure. AWS Certified Solutions Architect."

**Option B — leads harder with the AWS angle**
- Eyebrow: `PRODUCT ENGINEER · AWS CERTIFIED SOLUTIONS ARCHITECT`
- H1: *Product engineer.* / **Ships it on AWS.**
- Sub-line: "Interface, API, data model, infrastructure — one engineer, one accountable loop."

**Option C — most concrete, least poetic**
- Eyebrow: `PRODUCT ENGINEERING · SYSTEMS · AWS`
- H1: *Product engineer.* / **A to Z, alone.**
- Sub-line: "I build the product and run it on AWS — nobody hands off to anybody."

Recommendation: **Option A**. It's the smallest, lowest-risk edit to a hero that already works, it keeps "Builds the whole thing" (your favorite line, still true), and it puts the AWS credential exactly where a recruiter's eye lands second — the sub-line, in full — rather than compressing it into the eyebrow where it would compete with "AWS · END TO END" for space on mobile.

**Header role text** (top-right of `.site-header`, currently "Software Engineer / Lahore, PK") becomes:
```
Product Engineer
AWS Certified SA · Lahore, PK
```
(UAE residency/relocation moves to the Contact section where there's room to say it properly, rather than cramming a third line into the header.)

## 2. Section-by-section plan

| # | Section | Action | Notes |
|---|---|---|---|
| — | Header/Hero | **Rewrite** | Per §1. No layout change. |
| 00 | Point of View | **Keep**, fix one line | "Three years in production systems" → needs new wording (see §5, Q6) regardless of which reconciliation answers land — it's currently just wrong by the calendar. |
| 01 | Work — Arcflow | **Expand** | Keep the case-study shell; add a compact `TechPanel` (role, timeline, stack, architecture notes, "200+ monthly users") above or beside the existing visual. Title pending §5 Q4. |
| 01 | Work — Al Thakeel | **Rewrite as flagship** | See §3 below — this gets the most new content of anything on the site. |
| 02 | Endorsement (Red Bull) | **Keep as-is** | Per brief, don't touch claims or copy. |
| 03 | How I think | **Keep** | On-brand, not vague in the way Capabilities is — low priority. |
| 04 | What I can own (Capabilities) | **Replace** | New copy below, same component/markup shape (`capability-row`), no new CSS needed beyond what already exists. |
| 05 | Experience | **Rewrite rows** | Titles/dates/copy per facts; pending §5 reconciliation. Add a `Certification` line. |
| 06 | About | **Light edit** | Flip `credentialFlags.awsSolutionsArchitectAssociate` to `true` (pending §5 Q7) and add a verification-link placeholder. Copy otherwise untouched. |
| 07 | Contact/Footer | **Light rewrite** | State explicitly: available for product engineering, backend, AWS work; open to relocation and remote. Add résumé link once a PDF path is provided. |
| — | Metadata | **Rewrite** | Title, description, OG, Twitter card, canonical, `robots.txt`, `sitemap.xml`, `Person` JSON-LD. |

### Capabilities — replacement copy

```
01  PRODUCT & INTERFACE
    Next.js and React, bilingual Arabic/English RTL interfaces, SEO-rendered
    listing pages, multi-step flows with direct-to-S3 uploads.
    → Built solo for Al Thakeel's listing editor and RTL web client.

02  BACKEND & DATA
    NestJS modular monolith, PostgreSQL + TypeORM, domain modeling,
    transactional integrity, authentication and access control.
    → 22 modules, 170 REST endpoints, 54 entities — double-booking made
       impossible at the database level, not just checked for.

03  AWS & DELIVERY
    EC2, S3, SQS, AppSync Events, IAM, Docker, CI/CD, production operations.
    → ~250 production deploy runs. Migrations run before restart, every
       release verified against the exact commit that's live.
```
Headline can stay "Bring me the part that crosses layers" (it's playful, not false) or tighten to "Own the part that crosses layers." — your call, low stakes either way.

## 3. Al Thakeel — flagship case study

**Problem statement** (new, short): Heavy equipment in Kuwait and the Gulf was traded through calls, WhatsApp and word of mouth — no listings, no accounts, no structured rentals. Al Thakeel gives sellers, renters and job-seekers a bilingual marketplace built for the region.

**What I built, and how fast**: Sole engineer for web, backend and AWS infrastructure (the mobile app is built separately against this API). First commit to production in 4 months. Live at thakeelalarabia.com with 500+ users.

**Engineering decisions** (problem → decision → result, styled as ruled rows like `.principle`):
1. **Rental double-booking** — row locks + a PostgreSQL GiST exclusion constraint make it impossible at the database level, not just checked for in application code.
2. **Immutable moderation** — versioned submission/moderation across six domains; public pages render only the approved version, so sellers can keep editing drafts without touching what's live.
3. **Real-time delivery, one source of truth** — messages, notifications and delivery intent commit in one Postgres transaction (transactional outbox); a `FOR UPDATE SKIP LOCKED` relay feeds SQS; a worker publishes hints over IAM/SigV4 to per-user AppSync Events channels. REST stays authoritative; delivery is at-least-once — designed and implemented, no realtime traffic numbers claimed.
4. **Private media at scale** — presigned POST uploads go straight to S3, verified server-side with `HeadObject`, served back through short-lived signed URLs. No file transits the API server.
5. **Deployment integrity on a single EC2 box** — GitHub Actions (lint + 365 tests) → image build → exact-commit deploy: migrations before restart, a running-image identity check, then HTTPS health checks.

**Stack/spec list** (ruled mono rows): Next.js (web) · NestJS modular monolith · PostgreSQL + TypeORM · Clerk (auth) · AWS EC2/S3/SQS/AppSync Events · Docker · GitHub Actions.

**Key figures row**: `500+ USERS · 4 MONTHS · 365 TESTS · 170 ENDPOINTS · ~250 DEPLOY RUNS`

**Architecture diagram** (new inline SVG, not a PNG — see §4): client → Nginx/TLS on EC2 → NestJS → PostgreSQL; S3 branch; outbox → SQS → worker → AppSync Events branch. Drawn in the same visual grammar as the existing Arcflow "protected web edge" diagram (mono uppercase labels, serif sub-headline, boxed nodes, a request-path/replication/policy legend, a "failure story" row, a dark takeaway bar) but in the site's own `--paper`/`--ink` palette so it sits natively in this section rather than looking like an imported teaching graphic.

**Link**: thakeelalarabia.com (already present as `project.href`, currently unset for Al Thakeel — needs adding).

## 4. New/changed components

| Component | Status | Design-system fit |
|---|---|---|
| `Capabilities()` data | content-only change | No new markup/CSS. |
| `TechPanel` | **new** | Ruled mono rows (role/timeline/stack/notes), same shape as `.project-meta` / `.principle` — reuses `--mono`, hairline borders, existing spacing scale. Used by both Arcflow and Al Thakeel. |
| `KeyFigures` | **new** | A single row of mono stat/label pairs, bordered top and bottom like `.engineering .principles` — not a dashboard widget, just type and rules. Al Thakeel only. |
| `ArchitectureDiagram` (Al Thakeel) | **new** | Inline SVG, not a raster image — sized/typed with the site's own `--mono`/`--serif` tokens so it never needs a light/dark asset swap. Visual grammar borrowed from `arcflow-architecture.png` (see audit §2) but redrawn, not reused as-is, since that PNG is Arcflow's own teaching content. |
| `Certification` | **new, tiny** | Reuses the markup already written for `.credential-line` in `About()` — extracted so Experience can show the same line without duplicating CSS. |
| Everything else | **unchanged** | `Reveal`, `ClipReveal`, `MediaReveal`, `ArcflowMedia`, `InteractionLayer` all stay as-is. |

No new dependencies. No icon sets, skill bars, or badge grids, per the brief — the AWS credential is typography plus (once provided) a verification link, nothing else.

## 5. Open questions — need your answers before implementation starts

**Reconciliation (site vs. résumé):**
1. Innovent Tech Solutions — site says "Associate Software Engineer, Mar 2024 – Jan 2025"; résumé says "Software Engineer, Mar 2024 – Feb 2025." Which is correct?
2. Developers Core — résumé has "Software Engineer Intern, Oct 2023 – Mar 2024 (Adboost-AI)," missing from the site. Add it? If so, where relative to Renesis Tech?
3. Renesis Tech — on the site, not on the résumé. Keep it, drop it, or is the résumé just out of date?
4. Arcflow title — site says "Engineering Founder"; résumé says "Founder & Software Engineer." Which should it be, everywhere?
5. "Three years in production systems" — by the calendar it's closer to 2.5–2.75 years (first production role Mar 2024). New wording, or do you count time differently (e.g. including pre-2024 work not listed in the facts)?

**New-content confirmations:**
6. **AWS credential status** — `credentialFlags.awsSolutionsArchitectAssociate` is currently hardcoded `false` with the comment *"Set to true only after the official exam result is received."* The brief's facts list the credential as settled. Is the exam result actually in hand? I won't flip this to `true` or publish the credential anywhere (hero, header, About, Experience, metadata, JSON-LD) without your explicit confirmation — this is the one claim on the site that's a factual certification, not a judgment call.
7. Verification link for the AWS credential — you mentioned you'd provide one. What is it?
8. Résumé PDF — do you have one to add at `public/haris-ejaz-resume.pdf` (the `resume.href` field already exists in code, just unset)?
9. CloudWatch alarms — confirm whether these exist in your infrastructure today. I will not mention them otherwise.
10. Al Thakeel live link — confirmed as `thakeelalarabia.com`? (Taking this from your brief; the code currently has no `href` for this project at all.)
11. Capabilities headline — keep "Bring me the part that crosses layers" or switch to a more literal variant like "Own the part that crosses layers"?

I'll hold all implementation — including the low-risk items like metadata and the Capabilities rewrite — until you've replied, since several answers (credential status, Arcflow title) touch content that appears in more than one place on the site.
