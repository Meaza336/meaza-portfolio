import { FaBars } from "react-icons/fa";
import { useState } from "react";
type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
function Navbar( { darkMode, setDarkMode }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={`sticky top-0 shadow-md transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1  className={`text-2xl font-bold ${
          darkMode ? "text-blue-400" : "text-blue-600"}`}>
          Meaza
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#about" className={`transition hover:text-blue-500 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" className={`transition hover:text-blue-500 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className={`transition hover:text-blue-500 ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className={`transition hover:text-blue-500 ${ darkMode ? "text-gray-200" : "text-gray-700"}`}>
              Contact
            </a>
          </li>
        </ul>
        <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden text-2xl"
>
  <FaBars />
</button>
        <button onClick={() => setDarkMode(!darkMode)} className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          {darkMode ?  "🌙 Dark" : "☀️ Light" }
          </button>

      </div>
    </nav>
  );
}

export default Navbar;