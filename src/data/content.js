// Central content for the portfolio.
// Everything here is easy to edit — no need to touch component logic.
// Replace the placeholder project links/text with your real work.

export const profile = {
  name: 'Masud Rana',
  role: 'AI Automation & AI Agent Expert',
  tagline:
    'I design and deploy AI agents & automation pipelines that run your business while you sleep.',
  location: 'Available worldwide · Remote',
  email: 'hello@masudrana.ai',
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', href: 'https://github.com/', handle: '@masudrana' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', handle: '/in/masudrana' },
    { label: 'X', href: 'https://x.com/', handle: '@masudrana' },
    { label: 'YouTube', href: 'https://youtube.com/', handle: '@masudrana' },
  ],
}

export const stats = [
  { value: '120+', label: 'Automations shipped' },
  { value: '45+', label: 'AI agents deployed' },
  { value: '30k+', label: 'Hours automated / yr' },
  { value: '99.9%', label: 'Uptime reliability' },
]

export const marquee = [
  'n8n',
  'LangChain',
  'OpenAI',
  'Claude',
  'Zapier',
  'Make',
  'Pinecone',
  'Supabase',
  'CrewAI',
  'AutoGen',
  'Airflow',
  'Python',
]

export const services = [
  {
    icon: 'Bot',
    title: 'AI Agent Development',
    description:
      'Autonomous, tool-using agents that reason, browse, call APIs and get real work done end-to-end.',
    tags: ['Multi-agent', 'RAG', 'Tool calling'],
  },
  {
    icon: 'Workflow',
    title: 'Business Process Automation',
    description:
      'Connect your CRM, inbox, sheets and apps into reliable no-touch workflows that save hundreds of hours.',
    tags: ['n8n', 'Make', 'Zapier'],
  },
  {
    icon: 'MessagesSquare',
    title: 'Custom Chatbots & Copilots',
    description:
      'Grounded on your data, deployed to web, WhatsApp or Slack — with memory, guardrails and analytics.',
    tags: ['RAG', 'GPT/Claude', 'Vector DB'],
  },
  {
    icon: 'LineChart',
    title: 'Data & Ops Intelligence',
    description:
      'Turn messy data into dashboards and automated reports so decisions happen in minutes, not days.',
    tags: ['Pipelines', 'Dashboards', 'Alerts'],
  },
]

// Replace with your real projects. `href` can point to a live demo / repo.
export const projects = [
  {
    name: 'InboxZero Agent',
    category: 'AI Agent',
    description:
      'An autonomous agent that triages, labels and drafts replies to 90% of inbound email with human-in-the-loop approval.',
    stack: ['LangChain', 'OpenAI', 'Postgres'],
    href: '#',
  },
  {
    name: 'LeadFlow Automation',
    category: 'Automation',
    description:
      'Captured, enriched and routed 12k+ leads/month into CRM with AI scoring and instant Slack alerts.',
    stack: ['n8n', 'HubSpot', 'Clearbit'],
    href: '#',
  },
  {
    name: 'Support Copilot',
    category: 'Copilot',
    description:
      'RAG copilot over 40k docs that cut first-response time by 68% and deflection by half.',
    stack: ['RAG', 'Pinecone', 'Claude'],
    href: '#',
  },
  {
    name: 'Ops Reporter Bot',
    category: 'Automation',
    description:
      'Daily automated KPI digest built from 6 data sources, delivered to leadership every morning.',
    stack: ['Airflow', 'Python', 'Sheets'],
    href: '#',
  },
]

export const process = [
  {
    step: '01',
    title: 'Discover',
    text: 'We map your workflow, data and goals to find the highest-ROI automation opportunities.',
  },
  {
    step: '02',
    title: 'Architect',
    text: 'I design the agent/tooling blueprint, guardrails and integrations before a single token is spent.',
  },
  {
    step: '03',
    title: 'Build & Test',
    text: 'Agents and pipelines are built, evaluated and hardened against real edge cases.',
  },
  {
    step: '04',
    title: 'Deploy & Scale',
    text: 'Go live with monitoring, then iterate toward full autonomy and measurable ROI.',
  },
]

export const testimonials = [
  {
    quote:
      'Masud turned a 3-person manual process into one reliable agent. We reclaimed 40 hours a week.',
    name: 'Client Name',
    title: 'COO, SaaS Startup',
  },
  {
    quote:
      'The most pragmatic AI builder we have worked with. Shipped in two weeks, not two quarters.',
    name: 'Client Name',
    title: 'Founder, Agency',
  },
  {
    quote:
      'Clear thinking, real results. Our support copilot now handles the boring 70% automatically.',
    name: 'Client Name',
    title: 'Head of Support',
  },
]
