import SectionTitle from "./SectionTitle.jsx";

const stats = [
  { value: "15+", label: "REST APIs Built" },
  { value: "2",   label: "Full-Stack Projects" },
  { value: "2+",  label: "Years of Coding" },
  { value: "2",   label: "Certifications" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="About Me" subtitle="Who I am and what I do" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5 text-base">
              I'm an MCA graduate from{" "}
              <span className="font-semibold text-gray-800 dark:text-white">Nitte Meenakshi Institute of Technology, Bengaluru</span>,
              with a strong focus on Java backend development. I specialize in building RESTful APIs
              using Spring Boot and have hands-on experience with database design, JWT authentication,
              and microservice architecture.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
              Previously worked as a <span className="font-semibold text-blue-600 dark:text-blue-400">Process Associate</span> at
              Han Digital Solution on a 2-month contract. I actively develop projects and am seeking a full-time{" "}
              <span className="font-semibold text-gray-800 dark:text-white">Java Backend Developer</span> role
              where I can build and scale real-world systems.
            </p>

            {/* Key traits */}
            <div className="flex flex-wrap gap-2">
              {["Problem Solver", "Quick Learner", "Team Player", "Backend Focused"].map(tag => (
                <span key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(stat => (
              <div key={stat.label}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 text-center shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
