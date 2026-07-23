import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <footer className="border-t border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-400">
          © {new Date().getFullYear()} Meaza Tessema. All rights reserved.
        </p>

<div className="flex gap-6 text-2xl">
  <a href="https://github.com/Meaza336">
    <FaGithub />
  </a>

  <a href="https://www.linkedin.com/in/YOUR-LINKEDIN">
    <FaLinkedin />
  </a>

  <a href="mailto:meazatessema78@gmail.com">
    <FaEnvelope />
  </a>
</div>

        <p className="text-gray-500 text-sm">
          Built with React, TypeScript & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;