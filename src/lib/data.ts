export const profile = {
  name: "Lakshman Arun P",
  tagline: "Full-Stack Developer & Tech Sales Professional | MERN, Next.js & AI-Assisted Development",
  bio: "IT professional with hands-on full-stack development skills across the MERN stack, Next.js, and Nest.js, paired with real sales operations experience generating pipeline for tech companies. I build and ship faster by working alongside AI tools like Claude Code and Cursor, and I'm just as comfortable in the codebase as I am on a client call. Open to full-stack developer and tech sales / solutions roles where that build-and-sell combination adds the most value for a startup.",
  location: "Chennai, India",
  email: "arunlakshman28@gmail.com",
  phone: "+91-9360898874",
  linkedin: "https://www.linkedin.com/in/lakshmanarunp/",
  github: "https://github.com/Arun28856",
  resumeUrl: "/resume/Lakshman-Arun-P-Resume.pdf",
};

export const highlights = [
  { label: "Education", value: "B.E. Computer Science" },
  { label: "Core Stack", value: "MERN + Next.js / Nest.js" },
  { label: "Currently", value: "Associate, Tech Mahindra" },
];

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Associate - Technical Support",
    company: "Tech Mahindra",
    period: "Sep 2025 - Present",
    location: "Chennai, India",
    bullets: [
      "Working as a Technical Support Associate for Openreach's Offshore Delivery Centre.",
      "Planning and designing FTTP networks for new sites to enable high-speed internet connectivity.",
    ],
  },
  {
    role: "Associate - Sales Operations",
    company: "Appglide",
    period: "Jun 2023 - Feb 2024",
    location: "Chennai, India",
    bullets: [
      "Generated 2-3 SQLs per month via LinkedIn outreach.",
      "Led the full prospecting-to-follow-up cycle.",
      "Monitored pipeline activities and prepared reports.",
    ],
  },
  {
    role: "Intern - Sales Operations",
    company: "Appglide",
    period: "Dec 2022 - May 2023",
    location: "Chennai, India",
    bullets: [
      "Maintained lead trackers in Google Sheets.",
      "Handled end-to-end lead generation workflow from prospecting to status tracking.",
      "Generated 20% results from the pipeline.",
    ],
  },
];

export const education = {
  degree: "B.E. - Computer Science & Engineering",
  school: "Sri Ramakrishna Engineering College, Coimbatore",
  period: "2019 - 2023",
};

export type Project = {
  name: string;
  period?: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    name: "Ecommerce Platform",
    description:
      "A full-stack ecommerce application with separate buyer and seller experiences - buyers can browse and purchase products, while sellers manage their own product catalog, orders, and earnings.",
    tags: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "TypeScript",
      "Razorpay",
      "Firebase Auth",
    ],
    liveUrl: "https://ecommerce-frontend-dp4t.onrender.com/",
    githubUrl: "https://github.com/Arun28856/ecommerce",
  },
];

export const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "React Native",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
  ],
  frameworks: ["MERN Stack", "Next.js", "Nest.js"],
  tools: ["VS Code", "Cursor", "Claude Code", "Git & GitHub", "VMware", "REST APIs"],
  testing: ["Cypress", "Postman"],
  databases: ["AWS", "SQL", "MongoDB", "PostgreSQL", "Neon DB"],
  auth: ["OAuth", "JWT", "Firebase", "Stack Auth"],
  soft: ["Team building", "Adaptability", "Problem-solving"],
};

export const whyHireMe = [
  {
    title: "Ships fast with a modern stack",
    description:
      "Hands-on with the full MERN stack plus Next.js and Nest.js, and fluent with AI-assisted dev tooling like Cursor and Claude Code.",
  },
  {
    title: "Proven adaptability",
    description:
      "Pivoted from sales operations into client-facing technical support and now into software development - picking up new domains quickly along the way.",
  },
  {
    title: "Real-world problem solving",
    description:
      "Strong troubleshooting background from hands-on systems and network work, not just tutorials or coursework.",
  },
  {
    title: "Comfortable wearing many hats",
    description:
      "Experience across sales, support, operations, and development - a natural fit for the pace and breadth of an early-stage startup team.",
  },
];
