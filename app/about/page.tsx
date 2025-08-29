// FILE: app/about/page.tsx
export const metadata = { title: "About — Austin Amadi" };


export default function AboutPage() {
return (
<section className="prose prose-gray max-w-none">
<h1>About</h1>
<p>
I’m a full‑stack developer focused on building performant, delightful web applications. I specialize in
<strong> Next.js</strong>, <strong>React</strong>, and <strong>TypeScript</strong> with a strong eye for UI/UX.
</p>
<h2>Skills</h2>
<ul>
<li>Frontend: React, Next.js, Tailwind CSS, Framer Motion</li>
<li>Backend: Node.js, Express, Prisma, PostgreSQL</li>
<li>Tooling: Git, Vercel, Docker, CI/CD</li>
</ul>
</section>
);
}