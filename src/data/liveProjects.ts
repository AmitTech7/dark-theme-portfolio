export interface LiveProject {
  id: number;
  title: string;
  description: string;
  briefDescription: string;
  image: string;
  liveUrl: string;
  technologies: string[];
  category: string;
  features: string[];
}

export const liveProjectsData: LiveProject[] = [
  {
    id: 1,
    title: "LinkedIn Professional Architect",
    description:
      "AI-powered content generation platform for LinkedIn professionals. Generate intelligent, role-specific content for developers, analysts, and business leaders.",
    briefDescription:
      "AI content generator for LinkedIn professionals with customizable topics and post lengths.",
    image: "/screenshots/linkedin-architect.png", // You'll need to add your screenshot here
    liveUrl: "https://linked-post-gamma.vercel.app",
    technologies: ["React", "TypeScript", "AI/ML", "Tailwind CSS"],
    category: "SaaS Platform",
    features: [
      "Role-based content generation",
      "Customizable content angles",
      "Multiple post length options",
      "Content archive system",
      "Professional insights generation",
    ],
  },
  {
    id: 2,
    title: "ETF Shop India",
    description:
      "Comprehensive platform for Exchange Traded Funds (ETFs) in India. Explore different types of ETFs including Index, Fixed Income, Commodity, Leveraged, and Alternative ETFs.",
    briefDescription:
      "Educational platform for ETF investment in India with detailed information on types, benefits, and risks.",
    image: "/screenshots/etf-shop.png", // You'll need to add your screenshot here
    liveUrl: "https://etf-shop.vercel.app",
    technologies: ["React", "TypeScript", "Finance APIs", "Tailwind CSS"],
    category: "Finance & Investment",
    features: [
      "Multiple ETF categories",
      "Investment guides and tutorials",
      "Risk assessment tools",
      "Benefits and comparison charts",
      "Market exposure tracking",
    ],
  },
  {
    id: 3,
    title: "Finance Tracker",
    description:
      "Personal finance management application with portfolio tracking, asset allocation visualization, and investment management. Track stocks, mutual funds, bonds, and fixed deposits.",
    briefDescription:
      "Complete portfolio management system with real-time tracking and visual analytics.",
    image: "/screenshots/finance-tracker.png", // You'll need to add your screenshot here
    liveUrl: "https://finace-tracker-red.vercel.app/",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    category: "Finance & Investment",
    features: [
      "Portfolio value tracking (₹10.5L+)",
      "Asset allocation pie chart",
      "Multi-asset support (Stocks, Mutual Funds, Bonds)",
      "Investment history management",
      "Purchase date tracking",
      "Edit and delete capabilities",
    ],
  },
  {
    id: 4,
    title: "MarketPulse India",
    description:
      "Real-time stock market insights platform for NSE & BSE. Track Nifty 50, Sensex, Nifty Bank indices with live updates and sector performance analysis.",
    briefDescription:
      "Real-time Indian stock market dashboard with sector performance and market overview.",
    image: "/screenshots/market-pulse.png", // You'll need to add your screenshot here
    liveUrl: "https://market-pulse-lemon.vercel.app",
    technologies: [
      "React",
      "TypeScript",
      "Market APIs",
      "Real-time Data",
      "Tailwind CSS",
    ],
    category: "Finance & Analytics",
    features: [
      "Live market data updates",
      "Nifty 50, Sensex, Nifty Bank tracking",
      "Sector performance analysis",
      "Market overview insights",
      "Real-time percentage changes",
      "Visual performance indicators",
    ],
  },
  {
    id: 5,
    title: "Professional Portfolio Website",
    description:
      "Modern, responsive portfolio website showcasing professional experience, skills, and projects. Built with React, TypeScript, and Tailwind CSS featuring dark theme, smooth animations, and interactive components. Includes contact form with EmailJS integration and dedicated live projects showcase page.",
    briefDescription:
      "Personal portfolio website with dark theme, interactive UI, and live project showcase.",
    image: "/screenshots/portfolio.png",
    liveUrl: "https://amit-portfolio-light-theme.vercel.app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "EmailJS", "React Router"],
    category: "Portfolio & Personal Brand",
    features: [
      "Responsive dark theme design",
      "Interactive navigation with smooth scrolling",
      "Live projects showcase page",
      "Contact form with email integration",
      "Skills visualization with progress bars",
      "Project cards with filtering",
      "Experience timeline",
      "Social media integration",
    ],
  },
];

// Category filters
export const projectCategories = [
  "All",
  "SaaS Platform",
  "Finance & Investment",
  "Finance & Analytics",
  "Portfolio & Personal Brand",
];
