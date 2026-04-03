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
    title: "luca_jop",
    shortDescription:
      "Next.js thesis project comparing client-side and server-side rendering performance.",
    fullDescription:
      "A Next.js web app built as part of my Computer Engineering thesis at the University of Bologna. The project explores and benchmarks the differences between client-side rendering (CSR) and server-side rendering (SSR) in modern web applications. It served as the technical foundation for my academic research on rendering strategies.",
    period: "2023 – 2024",
    context: "Thesis project — University of Bologna",
    tags: ["Next.js", "JavaScript", "SASS", "SSR", "CSR", "Tailwind CSS"],
    techStack: [
      { category: "Framework", items: ["Next.js 14", "React"] },
      { category: "Styling", items: ["Tailwind CSS", "SASS"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
    github: "https://github.com/JJop99/luca_jop",
    pdfUrl: "https://github.com/JJop99/JJop99/raw/main/Graduation_Thesis_Jop_Jacopo.pdf",
    pdfLabel: "Download Thesis PDF",
    featured: true,
    label: "Thesis project",
    imageUrl: "https://opengraph.githubassets.com/1/JJop99/luca_jop",
    highlights: [
      "Analysed and documented differences between SSR and CSR rendering strategies",
      "Used as the technical basis for my Computer Engineering thesis",
      "Implemented with Next.js App Router and deployed on Vercel",
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
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
