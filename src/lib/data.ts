/**
 * Site content in one place — edit here rather than in the page markup.
 * Source of truth for roles, dates and claims: the Master CV and LinkedIn.
 */

export const site = {
  name: "Abiodun Prosper",
  logo: "Abi.",
  role: "Full-Stack Developer",
  email: "Abiodunprosper07@gmail.com",
  phone: "+234 703 915 7861",
  location: "Lagos, Nigeria",
  availability: "Open to remote roles and selected product engagements",
  cv: "/Abiodun-Prosper-CV.pdf",
  github: "https://github.com/AbiProspa",
  linkedin: "https://www.linkedin.com/in/abiodun-prosper-aa1428261/",
};

export const socials = [
  { label: "LinkedIn", href: site.linkedin, icon: "fab fa-linkedin-in" },
  { label: "GitHub", href: site.github, icon: "fab fa-github" },
  { label: "X", href: "https://x.com/Abi_Prospa", icon: "fab fa-twitter" },
  { label: "Instagram", href: "https://www.instagram.com/abi_prosper/", icon: "fab fa-instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@abiprosper", icon: "fab fa-tiktok" },
];

/* ------------------------------ main menu ------------------------------ */

export const menuGroups = [
  {
    label: "Home",
    items: [
      { label: "Home", href: "/" },
      { label: "About me", href: "/home-2" },
      { label: "Project highlights", href: "/portfolio-3" },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { label: "Selected work", href: "/portfolio-1" },
      { label: "All projects", href: "/portfolio-2" },
      { label: "Highlights slider", href: "/portfolio-3" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "What I do", href: "/services" },
      { label: "Full-stack development", href: "/service" },
    ],
  },
  {
    label: "Experience",
    items: [
      { label: "Work history", href: "/team" },
      { label: "Skills and tools", href: "/team#skills" },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "Get in touch", href: "/contact" },
      { label: "Download CV", href: site.cv },
    ],
  },
];

export const menuLists = {
  projects: {
    title: "Projects",
    items: [
      { label: "Entrant — Newcomer Platform", href: "/project-2" },
      { label: "Yummeals — Mobile & Web", href: "/project-1" },
      { label: "AltBank — Custom Cards", href: "/project-7" },
      { label: "AltDrive — Vehicle Finance", href: "/project-8" },
      { label: "Nizom — Agency Operations", href: "/project-6" },
      { label: "Omnigrowth — AI Growth Engine", href: "/project-9" },
    ],
  },
  useful: {
    title: "Elsewhere",
    items: [
      { label: "GitHub", href: site.github, external: true },
      { label: "LinkedIn", href: site.linkedin, external: true },
      { label: "Download CV", href: site.cv, external: true },
      { label: "Email me", href: `mailto:${site.email}`, external: true },
    ] as { label: string; href: string; external?: boolean }[],
  },
};

export const menuOffices = [
  {
    title: "Based in",
    text: "Lagos, Nigeria — working remotely with teams worldwide.",
    contact: site.phone,
  },
  {
    title: "Availability",
    text: "Open to remote engineering roles and selected product work.",
    contact: site.email,
  },
];

/* ------------------------------- projects ------------------------------- */

export type Project = {
  route: string;
  title: string;
  /** the title split for the template's thin-weight second half */
  titleMain: string;
  titleThin: string;
  category: string;
  cover: string;
  gallery: string[];
  link?: string;
  client: string;
  role: string;
  stack?: string[];
  status?: string;
  intro: string;
  paragraphs: string[];
};

