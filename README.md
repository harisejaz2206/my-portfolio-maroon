# Haris Ejaz | Portfolio

An editorial, motion-led portfolio for software engineer Haris Ejaz.

## Stack

- React 18 + TypeScript + Vite
- Framer Motion
- Hand-authored responsive CSS

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

The experience is built as a single narrative homepage focused on Arcflow and Al Thakeel. Motion respects `prefers-reduced-motion`, and the primary layouts are designed independently for desktop, tablet, and mobile.

## Content convention

User-facing portfolio copy does not use em dashes. Rewrite with punctuation or sentence structure instead.

## Credential activation

The AWS Certified Solutions Architect – Associate treatment is prepared but intentionally hidden. After an official passing result, set `credentialFlags.awsSolutionsArchitectAssociate` to `true` in `src/App.tsx`.

The résumé link is also prepared but intentionally hidden until a public PDF is supplied. Add the file at `public/haris-ejaz-resume.pdf`, then set `resume.href` to `/haris-ejaz-resume.pdf` in `src/App.tsx`.
