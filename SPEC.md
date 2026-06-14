# Portfolio Website Spec — Lakshman Arun

## Goal
A multi-page personal portfolio site targeting full-stack developer roles at tech startups. Showcases work experience, skills, projects, and a "why hire me" pitch, with a way to contact / get the resume.

## Tech Stack
- **Framework**: Next.js (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (subtle scroll/entry animations)
- **Theme**: Dark/light mode toggle, default = dark, modern, minimal aesthetic (clean typography, generous whitespace, single accent color)
- **Deployment target**: Vercel (TBD — confirm later)

## Site Structure (Multi-page)

| Route | Purpose |
|---|---|
| `/` | Home — Hero/About intro + condensed highlights, links to other pages |
| `/experience` | Work Experience timeline |
| `/projects` | Project showcase (curated for MVP; GitHub live-fetch later) |
| `/skills` | Skills, characteristics, "Why hire me for a startup" pitch |
| `/contact` | Contact info, links (LinkedIn, GitHub, email), resume download |

Shared: persistent nav bar (with dark/light toggle) + footer across all pages.

## Contact Info
- Email: arunlakshman28@gmail.com
- Phone: +91-9360898874
- LinkedIn: https://www.linkedin.com/in/lakshmanarunp/
- GitHub: https://github.com/Arun28856
- Location: Chennai, India

## Bio / Tagline
- **Tagline**: "Full-Stack Developer | Building with the MERN Stack & Next.js"
- **Short bio**: IT professional with a strong computer science foundation and hands-on experience across technical and client-facing roles. Skilled in the MERN stack, Next.js, and modern dev tooling, with a problem-solving mindset honed through real-world troubleshooting and systems work. Currently transitioning into developer/QA roles, looking to bring adaptability and ownership to a startup team.

## Page Details

### `/` Home
- Hero: name, tagline, short bio (above), CTA buttons (View Projects, Contact Me, Download Resume)
- Highlights strip: B.E. CSE grad, MERN Stack + Next.js/Nest.js, current role at Tech Mahindra

### `/experience`
Reverse-chronological timeline:

1. **Associate – Technical Support | Tech Mahindra | Sep 2025 – Present | Chennai, India**
   - Working as a Technical Support Associate for Openreach's Offshore Delivery Centre
   - Planning and designing FTTP networks for new sites to enable high-speed internet connectivity

2. **Associate – Sales Operations | Appglide | Jun 2023 – Feb 2024 | Chennai, India**
   - Generated 2–3 SQLs per month via LinkedIn outreach
   - Led full prospecting-to-follow-up cycle
   - Monitored pipeline activities and prepared reports

3. **Intern – Sales Operations | Appglide | Dec 2022 – May 2023**
   - Maintained lead trackers in Google Sheets
   - Handled end-to-end lead generation workflow from prospecting to status tracking
   - Generated 20% results from the pipeline

**Education**: B.E. – CSE | Sri Ramakrishna Engineering College, Coimbatore (2019 – 2023)

### `/projects`
No live GitHub repos yet, so for the MVP use a manually curated list sourced from the resume (below). Each card: name, description, tech tags, dates. Add a "More on GitHub" link to the profile. Live GitHub API fetching can be layered in later once repos are public.

1. **NFT-Based Multiplayer Card Game** (Jan 2023 – Apr 2023)
   - Developed a multiplayer card game where NFTs were used in place of points. Integrated trading functionality with NFT marketplaces.
   - Tags: Game Dev, Blockchain/NFT, Multiplayer

2. **Parkinson's Disease Detection System** (Mar 2021 – Mar 2022)
   - Machine Learning system for early detection of Parkinson's disease using CNN and Dlib to analyze spiral images.
   - Tags: Machine Learning, CNN, Python, Dlib

3. **Collision Alert System** (Jan 2020 – Jan 2021)
   - IoT-based V2V communication device using ultrasonic sensors to calculate distance and alert vehicles to prevent collisions.
   - Tags: IoT, Embedded Systems, Sensors

### `/skills`
**Technical Skills**
- Programming Languages: JavaScript, TypeScript, React.js, React Native, HTML, CSS, Node.js, Express.js
- Frameworks: MERN Stack, Next.js, Nest.js
- IDE & Tools: VSCode, Cursor, Claude Code, Git & GitHub, VMware, REST APIs
- Testing Tools: Cypress, Postman
- DB & Cloud: AWS, SQL, MongoDB, PostgreSQL, Neon DB
- Auth: OAuth, JWT, Firebase, Stack Auth

**Soft Skills**: Team building, adaptability, problem-solving

**Why Hire Me (Startup Pitch)**
- Hands-on with the full MERN + Next.js/Nest.js stack, plus modern AI-assisted dev tooling (Cursor, Claude Code) — ships fast
- Proven adaptability: pivoted from sales operations into client-facing technical support into software development, learning new domains quickly
- Strong problem-solving and troubleshooting background from real systems/network work, not just tutorials
- Comfortable wearing multiple hats — sales, support, ops, and dev — a fit for early-stage team environments

### `/contact`
- Email, phone, LinkedIn, GitHub links
- Resume download (PDF) — place resume file in `/public/resume/`
- MVP: static links + mailto, no contact form

## Design
- Accent color: **teal/cyan** (`#2DD4BF`-ish) on dark slate background — modern, techy, works for dark & light themes
- Dark mode default, light mode toggle available
- Subtle Framer Motion fade/slide-in animations on scroll

## MVP Scope
Build a working multi-page site with all 5 routes, real content above, theme toggle, and basic animations. GitHub live-fetch for projects deferred until repos exist — ship with curated project list now.

## Next Steps
Scaffold Next.js + TypeScript + Tailwind project, build shared layout (nav/footer/theme toggle), then build out each page using the content above. Resume PDF and profile photo to be added by Lakshman into `/public`.
