
function Footer() {
  return (
    <footer className="border-t border-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-gray-400">
          © {new Date().getFullYear()} Meaza Abay Tessema. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/Meaza336"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/meaza-abay-241193246?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:meazatessema78@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
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