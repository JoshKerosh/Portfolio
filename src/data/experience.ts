export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  current?: boolean;
  bullets: string[];
  stack?: { label: string; variant?: 'green' | 'orange' | 'default' }[];
}

export const experience: ExperienceItem[] = [
  {
    period: 'January 2026 – Present',
    role: 'Software Developer',
    company: 'Pernix Solutions',
    location: '📍 San José, Costa Rica · Remote',
    current: true,
    bullets: [
      'Engineered 30+ REST API endpoints in Python/FastAPI — covering interview management, maturity scoring, risk catalog, and business process lifecycle — with multi-org access control, audit logging, and 70%+ test coverage via Pytest.',
      'Designed multi-tenant RBAC from scratch using AWS Cognito JWTs and a custom TenantScope middleware, enabling complete data isolation between organizations with no shared-state leakage.',
      'Owned the Vue 3 frontend end-to-end: built domain radar selectors, process catalogs, and assessment comparison flows (TypeScript, Pinia, Tailwind CSS, DaisyUI) from design to deployment.',
      'Architected a single-push CI/CD pipeline (GitHub Actions → Neon → Render → Cloudflare) deploying backend, frontend, and DB migrations atomically — reducing deployment friction to one command.',
      'Drove AI-assisted development using Claude Code and GPT Codex for test generation, PR drafting, and sprint coverage auditing — maintaining high code quality while compressing feature delivery time.',
      'Built custom Claude Code skill agents automating story creation, backend scaffolding, test generation, and coverage audits — eliminating hours of repetitive dev overhead per sprint.',
    ],
    stack: [
      { label: 'Python', variant: 'green' },
      { label: 'FastAPI', variant: 'green' },
      { label: 'Vue 3', variant: 'green' },
      { label: 'TypeScript', variant: 'green' },
      { label: 'AWS', variant: 'green' },
      { label: 'Docker', variant: 'green' },
      { label: 'GitHub Actions', variant: 'green' },
    ],
  },
  {
    period: '2023 – 2025',
    role: 'Remote Fleet Engineer',
    company: 'T&TA — HP Inc. (Contractor)',
    location: '📍 Remote · Concurrent with B.Sc. studies at TEC',
    bullets: [
      'Remote technical support for enterprise printing fleets across multiple client organizations — uptime, performance, and security compliance.',
      'Managed configuration and maintenance scheduling via HP\'s centralized Follow-Me print management server.',
      'Coordinated with global teams to implement print management policies across diverse network environments.',
    ],
  },
  {
    period: 'November 2021 – January 2023',
    role: 'Backend Developer',
    company: 'Global Gaming Labs',
    location: '📍 Costa Rica',
    bullets: [
      'Built and maintained high-volume backend services in .NET Framework, handling core game logic, transaction processing, and secure data persistence via SQL Server.',
      'Designed relational schemas for player transactions and game state, ensuring data integrity under concurrent load.',
      'Delivered JavaScript-based UI components integrated with IIS-hosted backend services.',
    ],
    stack: [
      { label: '.NET' },
      { label: 'SQL Server' },
      { label: 'JavaScript' },
      { label: 'IIS' },
    ],
  },
  {
    period: 'June 2022 – December 2022',
    role: 'Data Analyst',
    company: 'Publicis Groupe Delivery',
    location: '📍 Remote',
    bullets: [
      'Built Tableau and Power BI dashboards for key marketing and performance metrics.',
      'Designed ETL pipelines integrating SQL databases, Excel, Snowflake, and Google Analytics.',
      'Implemented Google Tag Manager for accurate data collection across digital campaigns.',
      'Used KNIME for data processing, automation, and workflow orchestration.',
    ],
    stack: [
      { label: 'Tableau', variant: 'orange' },
      { label: 'Power BI', variant: 'orange' },
      { label: 'Snowflake', variant: 'orange' },
      { label: 'KNIME' },
      { label: 'GTM' },
    ],
  },
];
