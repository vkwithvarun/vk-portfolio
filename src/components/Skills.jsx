import SectionTitle from "./SectionTitle.jsx";

const skillGroups = [
  {
    cat: "Programming",
    icon: "☕",
    color: "orange",
    skills: ["Java", "OOP", "Data Structures", "Collections", "Java 8", "Exception Handling", "SDLC"],
  },
  {
    cat: "Backend",
    icon: "⚙️",
    color: "blue",
    skills: ["Spring Boot", "Spring Cloud", "Spring WebFlux", "REST APIs", "MVC Architecture", "JWT Authentication", "OAuth2", "Microservices", "RabbitMQ", "Maven"],
  },
  {
    cat: "Database",
    icon: "🗄️",
    color: "green",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "JDBC", "JPA / Hibernate", "Database Design"],
  },
  {
    cat: "Frontend",
    icon: "🌐",
    color: "purple",
    skills: ["React", "Redux Toolkit", "JavaScript", "HTML", "CSS", "Tailwind CSS", "MUI"],
  },
  {
    cat: "Dev Tools",
    icon: "🛠️",
    color: "gray",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code", "Vite"],
  },
  {
    cat: "Concepts",
    icon: "💡",
    color: "yellow",
    skills: ["API Design", "Event-Driven Architecture", "Microservices Design", "Layered Architecture", "Service Discovery", "Prompt Engineering", "AI Integration"],
  },
];

// Re-imagined with sleek, semi-translucent glass tints instead of flat colors
const colorMap = {
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/10 hover:bg-orange-500/20",
  blue:   "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/10 hover:bg-blue-500/20",
  green:  "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/10 hover:bg-green-500/20",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/10 hover:bg-purple-500/20",
  gray:   "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/10 hover:bg-gray-500/20",
  yellow: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/10 hover:bg-yellow-500/20",
};

const headerColorMap = {
  orange: "text-orange-600 dark:text-orange-400",
  blue:   "text-blue-600 dark:text-blue-400",
  green:  "text-green-600 dark:text-green-400",
  purple: "text-purple-600 dark:text-purple-400",
  gray:   "text-gray-600 dark:text-gray-400",
  yellow: "text-yellow-600 dark:text-yellow-400",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Dynamic ambient lights behind content for a modern UI layer depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle title="Technical Skills" subtitle="What I work with" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillGroups.map((group) => (
            <div
              key={group.cat}
              className="group bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              {/* Header Layout */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 shadow-inner group-hover:scale-105 transition-transform duration-300">
                  <span className="text-xl filter drop-shadow-sm">{group.icon}</span>
                </div>
                <h3 className={`font-bold text-base tracking-wide ${headerColorMap[group.color]}`}>
                  {group.cat}
                </h3>
              </div>

              {/* Pill Tags Layout */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide border shadow-sm transition-all duration-200 cursor-default ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}