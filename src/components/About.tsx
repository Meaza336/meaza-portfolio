type AboutProps = {
  darkMode: boolean;
};
function About({ darkMode }: AboutProps) {
  return (
    <section
      id="about"
        className={`px-8 py-20 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-gray-900"
  }`}
    >
      <h2 className="text-4xl font-bold mb-8">
        About Me
      </h2>

      <p className={`${ darkMode ? "text-gray-300" : "text-gray-600"}`}>
        I am a Full-Stack Developer passionate about
        building modern, responsive web applications
        using React, TypeScript, Node.js, and AI.
        I enjoy learning new technologies and creating
        software that solves real-world problems.
      </p>
    </section>
  );
}

export default About;