import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
type SkillProps = {
  darkMode: boolean;
};
function Skills({ darkMode }: SkillProps) {
const frontend = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const backend = [
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "REST API", icon: FaDatabase }, // Placeholder icon
];

const database = [
  { name: "SQL", icon: FaDatabase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "posgreSQL", icon: FaDatabase}
];

const tools = [
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "VS Code", icon: FaCode }
];

  return (
    <section
      id="skills"
      className={` px-8 py-20 transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-10">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Frontend */}
        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-2xl text-blue-600 font-semibold mb-4">
            Frontend
          </h3>

          {frontend.map((skill) => {
  const Icon = skill.icon;

  return (
    <li key={skill.name} className="flex items-center gap-3">
      <Icon className="text-blue-500 text-xl" />
      <span>{skill.name}</span>
    </li>
  );
})}
        </div>

        {/* Backend */}
        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-2xl text-blue-600 font-semibold mb-4">
            Backend
          </h3>

        {backend.map((skill) => {
  const Icon = skill.icon;

  return (
    <li key={skill.name} className="flex items-center gap-3">
      <Icon className="text-blue-500 text-xl" />
      <span>{skill.name}</span>
    </li>
  );
})}
        </div>

        {/* Database */}
        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-2xl text-blue-600 font-semibold mb-4">
            Database
          </h3>

        {database.map((skill) => {
  const Icon = skill.icon;

  return (
    <li key={skill.name} className="flex items-center gap-3">
      <Icon className="text-blue-500 text-xl" />
      <span>{skill.name}</span>
    </li>
  );
})}
        </div>

        {/* Tools */}
        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-2xl text-blue-600 font-semibold mb-4">
            Tools
          </h3>

       {tools.map((skill) => {
  const Icon = skill.icon;

  return (
    <li key={skill.name} className="flex items-center gap-3">
      <Icon className="text-blue-500 text-xl" />
      <span>{skill.name}</span>
    </li>
  );
})}
        </div>

      </div>
    </section>
  );
}

export default Skills;