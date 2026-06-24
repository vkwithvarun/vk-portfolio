import { useState } from "react";

const navLinks = ["Home", "About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("home")}
          className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity">
          VK.
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-gray-700 dark:text-gray-300">
              {link}
            </button>
          ))}
        </div>

        {/* Dark Toggle + Hamburger */}
        <div className="flex items-center gap-3">
          {/* Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-12 h-6 rounded-full relative bg-gray-300 dark:bg-blue-600 transition-colors duration-300 focus:outline-none"
            title={dark ? "Switch to Light" : "Switch to Dark"}>
            <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-all duration-300 ${dark ? "left-7" : "left-1"}`} />
            <span className="absolute left-1 top-0.5 text-xs leading-5">{dark ? "" : "☀️"}</span>
            <span className="absolute right-1 top-0.5 text-xs leading-5">{dark ? "🌙" : ""}</span>
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 text-xl"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm font-medium bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              className="text-left py-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
