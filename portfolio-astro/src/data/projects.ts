export interface Project {
  icon: string;
  name: string;
  org: string;
  desc: string;
  tags: string[];
  featured?: boolean;
  featuredStyle?: 'pink' | 'green';
  badges?: { label: string; style: 'pink' | 'green' | 'gold' }[];
  mission?: string;
}

export const projects: Project[] = [
  {
    icon: '🐉',
    name: 'BITAYA Incluye',
    org: 'Gen AI & Vibe Coding · FAIR.CR · AI DAY @ CeNAT · May 2026',
    desc: "Responsible AI platform that turns a vulnerable person's plain-language description of their situation into a structured, actionable help route. A scraper collects public data from Costa Rican government institutions; an LLM curates it into a linked knowledge graph; the UI returns: which institutions to contact, missing info needed, numbered next steps, and a ready-to-send WhatsApp message — no digital literacy required.",
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Python', 'Web Scraping', 'LLM', 'Knowledge Graph', 'Responsible AI'],
    featured: true,
    featuredStyle: 'green',
    badges: [
      { label: '🏆 1st Place', style: 'gold' },
      { label: 'Hackathon', style: 'green' },
    ],
    mission: '"Guidance shouldn\'t be a privilege."',
  },
  {
    icon: '🔐',
    name: 'Next Level Cyber',
    org: 'Pernix Solutions · B2B SaaS',
    desc: 'Cybersecurity Maturity Assessment Platform aligned with NIST CSF. Multi-tenant RBAC via AWS Cognito JWTs, Vue 3 reactive UI with domain radar selectors, and webhook-driven CI/CD across Neon, Render, and Cloudflare.',
    tags: ['Python', 'FastAPI', 'Vue 3', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'GitHub Actions'],
    featured: true,
    featuredStyle: 'pink',
    badges: [{ label: 'Featured', style: 'pink' }],
  },
  {
    icon: '🌐',
    name: 'Personal Portfolio',
    org: 'Personal Project',
    desc: 'This site — built with Astro 6, CSS custom properties, and vanilla JavaScript. Features scroll-driven animations, a typewriter effect, responsive layout, active nav highlighting, and a scroll progress bar. Also ships as a self-contained HTML file for maximum portability.',
    tags: ['Astro', 'HTML5', 'CSS3', 'Vanilla JS', 'Responsive Design', 'CSS Custom Properties'],
    badges: [{ label: 'Live', style: 'green' }],
  },
  {
    icon: '📋',
    name: 'Project Management v3',
    org: 'Academic Project',
    desc: 'Upgraded React-based platform with Supabase authentication, real-time data sync, user roles, and a reporting module.',
    tags: ['React', 'JavaScript', 'Supabase', 'Netlify'],
  },
  {
    icon: '📈',
    name: 'Market Analysis Dashboard',
    org: 'Publicis Groupe Delivery',
    desc: 'Automated ETL pipelines and Power BI dashboards to support a client go-to-market strategy across multiple data sources.',
    tags: ['KNIME', 'Python', 'Power BI', 'SQL'],
  },
  {
    icon: '🎰',
    name: 'Online Casino Backend',
    org: 'Global Gaming Labs',
    desc: 'High-volume backend in .NET Framework. Relational schemas for transactions, secure data handling, and core game logic services.',
    tags: ['.NET', 'SQL Server', 'JavaScript', 'IIS'],
  },
  {
    icon: '🎬',
    name: 'Cinema Scheduling App',
    org: 'Personal · Android',
    desc: 'Android scheduling app in Java with a MySQL backend. Agile team collaboration on UI/UX improvements across sprints.',
    tags: ['Java', 'Android Studio', 'MySQL', 'XML'],
  },
];
