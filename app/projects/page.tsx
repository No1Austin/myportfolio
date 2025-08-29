import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../lib/projects";


export const metadata = { title: "Projects — Austin Amadi" };


export default async function ProjectsPage() {
// Server component rendering static data (SSR/SSG)
return (
<section>
<h1 className="text-3xl font-bold mb-6">Projects</h1>
<div className="grid md:grid-cols-2 gap-6">
{projects.map((p) => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
</section>
);
}