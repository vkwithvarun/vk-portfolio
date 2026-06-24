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
    skills: ["Spring Boot", "REST APIs", "MVC Architecture", "JWT Authentication", "Microservices"],
  },
  {
    cat: "Database",
    icon: "🗄️",
    color: "green",
    skills: ["MySQL", "MongoDB", "JDBC", "JPA / Hibernate", "Database Design"],
  },
  {
    cat: "Frontend",
    icon: "🌐",
    color: "purple",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    cat: "Dev Tools",
    icon: "🛠️",
    color: "gray",
    skills: ["Git", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
  },
  {
    cat: "Concepts",
    icon: "💡",
    color: "yellow",
    skills: ["API Design", "Prompt Engineering", "Layered Architecture", "Exception Handling"],
  },
];

const colorMap = {
  orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  blue:   "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  green:  "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
  purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  gray:   "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700",
  yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
};

const headerColorMap = {
  orange: "text-orange-500 dark:text-orange-400",
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
      className="py-24 px-4 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Technical Skills" subtitle="What I work with" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(group => (
            <div key={group.cat}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-5 hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{group.icon}</span>
                <h3 className={`font-bold text-base ${headerColorMap[group.color]}`}>
                  {group.cat}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${colorMap[group.color]}`}>
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
