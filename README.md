# Lakshman Arun P — Portfolio

Personal portfolio site for Lakshman Arun P, targeting full-stack developer and tech sales roles.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) for styling
- [Framer Motion](https://www.framer.com/motion/) for scroll animations
- [next-themes](https://github.com/pacocoursey/next-themes) for the dark/light theme toggle



## Project Structure

- `src/app/` — pages for each route (`/`, `/experience`, `/projects`, `/skills`, `/contact`) plus shared layout, SEO files (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `icon.tsx`), and the 404 page
- `src/components/` — shared UI (Navbar, Footer, theme toggle, animated section wrapper, icons)
- `src/lib/data.ts` — all site content (profile, experience, projects, skills). Edit this file to update what's shown on the site
- `public/resume/` — downloadable resume PDF

## Deployment

Live at [lakshmanarundev.vercel.app](https://lakshmanarundev.vercel.app/), deployed on Vercel. The production domain is set in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` — update those if the domain changes.

Built using **Claude Code**
