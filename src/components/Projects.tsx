import ProjectCard from "./ProjectCard";
import {projects} from "../data/projects"

function Projects() {
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