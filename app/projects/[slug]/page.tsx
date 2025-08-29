import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../../../lib/projects";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";


export function generateStaticParams() {
return projects.map((p) => ({ slug: p.slug }));
}


export default function ProjectDetail({ params }: { params: { slug: string } }) {
const project = projects.find((p) => p.slug === params.slug);
if (!project) return notFound();


return (
<article className="grid md:grid-cols-[1.2fr,1fr] gap-8">
<div>
<h1 className="text-3xl font-bold mb-2">{project.title}</h1>
<p className="text-gray-600 mb-4">{project.description}</p>
<ul className="flex flex-wrap gap-2 text-xs text-gray-500 mb-6">
{project.stack.map((s, i) => (
  <li key={typeof s === "string" || typeof s === "number" ? s : i} className="px-2 py-1 rounded-full bg-gray-100 border border-gray-200">
	{s}
  </li>
))}
</ul>
<div className="flex gap-4">
{project.demo && (
<a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline" aria-label="Live demo">
Live Demo
</a>
)}
{project.repo && (
<a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:underline" aria-label="Source code on GitHub">
Code on GitHub
</a>
)}
<Link href="/projects" className="ml-auto hover:underline">← Back to projects</Link>
</div>
</div>
<div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-gray-200">
<Image src={project.image} alt={project.title} fill className="object-cover" />
</div>
</article>
);
}