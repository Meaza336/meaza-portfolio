import ProjectCard from "./ProjectCard";
import {projects} from "../data/projects";
type ProjectsProps = {
  darkMode: boolean;
};

function Projects({ darkMode }: ProjectsProps) {
  return (
    <section
      id="projects"
      className={`px-8 py-20 transition-colors duration-300 ${ darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
}`}>
      <h2 className="text-4xl md:text-5xl mb-8 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {projects.map((project) => (
   <ProjectCard
    key={project.title}
    project={{...project, tech: Array.isArray(project.tech) ? project.tech : [project.tech]}}
  />
))}
</div>
    </section>
  );
}

export default Projects;