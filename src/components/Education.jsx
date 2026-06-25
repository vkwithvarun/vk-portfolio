import SectionTitle from "./SectionTitle.jsx";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Nitte Meenakshi Institute of Technology, Bengaluru",
    year: "2022 – 2024",
    icon: "🎓",
    highlight: "Focused on Java, Software Engineering & Database Systems",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Vinoba Bhave University, Hazaribagh",
    year: "2019 – 2022",
    icon: "📚",
    highlight: "Core foundation in Programming, Networking & Web Development",
  },
];

const certifications = [
  {
    name: "Java Full Stack Developer",
    org: "X-Workz",
    icon: "☕",
    color: "orange",
  },
  {
    name: "Foundation of Cloud, IoT & Edge ML",
    org: "NPTEL",
    icon: "☁️",
    color: "blue",
  },
  {
    name: "Full Stack Web Development",
    org: "BHARAT INTERN",
    icon: "💻",
    color: "blue",
  },
];

// Map clean data identifiers to modern Tailwind border accent and tint styles
const accentMap = {
  orange: "border-l-orange-500 dark:border-l-orange-400 bg-orange-500/5",
  blue:   "border-l-blue-500 dark:border-l-blue-400 bg-blue-500/5",
};

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Blur Flairs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle title="Education" subtitle="My academic background" />

        {/* Interactive Vertical Timeline Layout */}
        <div className="relative border-l border-slate-200 dark:border-slate-800/80 ml-4 md:ml-6 my-16 space-y-12 pl-6 md:pl-8">
          {education.map((edu, i) => (
            <div
              key={i}
              className="group relative flex flex-col md:flex-row gap-2 items-start transition-all duration-300"
            >
              {/* Timeline Bullet Node Indicator */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-blue-500 shadow-sm group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 z-20">
                <div className="w-1 h-1 bg-transparent rounded-full group-hover:bg-white transition-colors duration-300" />
              </div>

              {/* Main Card Element */}
              <div className="w-full bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700/80 hover:-translate-y-0.5 transition-all duration-300 ease-out flex gap-5 items-start">
                {/* Floating Rounded Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-2xl shadow-inner group-hover:rotate-6 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  <span className="filter drop-shadow-sm">{edu.icon}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base tracking-wide group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5 font-medium">
                        {edu.school}
                      </p>
                    </div>
                    {/* Time pill tag */}
                    <span className="inline-block self-start text-xs font-bold px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full tracking-wider whitespace-nowrap shadow-sm">
                      {edu.year}
                    </span>
                  </div>
                  
                  {/* Highlight text layer */}
                  <p className="mt-4 text-xs text-slate-400 dark:text-slate-500 font-medium italic border-l-2 border-slate-200 dark:border-slate-800 pl-3">
                    {edu.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Block */}
        <div>
          <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-6 flex items-center gap-2.5 tracking-wide">
            <span className="text-xl">🏆</span> Certifications
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className={`group bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 border-l-4 ${accentMap[cert.color]} rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 ease-out`}
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-white dark:bg-slate-800 shadow-sm group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300 flex-shrink-0">
                  <span className="text-xl">{cert.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 dark:text-white text-sm tracking-wide truncate">
                    {cert.name}
                  </p>
                  <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold uppercase tracking-wider mt-0.5">
                    {cert.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}