export interface Credential {
  icon: string;
  name: string;
  issuer: string;
  verifyUrl?: string;
  wip?: boolean;
}

export const credentials: Credential[] = [
  {
    icon: '🤖',
    name: 'Claude Code in Action',
    issuer: 'Anthropic Education · March 2026',
    verifyUrl: 'https://skilljar.com/c/a2vesa6o89iq',
  },
  {
    icon: '🌐',
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
  },
  {
    icon: '🔀',
    name: 'Introduction to Git',
    issuer: 'DataCamp',
  },
  {
    icon: '🎨',
    name: 'Google UX Design',
    issuer: 'Google / Coursera',
  },
  {
    icon: '☁️',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    wip: true,
  },
];