export const projects: Project[] = [
  {
    route: "/project-1",
    title: "Yummeals — Mobile and Web Platform",
    titleMain: "Yummeals",
    titleThin: "Mobile and Web Platform",
    category: "Full-Stack · Mobile · Web",
    cover: "/img/works/1.jpg",
    gallery: ["/img/works/1/1.jpg", "/img/works/1/2.jpg", "/img/works/1/3.jpg", "/img/works/1/4.jpg", "/img/works/1/5.jpg", "/img/works/1/6.jpg", "/img/works/1/7.jpg"],
    link: "https://yummealsapp.com/",
    client: "Yummeals",
    role: "End-to-end product design and development",
    stack: ["React Native", "Laravel", "MySQL"],
    intro: "A food platform built across mobile and web, with customer feedback as one part of the product.",
    paragraphs: [
      "I built the Yummeals mobile app and web platform with React Native and Laravel, taking the product well beyond a standalone feedback form.",
      "I also replaced a basic Google Form with a guided, multi-step NPS and marketing-intent flow with real-time validation, designed to make feedback easier to complete.",
    ],
  },
  {
    route: "/project-2",
    title: "Entrant — Newcomer Platform",
    titleMain: "Entrant",
    titleThin: "Newcomer Platform",
    category: "Full-Stack · Mobile · Web · Admin",
    cover: "/img/works/2.jpg",
    gallery: ["/img/works/2/1.jpg", "/img/works/2/2.jpg", "/img/works/2/3.jpg", "/img/works/2/4.jpg"],
    link: "https://www.myentrant.com/",
    client: "Devnnova",
    role: "Full-stack development across mobile, web and admin",
    stack: ["React Native", "Next.js", "NestJS", "PostgreSQL"],
    intro: "A newcomer platform built across a mobile app, a web experience and an admin system.",
    paragraphs: [
      "I built the Entrant system across its React Native mobile app, Next.js web platform and CMS admin portal, with backend services on NestJS and PostgreSQL behind a shared API gateway.",
      "The admin portal lets the team manage the country-specific content delivered to app users, so mobile, web, administration and shared API services all operate as one product.",
    ],
  },
  {
    route: "/project-3",
    title: "Devnnova — Agency Website",
    titleMain: "Devnnova",
    titleThin: "Agency Website",
    category: "Website",
    cover: "/img/works/3.jpg",
    gallery: ["/img/works/3/1.jpg", "/img/works/3/2.jpg", "/img/works/3/3.jpg", "/img/works/3/4.jpg"],
    link: "https://devnnova.com/",
    client: "Devnnova",
    role: "Website design and development",
    stack: ["Next.js", "Tailwind CSS"],
    intro: "A modern agency website built to turn visitors into clients.",
    paragraphs: [
      "Devnnova's site had one job: make a software company look as sharp as the products it ships.",
      "Built with Next.js and Tailwind CSS, it is fast, responsive and structured around clear calls to action.",
    ],
  },
  {
    route: "/project-4",
    title: "MaxDrive — Mobility Platform",
    titleMain: "MaxDrive",
    titleThin: "Mobility Platform",
    category: "Website",
    cover: "/img/works/4.jpg",
    gallery: ["/img/works/4/1.jpg", "/img/works/4/2.jpg", "/img/works/4/3.jpg", "/img/works/4/4.jpg", "/img/works/4/5.jpg", "/img/works/4/6.jpg", "/img/works/4/7.jpg"],
    link: "https://maxdriveme.com/",
    client: "MaxDrive",
    role: "Website design and development",
    intro: "A marketing and booking website for a mobility service, shipped end to end.",
    paragraphs: [
      "MaxDrive needed a clean, trustworthy web presence for its mobility service.",
      "I designed and shipped the full site — copy structure, visuals and build — from first wireframe to launch.",
    ],
  },
  {
    route: "/project-5",
    title: "Esther Olatunji Foundation — NGO Website",
    titleMain: "Esther Olatunji Foundation",
    titleThin: "NGO Website",
    category: "Website · Automation",
    cover: "/img/works/5.jpg",
    gallery: ["/img/works/5/1.jpg", "/img/works/5/2.jpg", "/img/works/5/3.jpg", "/img/works/5/4.jpg", "/img/works/5/5.jpg", "/img/works/5/6.jpg"],
    link: "https://ngo-foundation-self.vercel.app/",
    client: "Esther Olatunji Foundation",
    role: "Website and workflow development",
    status: "Preview",
    intro: "An NGO website with donation and volunteer workflows automated end to end.",
    paragraphs: [
      "For the Esther Olatunji Foundation the website is a workhorse: donations, volunteer sign-ups and follow-up communication all run through automated workflows.",
      "That lets a small team operate like a much larger one, without adding manual admin for every enquiry.",
    ],
  },
  {
    route: "/project-6",
    title: "Nizom — Agency Operations Platform",
    titleMain: "Nizom",
    titleThin: "Agency Operations Platform",
    category: "SaaS · Web App",
    cover: "/img/works/6.jpg",
    gallery: ["/img/works/6/1.jpg", "/img/works/6/2.jpg", "/img/works/6/3.jpg", "/img/works/6/4.jpg", "/img/works/6/5.jpg", "/img/works/6/6.jpg", "/img/works/6/7.jpg", "/img/works/6/8.jpg"],
    client: "Nizom",
    role: "Product development",
    stack: ["Next.js", "TypeScript", "Laravel"],
    status: "In development",
    intro: "A modular business-operations platform for agencies — from lead to cash to client approval.",
    paragraphs: [
      "Nizom connects CRM and sales, client onboarding, a service catalog, project delivery, time tracking, invoicing and a client portal into one system, so agency work flows from first contact to paid invoice without leaving the tool.",
      "I'm building the product end to end: a Next.js and TypeScript frontend on a custom design system, with a Laravel API, automated tests and screenshot tooling built into the workflow.",
    ],
  },
  {
    route: "/project-7",
    title: "AltBank — Custom Cards Experience",
    titleMain: "AltBank",
    titleThin: "Custom Cards Experience",
    category: "Fintech · Website",
    cover: "/img/works/7.jpg",
    gallery: ["/img/works/7/1.jpg", "/img/works/7/2.jpg", "/img/works/7/3.jpg"],
    client: "The Alternative Bank",
    role: "Full-stack product development",
    stack: ["Next.js", "Laravel"],
    intro: "A premium card-ordering experience for The Alternative Bank's custom cards.",
    paragraphs: [
      "A dark, accent-led landing and request flow where customers explore AltBank's card line-up and order a custom card in minutes.",
      "A Next.js frontend backed by a Laravel API, built so the ordering journey stays short and legible on any device.",
    ],
  },
  {
    route: "/project-8",
    title: "AltDrive — Vehicle Finance Platform",
    titleMain: "AltDrive",
    titleThin: "Vehicle Finance Platform",
    category: "Fintech · Full-Stack",
    cover: "/img/works/8.jpg",
    gallery: ["/img/works/8/1.jpg", "/img/works/8/2.jpg"],
    client: "AltDrive",
    role: "Full-stack product development",
    stack: ["React", "TypeScript", "Laravel", "Filament"],
    intro: "A vehicle browsing and financing platform, from storefront to back office.",
    paragraphs: [
      "AltDrive lets customers browse vehicles and apply for financing through a fast, type-safe React and TypeScript frontend, with Laravel powering the API.",
      "Administrative operations — inventory, users, applications — run on a Filament admin panel, so the business manages the whole pipeline without touching code.",
    ],
  },
  {
    route: "/project-9",
    title: "Omnigrowth — AI Growth Engine",
    titleMain: "Omnigrowth",
    titleThin: "AI Growth Engine",
    category: "Website · AI",
    cover: "/img/works/9.jpg",
    gallery: ["/img/works/9/1.jpg", "/img/works/9/2.jpg"],
    client: "Omnigrowth (hattl)",
    role: "Landing page development",
    stack: ["Next.js"],
    intro: "A waitlist landing page for an autonomous AI growth platform.",
    paragraphs: [
      "Omnigrowth is an AI platform that plans, executes and optimises growth strategy autonomously.",
      "The waitlist landing sells that story with a bold gradient identity and the product dashboard front and centre, built with Next.js.",
    ],
  },
];

