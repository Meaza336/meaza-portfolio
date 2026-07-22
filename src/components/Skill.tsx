type SkillProps = {
  darkMode: boolean;
};
function Skills({ darkMode }: SkillProps) {
const frontend = [
  "⚛️ React",
  "🔷 TypeScript",
  "🎨 Tailwind CSS",
];

const backend = [
  "🟢 Node.js",
  "🚀 Express",
  "🔗 REST API",
];

const database = [
  "🗄️ SQL",
  "🍃 MongoDB",
];

const tools = [
  "🌿 Git",
  "🐙 GitHub",
  "💻 VS Code",
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

          <ul className="space-y-2">
            {frontend.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-2xl text-blue-600 font-semibold mb-4">
            Backend
          </h3>

          <ul className="space-y-2">
            {backend.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>

        {/* Database */}
        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-2xl text-blue-600 font-semibold mb-4">
            Database
          </h3>

          <ul className="space-y-2">
            {database.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>

        {/* Tools */}
        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-2xl text-blue-600 font-semibold mb-4">
            Tools
          </h3>

          <ul className="space-y-2">
            {tools.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;