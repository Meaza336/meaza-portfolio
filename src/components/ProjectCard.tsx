type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
};

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      <h3 className="text-2xl text-blue-600 font-bold">
        {project.title}
      </h3>

      <p className="text-gray-600 my-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
  {project.tech.map((item) => (
    <span
      key={item}
      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
    >
      {item}
    </span>
  ))}
</div>

      <div className="flex gap-4">
        <a
          href={project.github}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          GitHub
        </a>

        <a
          href={project.demo}
          className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;