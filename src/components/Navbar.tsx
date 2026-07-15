function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

      <h1 className="text-2xl font-bold text-blue-600">
        Meaza
      </h1>

      <ul className="flex gap-8 font-medium">

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;