import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "afterquery",
    companyName: "AfterQuery (YC backed)",
    positions: [
      {
        id: "afterquery-swe",
        title: "Software Engineer (Bash/Linux)",
        employmentPeriod: {
          start: "09.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Contribute to a Y Combinator–backed AI research lab building high-quality human-generated datasets used to evaluate and stress-test advanced AI systems.
- Design multi-step command-line engineering tasks that simulate real-world development workflows, including debugging, refactoring, and build automation.
- Build reproducible, containerized environments using Docker to ensure deterministic execution across systems and CI pipelines.`,
        skills: [
          "Bash",
          "Linux",
          "Docker",
          "CI/CD",
          "AI Research",
          "Automation",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "palisadoes",
    companyName: "Palisadoes Foundation (GSOC)",
    positions: [
      {
        id: "palisadoes-fs",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "06.2023",
          end: "08.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Developed and maintained modern, high-performance web applications using Next.js, implementing server-side rendering (SSR) and API routes for seamless data delivery.
- Integrated Redis for caching, session management, and real-time updates, improving page load speed and reducing database query overhead.
- Used GitHub Actions, Docker, and Kubernetes for CI/CD automation, scalability, and containerized deployment.`,
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Redis",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
        ],
        isExpanded: true,
      },
    ],
  },
  {
    id: "dnsdaddy",
    companyName: "DNSdaddy",
    positions: [
      {
        id: "dnsdaddy-founder",
        title: "Founder",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Full-time",
        icon: "idea",
        description: `India's first Subdomain Marketplace for Hackers and Builders.
- Engineered a scalable subdomain marketplace using Next.js (App Router) with SSR for performance and SEO.
- Integrated Vercel, Netlify, and Hostinger APIs for automated domain mapping and CNAME record updates.
- Utilized Drizzle ORM with PostgreSQL for type-safe, efficient database access.
- Employed Redis for caching and job queues to ensure low-latency domain availability checks.
- Currently powering 50+ domain listings and 1000+ active users, with real-time infrastructure and CI/CD via GitHub Actions.`,
        skills: [
          "Next.js",
          "PostgreSQL",
          "Drizzle ORM",
          "Redis",
          "Vercel",
          "Netlify",
          "Docker",
          "Kubernetes",
          "GitHub Actions",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "csi",
    companyName: "Computer Society of India (CUSB)",
    positions: [
      {
        id: "csi-tech-lead",
        title: "Tech Lead",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Part-time",
        icon: "code",
        description: "Tech Lead at the university's Computer Society of India chapter.",
        skills: ["Leadership", "Technical Workshops", "Community"],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "cu-be",
        title: "B.E. in Computer Science",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        icon: "education",
        description: `- Chandigarh University, Punjab, India.
- Pursuing Bachelor of Engineering in Computer Science.`,
        skills: [
          "JavaScript",
          "Java",
          "React",
          "TypeScript",
          "Go",
          "Python",
          "Data Structures",
          "Algorithms",
        ],
      },
      {
        id: "dav-class12",
        title: "Class 12th (CBSE)",
        employmentPeriod: {
          start: "2020",
        },
        icon: "education",
        description: "DAV Public School, Bariatu, Jharkhand, India.",
        skills: [],
      },
    ],
  },
];
