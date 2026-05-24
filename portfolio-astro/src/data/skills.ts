export type BadgeVariant = 'hi' | 'green' | 'purple' | 'orange' | 'default';

export interface Badge {
  label: string;
  variant?: BadgeVariant;
}

export interface SkillGroup {
  icon: string;
  title: string;
  badges: Badge[];
}

export const skillGroups: SkillGroup[] = [
  {
    icon: '🔤',
    title: 'Languages',
    badges: [
      { label: 'TypeScript', variant: 'hi' },
      { label: 'JavaScript ES2020+', variant: 'hi' },
      { label: 'Python', variant: 'hi' },
      { label: 'SQL', variant: 'hi' },
      { label: 'Java' },
      { label: '.NET / C#' },
      { label: 'C' },
    ],
  },
  {
    icon: '🎨',
    title: 'Frontend',
    badges: [
      { label: 'React', variant: 'hi' },
      { label: 'Next.js', variant: 'hi' },
      { label: 'Vue 3', variant: 'hi' },
      { label: 'Tailwind CSS', variant: 'hi' },
      { label: 'HTML5', variant: 'hi' },
      { label: 'CSS3', variant: 'hi' },
      { label: 'Pinia', variant: 'green' },
      { label: 'Vite', variant: 'green' },
      { label: 'DaisyUI', variant: 'green' },
      { label: 'FormKit', variant: 'green' },
    ],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    badges: [
      { label: 'Node.js 18+', variant: 'hi' },
      { label: 'FastAPI', variant: 'hi' },
      { label: 'RESTful APIs', variant: 'hi' },
      { label: 'Webhook Integrations', variant: 'green' },
      { label: 'Auth Middleware', variant: 'green' },
      { label: 'Alembic', variant: 'green' },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    badges: [
      { label: 'PostgreSQL', variant: 'hi' },
      { label: 'Neon (serverless)', variant: 'green' },
      { label: 'MySQL', variant: 'green' },
      { label: 'SQL Server', variant: 'hi' },
      { label: 'MongoDB' },
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud & Infra',
    badges: [
      { label: 'Docker', variant: 'hi' },
      { label: 'Cloudflare', variant: 'hi' },
      { label: 'GitHub Actions', variant: 'hi' },
      { label: 'AWS Cognito', variant: 'green' },
      { label: 'AWS S3 / CloudFront', variant: 'green' },
      { label: 'EKS / Kubernetes', variant: 'green' },
      { label: 'Render', variant: 'green' },
      { label: 'Linux', variant: 'green' },
    ],
  },
  {
    icon: '🧪',
    title: 'Testing',
    badges: [
      { label: 'Pytest', variant: 'hi' },
      { label: 'Vitest', variant: 'hi' },
      { label: 'Playwright (E2E)', variant: 'hi' },
    ],
  },
  {
    icon: '🤖',
    title: 'AI & Dev Tooling',
    badges: [
      { label: 'Claude Code', variant: 'hi' },
      { label: 'Spec-Driven Dev', variant: 'hi' },
      { label: 'Context Engineering', variant: 'hi' },
      { label: 'Skill Agents', variant: 'hi' },
      { label: 'GPT Codex', variant: 'hi' },
      { label: 'Figma', variant: 'green' },
    ],
  },
  {
    icon: '📊',
    title: 'Data & Analytics',
    badges: [
      { label: 'Tableau', variant: 'green' },
      { label: 'Power BI', variant: 'green' },
      { label: 'Snowflake', variant: 'green' },
      { label: 'KNIME', variant: 'green' },
      { label: 'Google Analytics', variant: 'green' },
      { label: 'GTM', variant: 'green' },
      { label: 'Power Query', variant: 'green' },
      { label: 'Databricks' },
      { label: 'Alteryx' },
      { label: 'Excel (Advanced)' },
    ],
  },
  {
    icon: '🔭',
    title: 'Familiar With',
    badges: [
      { label: 'GraphQL' },
      { label: 'Apollo' },
      { label: 'Prisma ORM' },
      { label: 'Redis' },
      { label: 'Stripe API' },
      { label: 'Podman' },
      { label: 'Agile / Scrum' },
    ],
  },
];
