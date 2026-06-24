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
    color: "border-l-orange-400",
  },
  {
    name: "Foundation of Cloud, IoT & Edge ML",
    org: "NPTEL",
    icon: "☁️",
    color: "border-l-blue-400",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Education" subtitle="My academic background" />

        {/* Education Cards */}
        <div className="space-y-5 mb-14">
          {education.map((edu, i) => (
            <div key={i}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start">
              <div className="text-4xl flex-shrink-0">{edu.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base">{edu.degree}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-0.5">{edu.school}</p>
                  </div>
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 whitespace-nowrap">
                    {edu.year}
                  </span>
                </div>
                <p className="mt-2 text-xs text-gray-400 dark:text-gray-500 italic">{edu.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-5 flex items-center gap-2">
            🏆 Certifications
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div key={i}
                className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 border-l-4 ${cert.color} rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow`}>
                <span className="text-3xl">{cert.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">{cert.name}</p>
                  <p className="text-gray-400 dark:text-gray-500 text-xs mt-0.5">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
