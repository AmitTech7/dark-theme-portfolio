export interface Project {
  id: number;
  slug: string;
  title: string;
  shortTitle?: string; // used in <title> when the full title is long
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights?: string[];
}

export const portfolioData = {
  personal: {
    name: "Amit Kumar",
    title: "Senior Team Lead - React JS / Senior Frontend Engineer",
    subtitle:
      "Senior Frontend Engineer with 5+ years of experience building scalable enterprise web applications using React.js, Next.js, and TypeScript",
    bio: "Senior Frontend Engineer with 5+ years of experience building scalable enterprise web applications using React.js, Next.js, and TypeScript. Currently Senior Team Lead of the React JS team, leading frontend development for enterprise SaaS platforms across healthcare, EdTech, and FinTech domains. Expertise in React architecture, server-side rendering (Next.js), state management, performance optimization, and modern UI development. Experienced in building analytics dashboards, workflow management systems, and enterprise SaaS products, while mentoring developers and driving frontend best practices. Skilled in agentic AI workflows and AI-assisted development using Cursor, Claude, and GitHub Copilot (1.5+ years).",
    location: "Chandigarh, India",
    email: "amitthakurk619@gmail.com",
    phone: "+91-8261802148",
    social: {
      github: "https://github.com/AmitTech7",
      linkedin: "https://linkedin.com/in/amitkumar",
      twitter: "https://twitter.com/amittech7",
      portfolio: "https://amit-portfolio-dark-theme.vercel.app/",
    },
  },
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "10,000+", label: "Users Served" },
    { value: "1.5+", label: "Years Agentic AI Workflows" },
  ],
  aiDevelopment: {
    tools: ["Cursor IDE", "Claude (Anthropic)", "GitHub Copilot"],
    summary:
      "1.5+ years of hands-on experience with agentic AI workflows and AI-assisted development: multi-step task automation, AI-driven code generation, prompt engineering, automated refactoring, AI-assisted debugging, and rapid prototyping using LLM-powered agents.",
  },
  strengths: [
    "Frontend Architecture & Scalable UI Design",
    "Team Leadership & Developer Mentorship",
    "Cross-Functional Collaboration",
    "Performance Optimization & Debugging",
    "Agile Delivery & KPI Ownership",
  ],
  education: {
    degree: "Bachelor of Technology (B.Tech), Mechanical Engineering",
    institute: "T.R. Abhilashi Memorial Institute of Engineering & Technology, Himachal Pradesh",
  },
  skills: [
    {
      title: "Frontend",
      icon: "⚛️",
      items: ["React.js", "Next.js (SSR)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    },
    {
      title: "State Management",
      icon: "🗂️",
      items: ["Zustand", "Redux", "Redux Toolkit", "RTK Query", "TanStack React Query"],
    },
    {
      title: "UI Development",
      icon: "🧩",
      items: [
        "Component-Driven Architecture",
        "Responsive UI",
        "Design Systems",
        "Atomic Design",
      ],
    },
    {
      title: "Styling",
      icon: "🎨",
      items: ["TailwindCSS", "SCSS", "Ant Design", "Semantic UI", "Radix UI", "ShadCN UI"],
    },
    {
      title: "Data Visualization",
      icon: "📊",
      items: ["Recharts", "Analytics Dashboards"],
    },
    {
      title: "Forms & Validation",
      icon: "📝",
      items: ["React Hook Form", "Zod", "Yup"],
    },
    {
      title: "Testing",
      icon: "🧪",
      items: ["Jest", "React Testing Library", "Unit Testing"],
    },
    {
      title: "Build & Development",
      icon: "📦",
      items: ["Node.js", "npm", "Webpack", "Vite"],
    },
    {
      title: "API Integration",
      icon: "🔌",
      items: ["REST APIs", "GraphQL (integration exposure)", "ASP.NET", "ASP.NET Core"],
    },
    {
      title: "DevOps & Deployment",
      icon: "🚀",
      items: ["CI/CD Pipelines", "Docker (exposure)", "Containerized Dev Environments"],
    },
    {
      title: "Architecture",
      icon: "🏗️",
      items: [
        "Modular Frontend Architecture",
        "Micro-Frontend concepts",
        "Performance Optimization",
      ],
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      items: ["Git", "GitHub", "Azure DevOps", "Sentry", "SonarQube", "Greptile"],
    },
    {
      title: "Agentic AI",
      icon: "🤖",
      items: [
        "Cursor IDE",
        "Claude",
        "GitHub Copilot",
        "Prompt Engineering",
        "Automated Refactoring",
        "AI-Assisted Debugging",
      ],
    },
    {
      title: "Development Practices",
      icon: "🔁",
      items: [
        "Agile/Scrum",
        "Code Reviews",
        "Static Code Analysis",
        "Clean Code Principles",
        "Scalable Component Design",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      slug: "healthcare-credentialing-platform",
      shortTitle: "Healthcare Credentialing Platform",
      title: "Healthcare Provider Enrollment, Credentialing & Licensing Platform",
      description:
        "Enterprise SaaS platform managing provider enrollment, credentialing, and licensing workflows across multiple insurance payers, replacing fragmented manual processes with a structured, workflow-driven application. Built with Next.js and TypeScript while leading the frontend team.",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "React.js", "TypeScript", "TanStack Query", "Workflow UI", "Dashboards"],
      featured: true,
      highlights: [
        "Multi-stage enrollment workflow interfaces with controlled transitions, stage validations, and audit tracking, including a 5-queue enrollment pipeline and per-payer tracking with independent statuses and timelines",
        "Primary source verification workflow (license, DEA, board certification, sanctions) with attestation and committee review before payer submission",
        "Licensing module for individual/facility licenses and multi-state compact privileges",
        "Dynamic work queues with filtering, bulk actions, and SLA-based prioritization",
        "Real-time dashboards for SLA compliance, productivity, workload distribution, and performance analytics",
        "Workflow automation interfaces with trigger events, follow-up rules, and escalation logic, plus First Pass Rate (FPR) tracking for submission quality and rejection reasons",
        "Read-only client portal, a dynamic form engine for payer-specific requirements (Medicare, Medicaid), and PII masking for sensitive data",
        "Performance optimized with Next.js SSR, CSR, SSG, ISR, server components, code splitting, and TanStack Query caching, with an architecture designed to support future AI-driven automation",
        "Led the frontend team by distributing tasks and providing architecture and module estimates, collaborating with product and backend teams",
      ],
    },
    {
      id: 2,
      slug: "remote-patient-monitoring-platform",
      title: "Remote Patient Monitoring Platform",
      description:
        "HIPAA-compliant healthcare SaaS platform supporting remote monitoring for 2,000+ patients. Integrated EMR systems and medical devices for real-time monitoring, modularized care services (CCM, TCM, BHI, PCM, RTM, RPM), and built tools for provider coordination and remote care management.",
      image:
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "Healthcare", "HIPAA", "EMR Integration"],
      featured: true,
      highlights: [
        "Developed a HIPAA-compliant healthcare SaaS platform supporting remote monitoring for 2,000+ patients",
        "Integrated EMR systems and medical devices for real-time patient monitoring",
        "Modularized care services supporting CCM, TCM, BHI, PCM, RTM, and RPM programs",
        "Built tools enabling provider coordination and remote patient care management",
      ],
    },
    {
      id: 3,
      slug: "saas-rental-management-platform",
      title: "SaaS Rental Management Platform",
      description:
        "Engineered from scratch including POS and e-commerce modules, using Redux Thunk and atomic design. Integrated card swipe machines and receipt printers supporting 1,000+ daily transactions, and built tools for bookings, inventory, and payments. Digitized operations for 20+ rental businesses.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "Redux Thunk", "Atomic Design", "POS Integration"],
      featured: true,
      highlights: [
        "Engineered the platform from scratch including POS and e-commerce modules",
        "Modular frontend architecture using Redux Thunk and atomic design principles",
        "Integrated card swipe machines and receipt printers supporting 1,000+ daily transactions",
        "Built tools enabling service providers to manage bookings, inventory, and payments",
        "Digitized operations for 20+ rental businesses, improving efficiency and customer experience",
      ],
    },
    {
      id: 4,
      slug: "lesson-plan-builder-edtech-platform",
      title: "Lesson Plan Builder (EdTech Platform)",
      description:
        "Lesson planning platform for K-12 educators with a Kindle-like reading interface, customizable layouts, multimedia support, content libraries, student tagging, and planning tools. Reduced lesson planning time by 40% for over 500 teachers.",
      image:
        "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "EdTech", "Content Library"],
      featured: true,
      highlights: [
        "Developed an intuitive lesson planning platform designed for K-12 educators",
        "Built a Kindle-like reading interface with customizable layouts and multimedia support",
        "Implemented content libraries, student tagging, and planning tools for educators",
        "Reduced lesson planning time by 40% for over 500 teachers",
      ],
    },
    {
      id: 5,
      slug: "claims-management-system",
      title: "Claims Management System",
      description:
        "Modernized a legacy insurance platform by integrating a React frontend with ASP.NET backend services, with improved claims and data-processing workflows and iframe-based authentication bridging for seamless system integration. Increased system adoption by 60% following modernization.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "ASP.NET", "Insurance", "Auth Bridging"],
      featured: false,
      highlights: [
        "Modernized a legacy insurance platform by integrating a React frontend with ASP.NET backend services",
        "Implemented improved UI workflows for claims management and data processing",
        "Built iframe-based authentication bridging for seamless system integration",
        "Increased system adoption by 60% following modernization",
      ],
    },
    {
      id: 6,
      slug: "yoga-fitness-studio-management-platform",
      title: "Yoga & Fitness Studio Management Platform",
      description:
        "Platform supporting class scheduling, instructor payroll, and studio management workflows. Integrated Stripe and PayPal for memberships, payments, and recurring billing; building a self-service member portal with automated reminders and analytics dashboards for studio and instructor performance. In development.",
      image:
        "https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "Stripe", "PayPal", "Analytics"],
      featured: false,
      highlights: [
        "Platform supporting class scheduling, instructor payroll, and studio management workflows",
        "Integrated Stripe and PayPal for memberships, payments, and recurring billing",
        "Building a self-service member portal with automated reminders to improve engagement",
        "Designing analytics dashboards to track studio and instructor performance",
      ],
    },
  ] as Project[],
  experience: [
    {
      id: 1,
      company: "Ditstek Innovations, Chandigarh",
      position: "Senior Team Lead - React JS Team",
      duration: "Nov 2025 - Present",
      description:
        "Leading the React frontend team responsible for enterprise SaaS platforms across healthcare and SaaS domains.",
      achievements: [
        "Driving frontend architecture decisions, performance optimization, and scalable UI design",
        "Mentoring developers, conducting code reviews, and maintaining high code quality standards",
        "Collaborating with product managers and backend teams to deliver complex dashboards and workflow systems",
        "Facilitating Agile ceremonies including backlog refinement, sprint planning, daily standups, and retrospectives to keep the team aligned and delivery predictable",
        "Enforcing code quality with SonarQube and unit testing (Jest, React Testing Library), raising test coverage from 0% to ~85%, reducing Sonar issues, and maintaining a passing quality gate with ~2% code duplication",
        "Meeting team delivery KPIs: rework rate under 15%, no more than 3 PR comment cycles, and all Greptile AI review comments resolved before merge",
        "Overseeing feature planning, development workflows, and frontend delivery timelines",
        "Championing agentic AI workflows across the team using Cursor, Claude, and GitHub Copilot to automate repetitive tasks and accelerate feature delivery",
      ],
    },
    {
      id: 2,
      company: "Ditstek Innovations, Chandigarh",
      position: "Senior React.js / Next.js Developer",
      duration: "Sep 2020 - Oct 2025",
      description:
        "Developed scalable React.js and Next.js (SSR) applications using TypeScript, serving 10,000+ users.",
      achievements: [
        "Implemented modular frontend architecture with reusable components and scalable state management",
        "Improved application performance through SSR, optimized rendering, and efficient data fetching",
        "Collaborated with cross-functional teams to deliver enterprise SaaS products and analytics platforms",
        "Mentored junior developers, established frontend best practices, and introduced agentic AI tools to streamline workflows",
      ],
    },
    {
      id: 3,
      company: "Self-Employed",
      position: "Freelance Web Developer",
      duration: "Jun 2019 - Sep 2020",
      description:
        "Developed responsive websites using HTML, CSS, JavaScript, and WordPress.",
      achievements: [
        "Built SEO-optimized and performance-focused UI experiences",
        "Delivered projects end-to-end by working directly with clients on requirements and implementation",
      ],
    },
  ],
};
