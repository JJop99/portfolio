export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  period: string;
  context: string;
  tags: string[];
  techStack: {
    category: string;
    items: string[];
  }[];
  github?: string;
  demo?: string;
  pdfUrl?: string;
  pdfLabel?: string;
  featured: boolean;
  label?: string;
  imageUrl: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "pagespeed-dashboard",
    title: "PageSpeed Dashboard",
    shortDescription:
      "React SPA for website performance analysis via Google PageSpeed Insights API, built during a 3-month internship.",
    fullDescription:
      "A single-page application developed during a 3-month internship at Mumble S.R.L. in 2022. The platform lets users create performance tests for any website and visualise the results using Core Web Vitals metrics from the Google PageSpeed Insights API. It includes a full authentication system, test history, and interactive charts.",
    period: "2022",
    context: "Internship — Mumble S.R.L.",
    tags: ["React.js", "Laravel", "Docker", "AWS EC2", "Terraform", "Chart.js"],
    techStack: [
      { category: "Frontend", items: ["React.js", "Material UI", "Tailwind CSS", "SASS/BEM", "Axios", "Chart.js"] },
      { category: "Backend", items: ["Laravel (PHP)", "MySQL", "REST API"] },
      { category: "DevOps", items: ["Docker", "Terraform", "AWS EC2"] },
    ],
    github: "https://github.com/JJop99/pagespeed-dashboard",
    pdfUrl: "https://github.com/JJop99/JJop99/raw/main/Internship%20Report.pdf",
    pdfLabel: "Internship Report",
    featured: true,
    label: "Internship project",
    imageUrl: "https://opengraph.githubassets.com/1/JJop99/pagespeed-dashboard",
    highlights: [
      "Integrated Google PageSpeed Insights API to retrieve Core Web Vitals (FCP, LCP, CLS)",
      "Built a secure authentication system with Laravel",
      "Deployed on AWS EC2 with Docker containers and Terraform for infrastructure",
      "Implemented performance history charts with Chart.js",
      "First real-world full-stack project in a professional environment",
    ],
  },
  {
    slug: "luca-jop",
    title: "Analysis of Client/Server Rendering in Web Apps",
    shortDescription:
      "Bachelor's thesis at Unibo comparing Next.js (SSR) and React.js (CSR) performance, SEO, and resource efficiency on a real web application.",
    fullDescription:
      "Bachelor's thesis titled \"Analysis of Client/Server Rendering Technologies in Web Applications\", submitted to the Department of Computer Science and Engineering at the University of Bologna (A.A. 2023/2024), supervised by Prof. Paolo Bellavista. The study benchmarks Next.js and React.js on loading speed, SEO, and resource efficiency, demonstrating that Next.js offers faster load times and better search engine ranking, while React.js remains preferable for high-interactivity Single-Page Applications. The practical component — a real web application (luca_jop) — was built in Next.js to conduct the performance tests.",
    period: "2023 – 2024",
    context: "Bachelor's Thesis — University of Bologna",
    tags: ["Next.js", "React.js", "SSR", "CSR", "Performance", "SEO"],
    techStack: [
      { category: "Frameworks tested", items: ["Next.js 14 (SSR/SSG)", "React.js (CSR)"] },
      { category: "Styling", items: ["Tailwind CSS", "SASS"] },
      { category: "Deployment", items: ["Vercel"] },
      { category: "Analysis", items: ["Google PageSpeed Insights", "Core Web Vitals", "Lighthouse"] },
    ],
    github: "https://github.com/JJop99/luca_jop",
    pdfUrl: "https://github.com/JJop99/JJop99/raw/main/Graduation_Thesis_Jop_Jacopo.pdf",
    pdfLabel: "Download Thesis PDF",
    featured: true,
    label: "Bachelor's thesis",
    imageUrl: "https://opengraph.githubassets.com/1/JJop99/luca_jop",
    highlights: [
      "Compared CSR (React.js) and SSR (Next.js) on a real web application",
      "Demonstrated Next.js superiority in loading speed, SEO, and network efficiency",
      "Concluded that React.js remains optimal for high-interactivity SPAs",
      "Supervised by Prof. Paolo Bellavista, University of Bologna",
      "95 commits of iterative research-driven development",
    ],
  },
  {
    slug: "apartment-expenses",
    title: "Apartment Expenses",
    shortDescription:
      "Full-stack TypeScript app for tracking and splitting shared apartment expenses.",
    fullDescription:
      "A personal project to solve a real problem: tracking and splitting shared expenses in a shared apartment. Built with Next.js and TypeScript, it allows multiple housemates to log expenses and see who owes what. The app is live on Vercel.",
    period: "2024",
    context: "Personal project",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    techStack: [
      { category: "Framework", items: ["Next.js", "React"] },
      { category: "Language", items: ["TypeScript"] },
      { category: "Styling", items: ["Tailwind CSS"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
    github: "https://github.com/JJop99/apartment-expenses",
    demo: "https://apartment-expenses-delta.vercel.app",
    featured: false,
    imageUrl: "https://opengraph.githubassets.com/1/JJop99/apartment-expenses",
    highlights: [
      "Built with TypeScript for full type safety",
      "Solves a real day-to-day problem in shared living",
      "Live demo deployed on Vercel",
    ],
  },
  {
    slug: "lucajop-react",
    title: "lucajop-react",
    shortDescription:
      "React rebuild of a personal website — a migration to a fully component-driven architecture.",
    fullDescription:
      "A React.js rebuild of an existing personal website (lucajop.it), migrating it from a static HTML/CSS structure to a modern component-driven architecture. The goal was to improve maintainability and learn React patterns by applying them to a familiar codebase.",
    period: "2022",
    context: "Personal project",
    tags: ["React.js", "JavaScript"],
    techStack: [
      { category: "Framework", items: ["React.js"] },
      { category: "Language", items: ["JavaScript"] },
    ],
    github: "https://github.com/JJop99/lucajop-react",
    featured: false,
    imageUrl: "https://opengraph.githubassets.com/1/JJop99/lucajop-react",
    highlights: [
      "Migrated a static website to a component-driven React architecture",
      "Focused on learning React patterns and component reusability",
    ],
  },
  {
    slug: "carphaul",
    title: "CarpHaul",
    shortDescription:
      "Web app for smart carpooling — automatically organises rides to shared events using route optimisation and Google Maps.",
    fullDescription:
      "CarpHaul is a web application designed to solve the logistics of group travel to shared events. An organiser creates an event and shares a unique invite code with participants. Each participant registers their travel preferences — whether they need a ride or have a car to offer, their pickup address, and available seats. The app then automatically groups passengers with the nearest drivers, calculates the optimal route via Google Maps, and provides each driver with a step-by-step itinerary and each passenger with an estimated pickup time. Built as a university group project (team of 3) with a full software engineering process: requirements analysis, use case modelling, risk analysis, UML architecture, E-R database design, and deployment planning.",
    period: "2022 – 2023",
    context: "University group project — University of Bologna",
    tags: ["Web App", "Google Maps API", "REST API", "Database", "UML", "Software Engineering"],
    techStack: [
      { category: "Architecture", items: ["MVC", "REST API", "Distributed system"] },
      { category: "External APIs", items: ["Google Maps (routing & geocoding)"] },
      { category: "Database", items: ["Relational DB (E-R design)", "Persistent storage"] },
      { category: "Engineering", items: ["UML diagrams", "Use case analysis", "Risk analysis", "Test plan"] },
    ],
    pdfUrl: "https://github.com/JJop99/JJop99/raw/main/CarpHaul_project.pdf",
    pdfLabel: "Download Project Document",
    featured: true,
    label: "University project",
    imageUrl: "https://opengraph.githubassets.com/1/JJop99/JJop99",
    highlights: [
      "Designed an algorithm to group passengers with the nearest available drivers",
      "Integrated Google Maps API for route calculation and pickup time estimation",
      "Full software engineering lifecycle: requirements, UML, risk analysis, test plan, deployment design",
      "Team project (Giacomo Cerino, Jacopo Jop, Luca Levita) with 87-page project document",
      "Addresses a real sustainability problem: reducing unnecessary car journeys to shared events",
    ],
  },
  {
    slug: "atena-srl-website",
    title: "Atena S.r.l. — Corporate Website",
    shortDescription:
      "Full corporate website for a construction & restoration company, with a headless CMS, GDPR compliance, animations, and automated testing.",
    fullDescription:
      "A production-grade corporate website built for Atena S.r.l., a company specialising in construction, restoration, and energy efficiency. The site is fully managed via Sanity CMS — the client can update all content, SEO metadata, images, projects, and articles without touching code. Features include Framer Motion animations, a GDPR-compliant cookie banner with conditional analytics, a contact form with email delivery, automated sitemaps, JSON-LD schema for local business SEO, and a full test suite (Vitest unit tests + Playwright E2E). Deployed on Vercel with automatic redeploy on CMS content changes via webhook.",
    period: "2025",
    context: "Freelance project — Atena S.r.l.",
    tags: ["Next.js 15", "Sanity CMS", "TypeScript", "Framer Motion", "Tailwind CSS", "Vercel"],
    techStack: [
      { category: "Frontend", items: ["Next.js 15 (App Router)", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { category: "CMS", items: ["Sanity.io", "GROQ queries", "Webhook revalidation"] },
      { category: "Testing", items: ["Vitest (unit)", "Playwright (E2E)"] },
      { category: "Infrastructure", items: ["Vercel", "Vercel Analytics", "Sanity CDN"] },
      { category: "Other", items: ["GDPR cookie consent", "JSON-LD schema", "Dynamic sitemap", "Contact form API"] },
    ],
    demo: "https://atenabuildings.com",
    featured: true,
    label: "Freelance project",
    imageUrl: "https://atenabuildings.com/opengraph-image",
    highlights: [
      "Fully CMS-driven: client manages all content, SEO, images, and legal pages from Sanity Studio",
      "GDPR-compliant cookie banner with conditional Vercel Analytics activation",
      "Framer Motion animations throughout with lazy loading for performance",
      "Full test suite: Vitest for unit tests, Playwright for end-to-end tests",
      "Automatic content revalidation via Sanity webhook — no redeploy needed on content changes",
      "JSON-LD LocalBusiness schema and dynamic sitemap for SEO",
    ],
  },
  {
    slug: "when-landing",
    title: "When — App Landing Page",
    shortDescription:
      "Landing page for When, an iOS and Android event organiser app, commissioned by the software house that developed the app.",
    fullDescription:
      "A promotional landing page built for When, a mobile app for organising events and meetups, available on both the App Store and Google Play. Commissioned by the software house behind the app, the page features a custom Lottie logo animation, full-screen video sections, App Store and Google Play download badges, a team page, and an embedded Google Maps contact section. Built with HTML, SCSS, and jQuery — my first professional web project.",
    period: "2018",
    context: "Freelance — commissioned by software house",
    tags: ["HTML", "CSS/SCSS", "jQuery", "Lottie", "Bootstrap"],
    techStack: [
      { category: "Frontend", items: ["HTML5", "SCSS", "jQuery", "Bootstrap"] },
      { category: "Animations", items: ["Lottie / bodymovin", "CSS animations"] },
      { category: "Other", items: ["Google Maps embed", "App Store & Play Store integration"] },
    ],
    github: "https://github.com/JJop99/sito_When",
    featured: false,
    label: "Freelance",
    imageUrl: "https://opengraph.githubassets.com/1/JJop99/sito_When",
    highlights: [
      "First professional web project, commissioned by an external client",
      "Custom Lottie logo animation with bodymovin",
      "Full-screen video sections with autoplay on mobile via VisSense",
      "Download section with App Store and Google Play badges",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
