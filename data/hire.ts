// Content for /hire/* landing pages. Every claim comes from the resume; each page is
// written to be substantively different (not the same text with swapped keywords).
export interface HirePageData {
  slug: string;
  navLabel: string;
  title: string; // <title> (layout appends " | Amit Kumar")
  description: string;
  h1: string;
  intro: string;
  sections: { heading: string; points: string[] }[];
  skills: string[];
  projectSlugs: string[];
  relatedHire: string[];
}

export const hirePages: HirePageData[] = [
  {
    slug: 'react-developer',
    navLabel: 'React Developer',
    title: 'Hire a Senior React Developer & Team Lead',
    description:
      'Senior React developer and team lead with 5+ years building enterprise SaaS dashboards. Redux Toolkit, TanStack Query, TypeScript. Open to full-time roles.',
    h1: 'Senior React Developer & Team Lead for Hire',
    intro:
      'I have spent 5+ years building enterprise React applications in healthcare, EdTech, FinTech and retail SaaS, and now lead the React JS team at Ditstek Innovations. I want a senior React or frontend-lead role where I can own architecture and grow a team.',
    sections: [
      {
        heading: 'React architecture and state',
        points: [
          'Modular frontend architecture with reusable components and scalable state management',
          'State management with Redux, Redux Toolkit, RTK Query, Zustand and TanStack React Query',
          'Atomic design and component-driven architecture, including a Redux Thunk based rental SaaS built from scratch',
        ],
      },
      {
        heading: 'Products I have built in React',
        points: [
          'Operational dashboards tracking SLA compliance, productivity and enrollment pipelines',
          'A POS and e-commerce platform integrated with card swipe machines and receipt printers (1,000+ daily transactions)',
          'A Kindle-like reading interface for K-12 lesson planning (40% less planning time for 500+ teachers)',
          'A remote patient monitoring platform for 2,000+ patients with EMR and device integrations',
        ],
      },
      {
        heading: 'Quality and leadership',
        points: [
          'Forms and validation with React Hook Form and Zod; testing with Jest and React Testing Library',
          'Code reviews, mentoring junior developers and establishing frontend best practices',
          'Driving frontend architecture decisions, feature planning and delivery timelines',
        ],
      },
    ],
    skills: [
      'React.js',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'Zustand',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Recharts',
      'Jest',
      'React Testing Library',
      'Tailwind CSS',
    ],
    projectSlugs: [
      'saas-rental-management-platform',
      'lesson-plan-builder-edtech-platform',
      'remote-patient-monitoring-platform',
    ],
    relatedHire: ['frontend-developer', 'nextjs-developer'],
  },
  {
    slug: 'nextjs-developer',
    navLabel: 'Next.js Developer',
    title: 'Hire a Senior Next.js Developer (SSR, ISR)',
    description:
      'Senior Next.js developer: SSR apps for 10,000+ users, plus SSG, ISR and server components. TypeScript, TanStack Query. Open to full-time roles.',
    h1: 'Senior Next.js Developer for Hire: SSR, ISR & Server Components',
    intro:
      'I have built Next.js (SSR) applications in TypeScript serving 10,000+ users and now use Next.js on an enterprise healthcare credentialing platform. I am looking for a senior Next.js role, remote or on-site in India.',
    sections: [
      {
        heading: 'Rendering strategy and performance',
        points: [
          'Optimized frontend performance with SSR, CSR, SSG and ISR on an enterprise credentialing platform',
          'Server components, code splitting and TanStack Query caching to keep the frontend fast',
          'Improved performance through SSR, optimized rendering and efficient data fetching',
        ],
      },
      {
        heading: 'Next.js in production',
        points: [
          'Developed scalable React.js and Next.js (SSR) applications with TypeScript for 10,000+ users',
          'Operational dashboards and analytics platforms delivered with cross-functional teams',
          'This portfolio itself is a Next.js App Router site with per-page metadata, sitemap and structured data',
        ],
      },
      {
        heading: 'Quality and tooling',
        points: [
          'Tooling: Sentry, Git/GitHub, Azure DevOps and pull requests within a CI/CD pipeline',
          'Code quality enforced with SonarQube, Jest and React Testing Library (coverage raised from 0% to ~85%)',
        ],
      },
    ],
    skills: [
      'Next.js',
      'React.js',
      'TypeScript',
      'SSR',
      'SSG',
      'ISR',
      'Server Components',
      'TanStack Query',
      'Tailwind CSS',
      'Sentry',
      'SonarQube',
      'Jest',
    ],
    projectSlugs: ['healthcare-credentialing-platform'],
    relatedHire: ['react-developer', 'frontend-developer'],
  },
  {
    slug: 'frontend-developer',
    navLabel: 'Frontend Developer',
    title: 'Hire a Senior Frontend Developer',
    description:
      'Senior frontend developer with 5+ years building responsive enterprise UIs with React, Next.js, Tailwind, Ant Design and ShadCN UI. Open to full-time roles.',
    h1: 'Senior Frontend Developer & UI Architect for Hire',
    intro:
      'I design and build scalable, responsive user interfaces for enterprise SaaS products and lead the frontend team that ships them. I am looking for a senior frontend or frontend-lead role where I can set UI architecture and mentor engineers.',
    sections: [
      {
        heading: 'UI systems',
        points: [
          'Component-driven architecture, design systems and atomic design',
          'Responsive UI with Tailwind CSS and SCSS',
          'Component libraries I work with: Ant Design, Semantic UI, Radix UI and ShadCN UI',
        ],
      },
      {
        heading: 'Data-heavy interfaces',
        points: [
          'Analytics dashboards with Recharts',
          'Work queues with filtering, bulk actions and SLA-based prioritization',
          'Complex workflow screens for credentialing, enrollment and claims',
        ],
      },
      {
        heading: 'Delivery',
        points: [
          'Webpack and Vite build tooling, CI/CD pipelines and Git workflows',
          'Jest and React Testing Library for component tests',
          'Micro-frontend concepts, iframe-based authentication bridging for legacy integration',
        ],
      },
    ],
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'SCSS',
      'Ant Design',
      'Radix UI',
      'ShadCN UI',
      'Recharts',
      'Vite',
      'Webpack',
      'Jest',
    ],
    projectSlugs: ['claims-management-system', 'lesson-plan-builder-edtech-platform'],
    relatedHire: ['react-developer', 'nextjs-developer'],
  },
];

export const getHirePage = (slug: string) => hirePages.find((p) => p.slug === slug);
