export const sectionNav = [
  { id: "hero", label: "Opening" },
  { id: "about", label: "Identity" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "oss", label: "Open Source" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Awards" },
  { id: "blogs", label: "Blogs" },
  { id: "podcast", label: "Podcast" },
  { id: "github", label: "GitHub" },
  { id: "experience", label: "Highlights" },
  { id: "philosophy", label: "Vision" },
  { id: "contact", label: "Finale" }
];

export const sectionVisibility = {
  hero: true,
  about: true,
  journey: true,
  skills: true,
  education: true,
  oss: true,
  projects: true,
  achievements: true,
  blogs: true,
  podcast: true,
  github: true,
  experience: true,
  philosophy: true,
  contact: true
};

export const siteMeta = {
  titleSuffix: "Resume Experience",
  footerTagline: "Crafted with Next.js, Tailwind, GSAP, and obsessive detail.",
  description:
    "Creative frontend engineer portfolio focused on cinematic interaction, modern UI systems, and high-performance web experiences.",
  siteUrl: "https://example.com",
  locale: "en_US",
  ogImage: "/og-profile.jpg",
  keywords: [
    "frontend engineer",
    "next.js portfolio",
    "creative developer",
    "interactive resume",
    "gsap scrolltrigger",
    "ui engineering",
    "web performance"
  ],
  twitterHandle: "@yourhandle",
  themeColor: "#06050d"
};

export const personal = {
  name: "Geraldine Addamo",
  title: "Junior Full-Stack Developer / DevOps Engineer",
  location: "Finland / Remote",
  heroHeadline: "I am a Grit:Lab student focused on full-stack development and DevOps.",
  heroStatement: "I build modern, reliable web applications and the systems that support them.",
  aboutHeading: "I build practical digital products with full-stack and DevOps skills.",
  aboutParagraphs: [
    "I am a Grit:Lab student learning through hands-on full-stack development and DevOps work. I enjoy building solutions that connect clean interfaces with dependable backend systems.",
    "My focus is on practical execution, clear structure, and reliable delivery. I like turning ideas into applications that are simple to use, easy to maintain, and ready to grow."
  ]
};

export const journey = [
  {
    year: "2021 - 2023",
    role: "Back-Office Specialist",
    company: "Foundever",
    summary: "Managed customer accounts for OVO Energy Ltd.(Formerly Scottish and Southern Electricity)",
    impact: "• Started in a billing role for OVO Energy (formerly Scottish and Southern Electric), where I collected customers' meter readings through inbound calls.\n• Handled incoming customer calls to record meter readings while also working on technical queries, where I was responsible for customer accounts and incident escalation.\n• Resolved customer billing issues and ensured accurate updates to customer accounts.\n• Provided back-office support with account related issues and customer account data, meeting end of day quota."
  }
];

export const skills = [
  {
    category: "Core Languages",
    accent: "violet",
    items: ["Go", "JavaScript(React)", "Rust", "Java", "Python", "Bash"]
  },
  {
    category: "Infrastructure",
    accent: "cyan",
    items: ["AWS (EC2, ECS, ELB)", "SQL", "Terraform", "Docker", "Kubernetes", "Vagrant", "Ansible", "Git"]
  },
  {
    category: "CI/CD",
    accent: "magenta",
    items: ["GitLab CI", "GitHub Actions"]
  },
  {
    category: "Security",
    accent: "amber",
    items: ["SSH hardening", "UFW firewall", "JWT", "SSL/TLS", "Port management", "Cron automation"]
  },
  {
    category: "Networking",
    accent: "teal",
    items: ["Cisco Packet Tracer", "DNS", "UTM", "HTTP/HTTPS", "IPv4/IPv6", "TCP/UDP"]
  },
  {
    category: "Operating Systems",
    accent: "lime",
    items: ["macOS", "Linux", "Windows"]
  }
];

export const education = [
  {
    period: "2022 – 2023",
    degree: "Bachelor of Science in Mechatronics Engineering, undergraduate",
    institution: "Saint Louis University",
    note: "Completed first year of engineering studies. Coursework included Introduction to Programming, Data Structures, Computer-Aided Design, and basic electronics."
  },
  {
    period: "2018 – 2020",
    degree: "Senior high school, STEM(Science, Technology, Engineering, Mathematics)",
    institution: "University of the Cordilleras",
    note: "Completed senior high school with a focus on STEM subjects. Coursework included advanced mathematics, physics, chemistry, biology, and introductory programming concepts."
  } 
];

export const projects = [
  {
    id: "01",
    title: "Obsidian Atlas",
    concept: "A cinematic brand platform for a luxury fintech product launch.",
    stack: ["Next.js", "GSAP", "Headless CMS", "Vercel"],
    impact: "Raised waitlist conversions by 71% in the first month.",
    cta: "View Case Study"
  },
  {
    id: "02",
    title: "Signal / Archive",
    concept: "An interactive portfolio publication for a design collective.",
    stack: ["React", "WebGL layers", "Custom animation engine"],
    impact: "Featured in multiple design galleries and attracted enterprise clients.",
    cta: "Open Prototype"
  },
  {
    id: "03",
    title: "Neon Biome",
    concept: "An AI-assisted storytelling platform for product education at scale.",
    stack: ["Next.js", "Node", "OpenAI API", "Motion framework"],
    impact: "Cut onboarding time by 42% while improving retention metrics.",
    cta: "Read Breakdown"
  }
];

export const openSourceFallback = [
  {
    name: "cinema-scroll-kit",
    description: "Reusable GSAP scene transitions for narrative web experiences.",
    language: "JavaScript",
    stars: 124,
    url: "https://github.com/amir-signalcraft/cinema-scroll-kit"
  },
  {
    name: "tailwind-story-blocks",
    description: "Composable Tailwind blocks tuned for visual storytelling layouts.",
    language: "TypeScript",
    stars: 88,
    url: "https://github.com/amir-signalcraft/tailwind-story-blocks"
  },
  {
    name: "web-perf-audit-lab",
    description: "Automation toolkit for Lighthouse budgets and regression tracking.",
    language: "JavaScript",
    stars: 73,
    url: "https://github.com/amir-signalcraft/web-perf-audit-lab"
  }
];

export const achievements = [
  {
    year: "2025",
    title: "Awwwards Honorable Mention",
    issuer: "Awwwards",
    detail: "Recognized for immersive interaction design and execution quality."
  },
  {
    year: "2024",
    title: "Google UX Design Certificate",
    issuer: "Google",
    detail: "Completed advanced modules in UX research and product structure."
  },
  {
    year: "2023",
    title: "Top 10 Product Launch Experience",
    issuer: "Product Hunt Community",
    detail: "Launch microsite shortlisted for interaction clarity and conversion lift."
  },
  {
    year: "2022",
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    detail: "Formal certification in frontend architecture and testing workflows."
  }
];

export const blogs = [
  {
    title: "Designing Scroll Scenes Without Hurting Performance",
    outlet: "Signalcraft Journal",
    date: "2026",
    href: "https://example.com/blog/scroll-scenes-performance"
  },
  {
    title: "Building Motion Systems That Scale Across Teams",
    outlet: "Dev.to",
    date: "2025",
    href: "https://example.com/blog/motion-systems-scale"
  },
  {
    title: "From Visual Direction to Production UI",
    outlet: "Medium",
    date: "2024",
    href: "https://example.com/blog/visual-direction-production-ui"
  }
];

export const podcasts = [
  {
    title: "When Motion Improves UX (and when it hurts)",
    show: "The Product Frontline",
    date: "2026",
    href: "https://example.com/podcast/motion-improves-ux",
    audioMp3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  },
  {
    title: "Engineering Creative Direction",
    show: "Builders of the Web",
    date: "2025",
    href: "https://example.com/podcast/engineering-creative-direction",
    audioMp3: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }
];

export const githubProfile = {
  username: "amirho3inh",
  intro: "Open-source experiments around motion systems, frontend architecture, and performance tooling."
};

export const highlights = [
  {
    value: 58,
    suffix: "+",
    label: "Premium digital experiences shipped"
  },
  {
    value: 96,
    suffix: "%",
    label: "Average stakeholder satisfaction score"
  },
  {
    value: 12,
    suffix: "M",
    label: "Combined user impressions across launches"
  }
];

export const experiencePanels = [
  {
    title: "Creative Direction Meets Engineering Rigor",
    body: "From visual direction to production code, I bridge disciplines without sacrificing maintainability or velocity."
  },
  {
    title: "Performance Is Part of the Aesthetic",
    body: "I optimize animation architecture, render strategy, and asset flow so premium visual quality still feels effortless."
  },
  {
    title: "Systemic Thinking Across Teams",
    body: "I build reusable UI and motion systems that align product, design, and engineering around a shared language."
  }
];

export const philosophy = {
  quote: "The best interfaces do more than inform. They make people feel momentum.",
  body: "My philosophy is simple: clarity creates trust, motion creates memory, and craft creates differentiation. I build products that earn attention through intention."
};

export const contact = {
  headline: "Let\'s build the next unforgettable digital experience.",
  statement:
    "Available for senior frontend roles, creative technology leadership, and high-impact product collaborations.",
  methods: [
    { label: "Email", value: "amir.hashemisogheh@gmail.com", href: "mailto:amir.hashemisogheh@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/ah-hashemi-s", href: "https://www.linkedin.com/in/ah-hashemi-s" },
    { label: "GitHub", value: "github.com/amirho3inh", href: "https://github.com/amirho3inh" }
  ]
};
