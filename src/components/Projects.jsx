import SectionTitle from "./SectionTitle.jsx";

const projects = [
  {
    title: "AI-Integrated Fitness Microservices Platform",
    emoji: "🏋️",
    desc: "Event-driven microservices system with 6 Spring Boot services, async AI workout recommendations via Google Gemini, and Keycloak OAuth2 authentication.",
    tech: ["Spring Boot", "Spring Cloud", "RabbitMQ", "MongoDB", "PostgreSQL", "Keycloak", "React", "Gemini API"],
    techColor: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    points: [
      "Built 6-service Spring Cloud architecture with Eureka service discovery and centralized Config Server",
      "Designed async AI pipeline — activity data published to RabbitMQ triggers Google Gemini LLM for personalized workout recommendations",
      "Secured all routes via Spring Cloud Gateway with OAuth2 JWT validation and Keycloak PKCE integration",
      "Built custom Gateway WebFilter to auto-sync Keycloak identity into PostgreSQL on first login",
      "Dual database design — PostgreSQL for user identity, MongoDB for activities and AI recommendations",
      "React frontend with Redux auth state, Axios interceptors, and smart polling for async AI results",
    ],
    github: "https://github.com/vkwithvarun",
    badge: "Microservices",
    badgeColor: "bg-blue-600",
  },
  {
    title: "Blog Management System",
    emoji: "📝",
    desc: "Full-stack blog application with user authentication, CRUD operations, and dynamic MongoDB-backed data storage.",
    tech: ["Node.js", "MongoDB", "REST APIs", "JavaScript"],
    techColor: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300",
    points: [
      "Built full-stack application with user authentication and blog CRUD functionality",
      "Designed REST APIs for creating, updating, and deleting blog posts",
      "Managed dynamic data storage using MongoDB collections",
    ],
    github: "https://github.com/vkwithvarun/Blog_WebSite",
    badge: "Full Stack",
    badgeColor: "bg-green-600",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Projects" subtitle="What I've built" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title}
              className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 flex flex-col">

              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{project.emoji}</span>
                    <div>
                      <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-md ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mt-1 leading-snug">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-gray-200 dark:bg-gray-800 mx-6" />

              {/* Points */}
              <div className="p-6 pt-4 flex-1">
                <h4 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.points.map((point, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <span className="text-blue-500 mt-0.5 flex-shrink-0">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 pt-2">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t}
                      className={`px-2.5 py-0.5 rounded-lg text-xs font-medium ${project.techColor}`}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  🐙 View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
