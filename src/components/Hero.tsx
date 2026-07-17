import profile from "../assets/profile.jpg";
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">

        <p className="text-lg text-blue-600 font-medium">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Meaza Abay
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
          Full-Stack Developer & AI Engineer
        </h2>

        <p className="text-gray-600 leading-8">
          I build responsive web applications using React,
          TypeScript, Node.js and modern AI technologies.
          My goal is to create software that solves real-world
          problems.
        </p>

        <div className="flex gap-4">
          <a
  href="#projects"
  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
>
  View Projects
</a>

         <a
  href="#contact"
  className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
>
  Download
</a>
        </div>

      </div>

      <div className="w-72 h-72">
  <img
    src={profile}
    alt="Meaza Abay"
    className="w-full h-full rounded-full object-cover border-4 border-blue-500 shadow-xl"
  />
</div>
    </section>
  );
}

export default Hero;