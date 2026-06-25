import SectionTitle from "./SectionTitle.jsx";

const contacts = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    label: "Email",
    value: "vkvarun4401@gmail.com",
    href: "mailto:vkvarun4401@gmail.com",
    color: "red",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/vkwithvarun",
    href: "https://linkedin.com/in/vkwithvarun",
    color: "blue",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    label: "GitHub",
    value: "github.com/vkwithvarun",
    href: "https://github.com/vkwithvarun",
    color: "gray",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
      </svg>
    ),
    label: "Phone",
    value: "+91 8987440194",
    href: "tel:+918987440194",
    color: "green",
  },
];

const roles = [
  { label: "Java Backend Developer", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  { label: "Full Stack Developer",   color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
  { label: "Software Developer",     color: "bg-green-500/10 text-green-600 dark:text-green-400" },
  { label: "Frontend Developer",     color: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
];

// Modern UI Color mappings dynamically assigned on item hover
const themeMap = {
  red:   { text: "text-red-500",   hoverBg: "hover:bg-red-500/5 hover:border-red-500/30",   arrow: "group-hover:text-red-500" },
  blue:  { text: "text-blue-500",  hoverBg: "hover:bg-blue-500/5 hover:border-blue-500/30",   arrow: "group-hover:text-blue-500" },
  gray:  { text: "text-slate-800 dark:text-slate-200", hoverBg: "hover:bg-slate-500/5 hover:border-slate-500/30", arrow: "group-hover:text-slate-400" },
  green: { text: "text-emerald-500", hoverBg: "hover:bg-emerald-500/5 hover:border-emerald-500/30", arrow: "group-hover:text-emerald-500" },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual background atmospheric flair */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" />

        {/* Intro */}
        <p className="text-slate-500 dark:text-slate-400 text-base mb-8 max-w-xl mx-auto leading-relaxed font-medium">
          I'm actively looking for new opportunities. If you have a role or just want to connect, feel free to reach out!
        </p>

        {/* Role Tags */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {roles.map((role) => (
            <span
              key={role.label}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm cursor-default transition-all duration-200 hover:scale-105 ${role.color}`}
            >
              {role.label}
            </span>
          ))}
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contacts.map((c) => {
            const currentTheme = themeMap[c.color];
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className={`bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-5 flex items-center gap-4 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group ${currentTheme.hoverBg}`}
              >
                <div className={`flex-shrink-0 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 group-hover:scale-110 shadow-inner transition-transform duration-300 ${currentTheme.text}`}>
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 dark:text-white text-sm tracking-wide">
                    {c.label}
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-medium mt-0.5 break-all">
                    {c.value}
                  </p>
                </div>
                <span className={`ml-auto text-slate-300 dark:text-slate-700 transition-colors duration-300 text-lg font-bold ${currentTheme.arrow}`}>
                  →
                </span>
              </a>
            );
          })}
        </div>

        {/* Action Call to Action Button */}
        <a
          href="mailto:vkvarun4401@gmail.com"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold hover:from-blue-500 hover:to-indigo-500 active:scale-95 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 text-sm tracking-wide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Send Me an Email
        </a>

        <p className="mt-8 text-slate-400 dark:text-slate-500 text-xs font-semibold tracking-wider flex items-center justify-center gap-1.5 uppercase">
          <span>📍</span> Bengaluru, India &nbsp;•&nbsp; Open to remote &amp; on-site roles
        </p>
      </div>
    </section>
  );
}