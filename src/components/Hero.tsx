function Hero() {
  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

      {/* Left Side */}
      <div className="flex-1 flex flex-col gap-5">

        <p className="text-lg text-blue-600 font-semibold">
          👋 Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold">
          Meaza Abay
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-600">
          Full-Stack Developer & AI Engineer
        </h2>

        <p className="text-gray-500 max-w-xl leading-8">
          I build responsive web applications using React,
          TypeScript, Node.js and AI while continuously
          improving my software engineering skills.
        </p>

        <div className="flex gap-4">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
            Contact Me
          </button>

        </div>

      </div>

      {/* Right Side */}

      <div className="w-72 h-72 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold">

        Photo

      </div>

    </section>
  );
}

export default Hero;