import React from "react";

export type Project = {
  slug: string;
  title: string;
  description: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.link}
        className="text-blue-600 hover:underline font-medium"
      >
        View Project →
      </a>
    </div>
  );
}
