import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "A responsive portfolio website built with React, TypeScript and Tailwind CSS.",
      tech: "React • TypeScript • Tailwind CSS",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager",
      description:
        "A full-stack task management application with user authentication.",
      tech: "React • Node.js • Express • MongoDB",
      github: "#",
      demo: "#",
    },
    {
      title: "AI Chat App",
      description:
        "An AI-powered chatbot built using OpenAI APIs and React.",
      tech: "React • Node.js • AI",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {projects.map((project) => (
   <ProjectCard
    key={project.title}
    project={project}
  />
))}
</div>
    </section>
  );
}

export default Projects;