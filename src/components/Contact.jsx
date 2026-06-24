import SectionTitle from "./SectionTitle.jsx";

const contacts = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    iconColor: "text-red-500",
    label: "Email",
    value: "vkvarun4401@gmail.com",
    href: "mailto:vkvarun4401@gmail.com",
    color: "hover:border-red-400 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-900/10",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    iconColor: "text-blue-600",
    label: "LinkedIn",
    value: "linkedin.com/in/varun",
    href: "https://linkedin.com/in/varun",
    color: "hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    iconColor: "text-gray-800 dark:text-gray-200",
    label: "GitHub",
    value: "github.com/varun",
    href: "https://github.com/varun",
    color: "hover:border-gray-500 dark:hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    iconColor: "text-green-500",
    label: "Phone",
    value: "+91 8987440194",
    href: "tel:+918987440194",
    color: "hover:border-green-400 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/10",
  },
];

const roles = [
  { label: "Java Backend Developer", color: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" },
  { label: "Full Stack Developer",   color: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300" },
  { label: "Software Developer",     color: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300" },
  { label: "Frontend Developer",     color: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />

        {/* Intro */}
        <p className="text-gray-500 dark:text-gray-400 text-base mb-6 max-w-xl mx-auto leading-relaxed">
          I'm actively looking for new opportunities. If you have a role or just want to connect, feel free to reach out!
        </p>

        {/* Role Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {roles.map(role => (
            <span key={role.label}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold ${role.color}`}>
              {role.label}
            </span>
          ))}
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {contacts.map((c) => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
              className={`bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 flex items-center gap-4 text-left transition-all duration-200 ${c.color} hover:shadow-md group`}>
              <div className={`flex-shrink-0 group-hover:scale-110 transition-transform duration-200 ${c.iconColor}`}>
                {c.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{c.label}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 break-all">{c.value}</p>
              </div>
              <span className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-blue-400 transition-colors text-lg">→</span>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="mailto:vkvarun4401@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 active:scale-95 transition-all shadow-lg hover:shadow-blue-500/30 text-base">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Send Me an Email
        </a>

        <p className="mt-6 text-gray-400 dark:text-gray-600 text-sm">
          📍 Bengaluru, India &nbsp;•&nbsp; Open to remote &amp; on-site roles
        </p>
      </div>
    </section>
  );
}