import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Kundan",
  lastName: "Kumar",
  displayName: "Kundan Kumar",
  username: "kundankumar",
  gender: "male",
  pronouns: "he/him",
  bio: "Full Stack Developer. Building with Next.js, React, and modern web technologies.",
  flipSentences: [
    "Full Stack Developer. Building with Next.js and React.",
    "Developer @ Palisadoes Foundation",
    "Founder @ DNSdaddy",
  ],
  address: "Chandigarh, India",
  phoneNumber: "KzkxODgwOTIyNDUzMQ==", // E.164 base64: +918809224531
  email: "a3VuZGFuc2luZ2gwMjMyMzBAZ21haWwuY29t", // base64: kundansingh023230@gmail.com
  website: "https://kundan.vercel.app",
  jobTitle: "Developer",
  jobs: [
    {
      title: "Developer",
      company: "Palisadoes Foundation",
      website: "https://www.palisadoes.org/",
    },
    {
      title: "Founder",
      company: "DNSdaddy",
      website: "https://dnsdaddy.in",
    },
  ],
  about: `Hello! I'm Kundan Kumar — a Full Stack Developer from Chandigarh, India, passionate about building scalable web applications and developer tools.

I'm currently a Software Engineer at AfterQuery (YC backed), contributing to a Y Combinator–backed AI research lab that builds high-quality human-generated datasets used to evaluate and stress-test advanced AI systems. I design multi-step command-line engineering tasks that simulate real-world development workflows, including debugging, refactoring, and build automation, and build reproducible, containerized environments using Docker.

I've also worked as a Full Stack Developer at Palisadoes Foundation (GSOC), where I developed and maintained modern, high-performance web applications using Next.js with server-side rendering and API routes, and integrated Redis for caching, session management, and real-time updates.

I'm the founder of **DNSdaddy** — India's first Subdomain Marketplace for Hackers and Builders. I engineered a scalable subdomain marketplace using Next.js (App Router) with SSR, integrated Vercel, Netlify, and Hostinger APIs for automated domain mapping, and used Drizzle ORM with PostgreSQL and Redis. The platform is currently powering 50+ domain listings and 1000+ active users, with CI/CD via GitHub Actions, Docker, and Kubernetes.

I've built **TweetXAgent** — an AI-powered viral tweet generator and engagement booster — with a multi-model AI pipeline using LLMs (OpenAI, Claude, Gemini, DeepSeek), a tiered subscription model with Razorpay, and an intuitive UI.

I'm pursuing a B.E. in Computer Science at Chandigarh University (2022–2026) and have achieved Top 5 in IIT Delhi Xtream Hackathon 2023, Top 5 in HackWars at Chandigarh University 2023, and 2nd Position in PEC Chandigarh Hackathon 2022. I've also published an npm package with 1K+ downloads.

Let's connect!`,
  avatar: "/avatar.svg",
  ogImage: "/avatar.jpg",
  namePronunciationUrl: "",
  keywords: [
    "kundan kumar",
    "kundan",
    "dnsdaddy",
    "palisadoes",
    "afterquery",
    "full stack developer",
    "chandigarh",
    "india",
  ],
  dateCreated: "2023-10-20",
};
