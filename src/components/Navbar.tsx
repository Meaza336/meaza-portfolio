import { useState } from "react"; 
function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <nav className="sticky top-0 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-blue-600">
          Meaza
        </h1>

        <ul className="flex gap-8 font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-600 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-600 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>

        <button onClick={() => setDarkMode(!darkMode)} className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

      </div>
    </nav>
  );
}

export default Navbar;