/* ------------------------------- services ------------------------------- */

export const services = [
  {
    href: "/service",
    titleMain: "Full-Stack Product",
    titleRest: "Development",
    short: "Product-minded web applications, built from the interface through to API integration and release.",
    points: ["React and Next.js interfaces", "Node.js, NestJS and Laravel APIs", "Admin and CMS tooling", "Delivery through to release"],
  },
  {
    href: "/service",
    titleMain: "Mobile App",
    titleRest: "Development",
    short: "Cross-platform mobile apps built with React Native and wired to production APIs.",
    points: ["React Native applications", "Authentication and API flows", "Mobile-first interfaces", "Release support"],
  },
  {
    href: "/service",
    titleMain: "Backend APIs",
    titleRest: "and Integrations",
    short: "Secure APIs plus payment, authentication and AI integrations that connect real product workflows.",
    points: ["REST API design", "Paystack and Flutterwave", "JWT and OAuth 2.0", "AI and workflow automation"],
  },
  {
    href: "/service",
    titleMain: "Product UI/UX",
    titleRest: "and Prototyping",
    short: "Clear product flows and interfaces, informed by user needs and built with developers in mind.",
    points: ["Figma flows and prototypes", "Dashboard and admin UX", "Mobile-first interface design", "Design-to-code handover"],
  },
];

