import { useState, useEffect } from "react";

const roles = [
  "Java Backend Developer",
  "Full Stack Developer",
  "Software Developer",
  "Frontend Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">

        {/* Avatar */}
        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl ring-4 ring-blue-100 dark:ring-blue-900">
          VK
        </div>

        {/* MCA Badge */}
        <p className="text-gray-400 dark:text-gray-500 font-medium text-xs tracking-widest uppercase mb-2">
          MCA Graduate
        </p>

        {/* Rotating Role */}
        <div className="h-8 mb-3 flex items-center justify-center">
          <span
            style={{ transition: "opacity 0.4s ease", opacity: fade ? 1 : 0 }}
            className="text-blue-600 dark:text-blue-400 font-bold text-sm tracking-widest uppercase">
            {roles[roleIndex]}
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-white">
          Varun Kumar{" "}
          <span className="text-blue-600 dark:text-blue-400">Mehta</span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Building scalable backend systems with{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">Spring Boot</span> &amp; REST APIs.
          Worked on AI-driven workflows at{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">Han Digital Solution</span> on a short-term contract.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <a href="mailto:vkvarun4401@gmail.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            Hire Me
          </a>
          <button onClick={() => scrollTo("projects")}
            className="px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
            View Projects
          </button>
          <a href="https://github.com/vkwithvarun" target="_blank" rel="noreferrer"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
            GitHub
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 dark:text-gray-500">
          <span className="flex items-center gap-1.5">📍 Bengaluru, India</span>
          <span className="flex items-center gap-1.5">📧 vkvarun4401@gmail.com</span>
          <span className="flex items-center gap-1.5">📱 +91 8987440194</span>
        </div>

        {/* Scroll Hint */}
        <div className="mt-14 animate-bounce text-gray-400 dark:text-gray-600 text-2xl">↓</div>
      </div>
    </section>
  );
}