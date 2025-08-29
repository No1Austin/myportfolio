export type Project = {
title: string;
slug: string;
description: string;
image: string;
stack: string[];
repo?: string;
demo?: string;
};


export const projects: Project[] = [
{
title: "E‑commerce Storefront",
slug: "ecommerce-storefront",
description: "High‑performance Next.js storefront with shopping cart and Stripe checkout.",
image: "/proj1.png",
stack: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
repo: "https://github.com/yourusername/ecommerce",
demo: "https://ecommerce-demo.example.com",
},
{
title: "SaaS Dashboard",
slug: "saas-dashboard",
description: "Analytics dashboard with charts, auth, and role‑based access.",
image: "/proj2.png",
stack: ["Next.js", "Postgres", "Prisma", "Recharts"],
repo: "https://github.com/yourusername/saas-dashboard",
demo: "https://saas-demo.example.com",
},
{
title: "AI Blog Generator",
slug: "ai-blog-generator",
description: "Generate SEO‑friendly posts from prompts. Drafts, previews, and publishing.",
image: "/proj3.png",
stack: ["Next.js", "OpenAI", "Supabase"],
repo: "https://github.com/yourusername/ai-blog",
demo: "https://ai-blog-demo.example.com",
},
];