/* ------------------------------ experience ------------------------------ */

export const resume = [
  {
    years: "2025 — Present",
    role: "Web and Mobile Developer",
    company: "Ecobank Nigeria",
    summary:
      "Develop a mobile-first internal banking operations application with React Native and Next.js, integrated with Node.js and Express services. Workflow and UI refinements, with Redux state management, improved transaction completion speed by 30%.",
  },
  {
    years: "Aug 2023 — Sep 2025",
    role: "Full-Stack Developer",
    company: "Devnnova",
    summary:
      "Built the AltBank and Entrant products across React Native, Next.js and NestJS behind a shared API gateway, including the Entrant CMS admin portal for country-specific content. Integrated OpenAI and Claude APIs into customer-support and WhatsApp automation workflows using n8n.",
  },
  {
    years: "Jan 2022 — Aug 2023",
    role: "Full-Stack Developer",
    company: "TechVerse",
    summary:
      "Delivered fintech and eCommerce interfaces with React and Vue backed by Laravel and Node.js services, translating Figma designs into production components and integrating payment, referral and checkout workflows.",
  },
  {
    years: "2020 — 2022",
    role: "UI/UX Designer",
    company: "Hephzibah Edutech",
    summary:
      "Designed a Figma CRM dashboard for student enrollment and management, using user research and interface improvements to reduce administrative workload by 40%, then worked with developers on the React and Tailwind CSS build.",
  },
];

export const education = [
  { years: "2020 — 2022", title: "OND, Electrical and Electronic Engineering", place: "Moshood Abiola Polytechnic" },
  { years: "Jun 2023", title: "Microsoft Professional Program, Front-End Web Development", place: "Microsoft" },
  { years: "2023", title: "Frontend Development Certification", place: "DevTown" },
  { years: "2024", title: "Backend Development Certification", place: "DevTown" },
  { years: "2025", title: "Microsoft Learn Student Ambassadors", place: "Microsoft" },
];

export const skills = [
  { category: "Frontend", items: ["TypeScript", "React", "Next.js", "React Native", "Vue.js", "Redux", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "Laravel", "REST APIs"] },
  { category: "Data and integrations", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Paystack", "Flutterwave", "JWT", "OAuth 2.0"] },
  { category: "AI and delivery", items: ["OpenAI API", "Claude API", "n8n", "Git/GitHub", "Docker", "CI/CD", "Figma"] },
];

/* clients whose logos appear in the marquee */
export const clients = [
  { name: "Devnnova", logo: "/img/partners/devnnova.svg", width: "120px" },
  { name: "Entrant", logo: "/img/partners/entrant.svg", width: "110px" },
  { name: "MaxDrive", logo: "/img/partners/maxdrive.svg", width: "120px" },
  { name: "Yummeals", logo: "/img/partners/yummeals.svg", width: "110px" },
];
