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
  <div
    key={project.title}
    className="border rounded-xl p-6 shadow-lg"
  >
    <h3 className="text-2xl font-bold">
      {project.title}
    </h3>

    <p className="text-gray-600 my-4">
      {project.description}
    </p>

    <p className="text-blue-600 font-semibold mb-6">
      {project.tech}
    </p>

    <div className="flex gap-4">
      <a
        href={project.github}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        GitHub
      </a>

      <a
        href={project.demo}
        className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg"
      >
        Live Demo
      </a>
    </div>
  </div>
))}
</div>
    </section>
  );
}

export default Projects;