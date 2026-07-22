import profile from "../assets/profile.jpg";
type HeroProps = {
  darkMode: boolean;
};
function Hero({ darkMode }: HeroProps) {
  return (
    <section   className={`flex flex-col-reverse md:flex-row justify-between items-center gap-12 px-6 md:px-8 py-20 transition-colors duration-300 ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-gray-900"
  }`}>

      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">

        <p className="text-lg text-blue-600 font-medium">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Meaza Abay
        </h1>

        <h2 className={`${
  darkMode ? "text-blue-400" : "text-blue-600"}`}>
          Full-Stack Developer & AI Engineer
        </h2>

        <p  className={`${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}>
          I build responsive web applications using React,
          TypeScript, Node.js and modern AI technologies.
          My goal is to create software that solves real-world
          problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
  href="#projects"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
>
  View Projects
</a>

 <a href="/Meaza_Abay_CV.pdf" download className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
 Download CV
 </a>
        </div>

      </div>

   <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl">
  <img
    src={profile}
    alt="Meaza Abay"
    className="w-full h-full object-cover object-center"
  />
</div>
    </section>
  );
}

export default Hero;