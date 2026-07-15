function Skills() {
  const frontend = [
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
  ];

  const backend = [
    "Node.js",
    "Express",
    "REST API",
  ];

  const database = [
    "SQL",
    "MongoDB",
  ];

  const tools = [
    "Git",
    "GitHub",
    "VS Code",
  ];

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10">
        My Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Frontend */}
        <div className="border rounded-xl p-6 shadow">
          <h3 className="text-2xl font-semibold mb-4">
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
          <h3 className="text-2xl font-semibold mb-4">
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
          <h3 className="text-2xl font-semibold mb-4">
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
          <h3 className="text-2xl font-semibold mb-4">
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