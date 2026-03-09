import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "dnsdaddy",
    title: "DNSdaddy",
    period: {
      start: "2024",
    },
    link: "https://dnsdaddy.in",
    skills: [
      "Next.js",
      "App Router",
      "SSR",
      "PostgreSQL",
      "Drizzle ORM",
      "Redis",
      "Vercel",
      "Netlify",
      "Hostinger API",
      "GitHub Actions",
      "Docker",
      "Kubernetes",
    ],
    description: `India's first Subdomain Marketplace for Hackers and Builders.
- Engineered a scalable subdomain marketplace using Next.js (App Router) with SSR for performance and SEO.
- Integrated Vercel, Netlify, and Hostinger APIs for automated domain mapping and CNAME record updates.
- Utilized Drizzle ORM with PostgreSQL for type-safe, efficient database access.
- Employed Redis for caching and job queues for low-latency domain availability checks.
- Currently powering 50+ domain listings and 1000+ active users, with real-time infrastructure and CI/CD via GitHub Actions.`,
    isExpanded: true,
  },
  {
    id: "tweetxagent",
    title: "TweetXAgent",
    period: {
      start: "2025",
    },
    link: "https://tweetxagent.com",
    skills: [
      "Next.js",
      "AI/LLM",
      "OpenAI",
      "Claude",
      "Gemini",
      "DeepSeek",
      "Razorpay",
      "Subscription",
    ],
    description: `AI-powered viral tweet generator and engagement booster.
- Developed a highly scalable AI-driven tweet generator using Next.js (App Router) with server-side API calls optimized for low-latency responses.
- Engineered a multi-model AI pipeline, leveraging LLMs (OpenAI, Claude, Gemini, DeepSeek) for generating high-engagement tweets tailored to user profiles.
- Implemented a tiered subscription model (Free, Pro, Premium) with Razorpay, driving revenue growth.
- Designed an intuitive UI to enhance user experience, improving retention and conversion rates.`,
    isExpanded: true,
  },
];
