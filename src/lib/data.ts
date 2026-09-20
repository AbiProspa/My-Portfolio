/**
 * All site content in one place — edit here, not in the page markup.
 */

export const site = {
  name: "Abiodun Prosper",
  logo: "ABI.",
  email: "Abiodunprosper07@gmail.com",
  phone: "+234 703 915 7861",
  location: "Lagos, Nigeria",
  tagline: "Open to remote roles and selected product engagements",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abiodun-prosper-aa1428261/", icon: "fab fa-linkedin-in" },
    { label: "GitHub", href: "https://github.com/AbiProspa", icon: "fab fa-github" },
    { label: "X", href: "https://x.com/Abi_Prospa", icon: "fab fa-twitter" },
    { label: "Instagram", href: "https://www.instagram.com/abi_prosper/", icon: "fab fa-instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/@abiprosper", icon: "fab fa-tiktok" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  cover: string; // card / grid image
  hero: string; // detail page hero image
  gallery: string[];
  link?: string;
  year?: string;
  client: string;
  role?: string;
  stack?: string[];
  status?: string;
  intro: string;
  paragraphs: string[];
};

export const projects: Project[] = [
  {
    slug: "yummeals",
    title: "Yummeals — Mobile & Web Platform",
    category: "Full-Stack · Mobile · Web",
    cover: "/img/works/1.jpg",
    hero: "/img/works/1.jpg",
    gallery: ["/img/works/1/1.jpg", "/img/works/1/2.jpg", "/img/works/1/3.jpg", "/img/works/1/4.jpg"],
    link: "https://yummealsapp.com/",
    client: "Yummeals",
    role: "End-to-end product design and development",
    stack: ["React Native", "Laravel"],
    intro: "A food platform built across mobile and web, with customer feedback as one part of the product.",
    paragraphs: [
      "I built the Yummeals mobile app and web platform using React Native and Laravel, taking the product beyond a standalone feedback form.",
      "I also replaced a basic Google Form with a guided, multi-step NPS and marketing-intent flow with real-time validation. The flow was designed to make feedback easier to complete; no completion-rate figure is claimed here.",
    ],
  },
  {
    slug: "entrant",
    title: "Entrant — Newcomer Platform",
    category: "Full-Stack · Mobile · Web · Admin",
    cover: "/img/works/2.jpg",
    hero: "/img/works/2.jpg",
    gallery: ["/img/works/2/1.jpg", "/img/works/2/2.jpg", "/img/works/2/3.jpg", "/img/works/2/4.jpg"],
    link: "https://www.myentrant.com/",
    client: "Devnnova",
    role: "Full-stack product development across mobile, web, and admin",
    stack: ["React Native", "Next.js", "NestJS", "PostgreSQL"],
    intro: "A newcomer platform built across a mobile app, web experience, and admin system.",
    paragraphs: [
      "I built the Entrant system across its React Native mobile app, Next.js web platform, and admin portal, with backend services built around NestJS and PostgreSQL.",
      "The admin system lets the team manage country-specific content delivered to app users. The product brings mobile, web, administration, and shared API services together as one system.",
    ],
  },
  {
    slug: "devnnova",
    title: "Devnnova — Agency Website",
    category: "Website",
    cover: "/img/works/3.jpg",
    hero: "/img/works/3.jpg",
    gallery: ["/img/works/3/1.jpg", "/img/works/3/2.jpg", "/img/works/3/3.jpg"],
    link: "https://devnnova.com/",
    client: "Devnnova",
    role: "Website design and development",
    stack: ["Next.js", "Tailwind CSS"],
    intro: "A modern agency website built to convert visitors into clients.",
    paragraphs: [
      "Devnnova's site had one job: make a software company look as sharp as the products it ships. Built with Next.js and Tailwind CSS, it is fast, responsive and structured around clear calls to action.",
    ],
  },
  {
    slug: "maxdrive",
    title: "MaxDrive — Mobility Platform",
    category: "Website",
    cover: "/img/works/4.jpg",
    hero: "/img/works/4.jpg",
    gallery: ["/img/works/4/1.jpg", "/img/works/4/2.jpg", "/img/works/4/3.jpg"],
    link: "https://maxdriveme.com/",
    client: "MaxDrive",
    role: "Website design and development",
    intro: "Marketing and booking website for a mobility service, shipped end to end.",
    paragraphs: [
      "MaxDrive needed a clean, trustworthy web presence for its mobility service. I designed and shipped the full site — copy structure, visuals and build — end to end.",
    ],
  },
  {
    slug: "esther-olatunji-foundation",
    title: "Esther Olatunji Foundation — NGO Website",
    category: "Website · Automation",
    cover: "/img/works/5.jpg",
    hero: "/img/works/5.jpg",
    gallery: ["/img/works/5/1.jpg", "/img/works/5/2.jpg", "/img/works/5/3.jpg"],
    link: "https://ngo-foundation-self.vercel.app/",
    client: "Esther Olatunji Foundation",
    role: "Website and workflow development",
    status: "Preview",
    intro: "An NGO website with donation and volunteer workflows automated end to end.",
    paragraphs: [
      "For the Esther Olatunji Foundation, the website is a workhorse: donations, volunteer sign-ups and follow-up communication all run through automated workflows, so a small team can operate like a big one.",
    ],
  },
  {
    slug: "nizom",
    title: "Nizom — Agency Operations Platform",
    category: "SaaS · Web App",
    cover: "/img/works/6.jpg",
    hero: "/img/works/6.jpg",
    gallery: ["/img/works/6/1.jpg", "/img/works/6/2.jpg", "/img/works/6/3.jpg", "/img/works/6/4.jpg"],
    client: "Nizom",
    role: "Product development",
    stack: ["Next.js", "TypeScript", "Laravel"],
    status: "In development",
    intro: "A modular business-operations platform for agencies — from lead to cash to client approval.",
    paragraphs: [
      "Nizom connects CRM and sales, client onboarding, a service catalog, project delivery, time tracking, invoicing and a client portal into one system, so agency work flows from first contact to paid invoice without leaving the tool.",
      "I'm building the product end to end: a Next.js + TypeScript frontend on a custom design system, and a Laravel API — with automated tests and screenshot tooling baked into the workflow.",
    ],
  },
  {
    slug: "altbank-cards",
    title: "AltBank — Custom Cards Experience",
    category: "Fintech · Website",
    cover: "/img/works/7.jpg",
    hero: "/img/works/7.jpg",
    gallery: ["/img/works/7/1.jpg", "/img/works/7/2.jpg", "/img/works/7/3.jpg"],
    client: "The Alternative Bank",
    role: "Full-stack product development",
    stack: ["Next.js", "Laravel"],
    intro: "A premium card-ordering experience for The Alternative Bank's custom cards.",
    paragraphs: [
      "A dark, gold-accented landing and request flow where customers explore AltBank's card line-up and order a custom card in minutes — a Next.js frontend backed by a Laravel API.",
    ],
  },
  {
    slug: "altdrive",
    title: "AltDrive — Vehicle Finance Platform",
    category: "Fintech · Full-Stack",
    cover: "/img/works/8.jpg",
    hero: "/img/works/8.jpg",
    gallery: ["/img/works/8/1.jpg", "/img/works/8/2.jpg"],
    client: "AltDrive",
    role: "Full-stack product development",
    stack: ["React", "TypeScript", "Laravel", "Filament"],
    intro: "A vehicle browsing and financing application platform, from storefront to back office.",
    paragraphs: [
      "AltDrive lets customers browse vehicles and apply for financing through a fast, type-safe React 19 + TypeScript frontend, with Laravel 11 powering the API.",
      "Administrative operations — inventory, users, applications — run on a Filament admin panel, so the business manages the whole pipeline without touching code.",
    ],
  },
  {
    slug: "omnigrowth",
    title: "Omnigrowth — AI Growth Engine",
    category: "Website · AI",
    cover: "/img/works/9.jpg",
    hero: "/img/works/9.jpg",
    gallery: ["/img/works/9/1.jpg", "/img/works/9/2.jpg"],
    client: "Omnigrowth (hattl)",
    role: "Landing page development",
    stack: ["Next.js"],
    intro: "Waitlist landing for an autonomous AI growth platform.",
    paragraphs: [
      "Omnigrowth (hattl) is an AI platform that plans, executes and optimizes growth strategy autonomously. The waitlist landing sells that story with a bold gradient identity and the product dashboard front and center — built with Next.js.",
    ],
  },
];

export const services = [
  {
    slug: "full-stack",
    title: "Full-Stack Product Development",
    short: "Product-minded web applications built from interface through API integration and release.",
    points: ["React and Next.js interfaces", "Node.js and Laravel APIs", "Admin and CMS tools", "Product delivery"],
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    short: "Cross-platform mobile applications built with React Native and connected to production APIs.",
    points: ["React Native applications", "API and authentication flows", "Mobile-first interfaces", "Release support"],
  },
  {
    slug: "backend-integrations",
    title: "Backend APIs and Integrations",
    short: "Secure APIs and payment, authentication, and AI integrations that connect product workflows.",
    points: ["Node.js, NestJS, and Laravel", "REST API design", "Payment integrations", "AI and workflow automation"],
  },
  {
    slug: "product-design",
    title: "Product UI/UX and Prototyping",
    short: "Clear product flows and interfaces informed by user needs and implemented with developers in mind.",
    points: ["Figma flows and prototypes", "Dashboard and admin UX", "Mobile-first interface design", "Design-to-code collaboration"],
  },
];

export const resume = [
  {
    years: "2025 — Present",
    role: "Web and Mobile Developer",
    company: "Ecobank Nigeria",
    summary: "Developed a mobile-first internal banking operations application with React Native, Next.js, Redux, Node.js, and Express; workflow and UI refinements improved transaction completion speed by 30%.",
  },
  {
    years: "Jan 2023 — Aug 2025",
    role: "Full-Stack Developer",
    company: "Devnnova",
    summary: "Built Entrant across mobile, web, and admin; delivered CMS workflows and integrated AI customer-support and WhatsApp automation workflows.",
  },
  {
    years: "Jan 2022 — Aug 2023",
    role: "Full-Stack Developer",
    company: "TechVerse",
    summary: "Delivered fintech and eCommerce interfaces with React and Vue, backed by Laravel and Node.js services; integrated payment and checkout workflows.",
  },
  {
    years: "2020 — 2022",
    role: "UI/UX Designer",
    company: "Hephzibah Edutech",
    summary: "Designed a CRM dashboard for student enrollment and management, and collaborated with developers on React and Tailwind implementation.",
  },
];

export const skills = [
  { category: "Frontend", items: ["TypeScript", "React", "Next.js", "React Native", "Vue.js", "Redux", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Express.js", "Laravel", "REST APIs"] },
  { category: "Data and integrations", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Paystack", "Flutterwave", "JWT", "OAuth 2.0"] },
  { category: "AI and delivery", items: ["OpenAI API", "Claude API", "n8n", "Git/GitHub", "Docker", "CI/CD", "Figma"] },
];
