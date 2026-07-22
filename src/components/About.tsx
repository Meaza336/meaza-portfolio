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
      <h2 className="text-4xl md:text-5xl mb-8 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        About Me
      </h2>

      <p className={`${ darkMode ? "text-gray-300" : "text-gray-600"}`}>
        I'm Meaza, a passionate Full-Stack Developer and AI Engineering student from
  Ethiopia. I enjoy building modern, responsive web applications using React,
  TypeScript, Node.js, Express, and MongoDB.
   <br />
  <br />

  I love solving real-world problems through technology and continuously
  improving my skills by building practical projects. My current focus is
  full-stack development, artificial intelligence, and creating applications
  that deliver meaningful user experiences.

  <br />
  <br />

  I'm actively seeking opportunities to collaborate on exciting projects,
  contribute to innovative teams, and grow as a software engineer while
  delivering high-quality solutions.
      </p>
    </section>
  );
}

export default About;