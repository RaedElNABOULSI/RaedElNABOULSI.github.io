// Single source of truth for all portfolio content.
// Mirrors Raed_Nabulsi_Resume.pdf — do not add facts that aren't in the CV.

export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  positioning: string;
  summary: string;
  heroTech: string[];
}

export const profile: Profile = {
  name: "Raed Nabulsi",
  title: "Full-Stack Developer (Backend-Focused, Laravel)",
  location: "Lebanon",
  email: "raedelnaboulsi@gmail.com",
  phone: "+961 70 514 137",
  linkedin: "https://linkedin.com/in/raedelnaboulsi",
  github: "https://github.com/RaedElNABOULSI",
  resumeUrl: "/Raed_Nabulsi_Resume.pdf",
  positioning:
    "I design and ship scalable Laravel APIs and backend systems — from database architecture to production performance.",
  summary:
    "Backend-focused Full-Stack Laravel Developer with 5+ years of experience designing scalable web applications, RESTful APIs, CMS platforms, and e-commerce integrations using Laravel, PHP, React, MySQL, Redis, and Docker. Skilled in backend architecture (MVC, OOP, SOLID), database design, performance optimization, and Laravel Filament admin panels. Leverages AI-assisted development tools to boost productivity while maintaining clean, maintainable code.",
  heroTech: ["Laravel", "PHP", "MySQL", "Redis", "React", "Docker"],
};

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend",
    items: ["Laravel", "PHP", "Node.js", "Express.js", "Python", "RESTful APIs", "Filament", "Redis", "Spatie packages"],
  },
  {
    label: "Frontend",
    items: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "Databases & Cloud",
    items: ["MySQL", "MongoDB", "AWS", "Docker", "Render", "Firebase", "Cloudflare"],
  },
  {
    label: "Integrations & Tools",
    items: ["Shopify APIs", "Git", "Postman", "Sentry", "Jira", "Claude AI", "ChatGPT"],
  },
  {
    label: "Practices",
    items: ["MVC", "OOP", "SOLID Principles", "Design Patterns", "Performance Optimization", "AI-assisted Development"],
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Creoshift",
    role: "Backend Developer",
    period: "March 2023 – Present",
    points: [
      "Built and optimized scalable Laravel REST APIs with Redis caching and performance profiling, improving response time by 25%",
      "Designed and normalized MySQL databases with proper indexing and eager loading to eliminate N+1 queries",
      "Developed backend for a CMS platform, implementing role-based access control and modular architecture following SOLID principles",
      "Integrated third-party APIs (Shopify Storefront/Admin) and mentored junior developers through code reviews",
      "Leveraged AI coding assistants (Claude, ChatGPT) to accelerate development while maintaining quality through peer review",
    ],
  },
  {
    company: "CIS College",
    role: "Web Development Instructor",
    period: "July 2025 – June 2026",
    points: [
      "Delivered structured training in HTML, CSS, JavaScript, and SQL using project-based learning",
      "Mentored students through hands-on projects and code reviews; designed curriculum aligned with industry practices",
    ],
  },
  {
    company: "Pixel38",
    role: "Full Stack Developer",
    period: "October 2020 – March 2023",
    points: [
      "Built and maintained scalable Laravel REST APIs and backend services using MVC and OOP principles",
      "Integrated Shopify Storefront/Admin APIs for product sync, order management, and e-commerce workflows",
      "Developed responsive ReactJS frontend features and reusable components integrated with backend APIs",
      "Designed and optimized database schemas and queries for high-traffic, data-driven applications",
    ],
  },
  {
    company: "Celitech",
    role: "R&D Engineer",
    period: "April 2020 – August 2020",
    points: [
      "Designed RESTful APIs using AWS Lambda (serverless) and TypeORM for scalable, event-driven backend services",
      "Implemented unit/integration testing and OpenAPI (Swagger) documentation for reliable API integrations",
    ],
  },
];

export interface EducationItem {
  program: string;
  school: string;
  period: string;
}

export const education: EducationItem[] = [
  { program: "Full Stack Development Bootcamp", school: "Codi Tech", period: "April 2019 – November 2019" },
  { program: "BE in Communications & Electronics Engineering", school: "Beirut Arab University", period: "2013 – 2018" },
];

export interface ProjectItem {
  id: string;
  name: string;
  subtitle: string;
  tech: string[];
  points: string[];
  featured?: boolean;
  link?: string;
  linkNote?: string;
}

export const projects: ProjectItem[] = [
  {
    id: "stox",
    name: "STOX",
    subtitle: "Multi-Tenant Inventory & POS Management SaaS",
    tech: ["Laravel 12", "Filament 5", "Livewire", "MySQL", "Docker"],
    featured: true,
    linkNote: "Private client system — link/screenshots to be added",
    points: [
      "Architected a multi-tenant SaaS with isolated per-tenant databases (stancl/tenancy) and separate SuperAdmin/Business panels",
      "Built core retail operations: POS, multi-location stock tracking, batch/expiry management, and stock transfers with audit trails",
      "Designed a ledger system with running balances, on-account sales, and tax-rate snapshotting for immutable transaction records",
      "Generated 7+ exportable PDF reports and a real-time KPI dashboard; containerized and deployed with Docker to a managed MySQL backend",
    ],
  },
  {
    id: "inner-peace",
    name: "Inner Peace",
    subtitle: "Bilingual Mental-Wellness Platform with AI-Guided Support",
    tech: ["React", "Vite", "Tailwind CSS v4", "Netlify Functions", "Google Gemini"],
    link: "https://innerpeace-guide.netlify.app/",
    points: [
      "Built a bilingual (English/Arabic, full RTL) AI-guided check-in flow: 15+ common situations resolve instantly from pre-written responses, while free-text input routes to a rate-limited Gemini serverless function under a safety-constrained system prompt (no diagnosis, automatic escalation on urgent language)",
      "Designed 6 interactive self-help tools — breathing exercise, mood tracker, calming audio player, and two original canvas-based tools — with WCAG-conscious accessibility and full prefers-reduced-motion support",
      "Implemented a privacy-first architecture with all check-in and mood history stored client-side only (localStorage), including local pattern detection that nudges users toward professional support on recurring concerns",
      "Hardened production security (CSP, HSTS, Permissions-Policy) verified against the live deployment, and added Open Graph/JSON-LD metadata calibrated to avoid overstating the site's clinical authority",
    ],
  },
];

export const contact = {
  heading: "Let's build something reliable.",
  blurb:
    "Open to backend and full-stack Laravel opportunities, remote-friendly. The fastest way to reach me is email.",
};
