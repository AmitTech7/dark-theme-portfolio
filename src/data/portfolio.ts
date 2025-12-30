export const portfolioData = {
  personal: {
    name: "Amit Kumar",
    title: "React JS Developer / Software Consultant",
    subtitle:
      "Accomplished React JS Developer with over 4+ years of experience creating intuitive user interfaces and integrating robust APIs",
    bio: "Accomplished React JS Developer with over four years of experience creating intuitive user interfaces and integrating robust APIs. Proven expertise in building complex applications from scratch, enhancing performance, and implementing user-driven features. Recognized for exceptional client communication, problem-solving skills, and leading successful projects in agile environments. Adept at using modern technologies like Redux and TypeScript to deliver high-quality solutions.",
    location: "Punjab, India (Mohali)",
    email: "amitthakurk619@gmail.com",
    phone: "+91-*******148",
    social: {
      github: "https://github.com/AmitTech7",
      linkedin: "http://www.linkedin.com/in/amit-kumar-4ab324bb",
      twitter: "https://twitter.com/amittech7",
      portfolio: "https://amittech7.dev",
    },
  },
  skills: {
    frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Redux", level: 90 },
    ],
    backend: [
      { name: "ASP.NET Core", level: 75 },
      { name: "ASP.NET", level: 70 },
      { name: "RESTful APIs", level: 88 },
      { name: "Firebase", level: 80 },
      { name: "Node.js", level: 75 },
    ],
    tools: [
      { name: "Git/GitHub", level: 90 },
      { name: "Jira/Azure", level: 85 },
      { name: "Redux Thunk", level: 88 },
      { name: "RTK Query", level: 85 },
      { name: "Agile/Scrum", level: 90 },
    ],
  },
  projects: [
    {
      id: 1,
      title: "SAAS Rental Platform",
      description:
        "Comprehensive rental platform developed from scratch including POS and e-commerce apps. Built with Redux Thunk, Semantic UI, and atomic architecture. Features marketplace connecting customers and service providers, hardware integrations, and complete business management tools.",
      image:
        "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "Redux Thunk", "Semantic UI", "POS Integration"],
      liveUrl: "https://github.com/AmitTech7/rental-platform",
      githubUrl: "https://github.com/AmitTech7?tab=repositories",
      featured: true,
    },
    {
      id: 2,
      title: "Lesson Plan Builder EdTech Platform",
      description:
        "Educational platform developed from scratch to simplify lesson preparation with intuitive interface. Features curated content library, grade-specific books, Kindle-like reading experience, and comprehensive lesson management tools for teachers.",
      image:
        "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React.js", "Redux Thunk", "Semantic UI", "EdTech"],
      liveUrl: "https://github.com/AmitTech7/lesson-builder",
      githubUrl: "https://github.com/AmitTech7?tab=repositories",
      featured: true,
    },
    {
      id: 3,
      title: "Insurance Claims Management System",
      description:
        "Complete revamp from ASP.NET to ASP.NET Core and React. Streamlines insurance claims facilitating interaction among motor body repairers, parts suppliers, and insurers. Built with Ant Design, RTK Query, and TypeScript with seamless legacy integration.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: [
        "React.js",
        "ASP.NET Core",
        "RTK Query",
        "TypeScript",
        "Ant Design",
      ],
      liveUrl: "https://github.com/AmitTech7/claims-management",
      githubUrl: "https://github.com/AmitTech7?tab=repositories",
      featured: true,
    },
    {
      id: 4,
      title: "Remote Patient Monitoring (Carehalo)",
      description:
        "HIPAA-compliant SAAS-based Virtual Patient Monitoring System for remote healthcare management. Supports web and mobile applications with EMR integrations, covering CCM, TCM, BHI, PCM, RTM, and RPM healthcare areas.",
      image:
        "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: [
        "React.js",
        "Healthcare",
        "HIPAA",
        "Mobile App",
        "EMR Integration",
      ],
      liveUrl: "https://github.com/AmitTech7/carehalo",
      githubUrl: "https://github.com/AmitTech7?tab=repositories",
      featured: true,
    },
    {
      id: 5,
      title: "Yoga & Fitness Studio Management Platform",
      description:
        "Full-stack React.js web application for managing yoga and fitness studios, supporting class scheduling, member management, and staff coordination. Features integrated online payment systems (Stripe, PayPal) for memberships, class passes, recurring billing, and promotional discounts. Includes responsive member portal with automated class reminders, admin tools for instructor management, payroll automation, financial reporting, and real-time analytics. Built-in marketing features include email campaigns, referral programs, and push notifications.",
      image:
        "https://images.pexels.com/photos/3822668/pexels-photo-3822668.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: [
        "React.js",
        "Stripe",
        "PayPal",
        "Full-Stack",
        "Analytics",
        "Marketing Automation",
      ],
      liveUrl: "https://github.com/AmitTech7/yoga-fitness-platform",
      githubUrl: "https://github.com/AmitTech7?tab=repositories",
      featured: true,
    },
    {
      id: 6,
      title: "WordPress Development Projects",
      description:
        "Various WordPress websites with custom themes, SEO optimization, and content management. Includes responsive designs, performance optimization, and client-specific customizations during freelancing period.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["WordPress", "SEO", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://github.com/AmitTech7/wordpress-projects",
      githubUrl: "https://github.com/AmitTech7?tab=repositories",
      featured: false,
    },
  ],
  experience: [
    {
      id: 1,
      company: "Ditstek Innovations, Chandigarh",
      position: "Sr. React JS Developer",
      duration: "Sep 2020 - Present (4+ years)",
      description:
        "Currently working as a senior software associate leading React.js development projects. Responsible for architecting and developing complex web applications, mentoring junior developers, and ensuring high-quality code delivery.",
      achievements: [
        "Led development of multiple SAAS platforms serving 1000+ users",
        "Integrated complex APIs and hardware systems including POS and receipt printers",
        "Improved application performance by 40% through code optimization and best practices",
        "Successfully managed client communications and project deliveries in agile environment",
        "Mentored junior developers and established coding standards for the team",
      ],
    },
    {
      id: 2,
      company: "Freelancing",
      position: "Full Stack Developer",
      duration: "June 2019 - Sep 2020 (1+ year)",
      description:
        "Provided comprehensive web development services including WordPress development, SEO optimization, content writing, and custom web solutions using HTML, CSS, and JavaScript.",
      achievements: [
        "Delivered 15+ WordPress websites with custom themes and functionality",
        "Implemented SEO strategies resulting in improved search rankings for clients",
        "Created responsive web designs ensuring cross-browser compatibility",
        "Provided ongoing maintenance and support for client websites",
        "Built strong client relationships leading to repeat business and referrals",
      ],
    },
  ],
};
