/**
 * Site content that appears in shared chrome (menu, frame).
 * Stage 1 holds the template's own values so the port can be diffed
 * against the original; the content pass replaces them.
 */

export const site = {
  logo: "A.",
};

export const menuGroups = [
  {
    label: "Homepage",
    items: [
      { label: "Landing page", href: "/" },
      { label: "Personal", href: "/home-2" },
      { label: "Portfolio slider", href: "/portfolio-3" },
    ],
  },
  {
    label: "Portfolio",
    items: [
      { label: "Grid type 1", href: "/portfolio-1" },
      { label: "Grid type 2", href: "/portfolio-2" },
      { label: "Slider", href: "/portfolio-3" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Services List", href: "/services" },
      { label: "Single service", href: "/service" },
    ],
  },
  {
    label: "Newsletter",
    items: [
      { label: "Blog List", href: "/blog" },
      { label: "Publication", href: "/publication" },
    ],
  },
  {
    label: "Other pages",
    items: [
      { label: "Team", href: "/team" },
      { label: "Contact", href: "/contact" },
      { label: "404", href: "/404" },
    ],
  },
];

export const menuLists = {
  projects: {
    title: "Projects",
    items: [
      { label: "Interior design studio", href: "/project-1" },
      { label: "Home Security Camera", href: "/project-2" },
      { label: "Kemia Honest Skincare", href: "/project-3" },
      { label: "Cascade of Lava", href: "/project-4" },
      { label: "Air Pro by Molekule", href: "/project-5" },
      { label: "Tony's Chocolonely", href: "/project-6" },
    ],
  },
  useful: {
    title: "Useful links",
    items: [
      { label: "Privacy Policy", href: "#." },
      { label: "Terms and conditions", href: "#." },
      { label: "Cookie Policy", href: "#." },
      { label: "Careers", href: "#." },
    ] as { label: string; href: string; external?: boolean }[],
  },
};

export const menuOffices = [
  {
    title: "Canada",
    text: "71 South Los Carneros Road, California",
    contact: "+51 174 705 812",
  },
  {
    title: "Germany",
    text: "Leehove 40, 2678 MC De Lier, Netherlands",
    contact: "+31 174 705 811",
  },
];
