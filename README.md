# Abiodun Prosper Portfolio

Personal portfolio for Abiodun Prosper, a Lagos-based full-stack developer. Built with Next.js, React, and TypeScript.

## Run locally

```bash
npm install
npm run dev
```

## Verify and build

```bash
npm run typecheck
npm run build
npm run start
```

## Update portfolio content

- Edit project descriptions, experience, skills, contact details, and social links in `src/lib/data.ts`.
- Update page layout and copy in `src/app/`.
- Store site images and icons in `public/`.
- The downloadable CV is `public/Abiodun-Prosper-CV.pdf`. Regenerate it with `python scripts/generate_portfolio_cv.py` after updating the CV content in that script.
- The intro loading animation lives in `src/components/Preloader.tsx`; it starts hidden and dismisses automatically after hydration.

Use the CV and LinkedIn as the source of truth for role titles, dates, and claims. Keep project results and client testimonials only when they can be substantiated and approved for public use.
