import SectionTitle from "./SectionTitle.jsx";

const experiences = [
  {
    role: "Process Associate — AI Workflow & Automation",
    company: "Han Digital Solution P Ltd",
    period: "Mar 2026 – May 2026",
    type: "Contract / Freelance",
    typeColor: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    dotColor: "bg-blue-600 dark:bg-blue-400",
    points: [
      "Designed and optimized prompts for AI-driven systems to improve output accuracy",
      "Improved response quality through iterative prompt refinement and testing",
      "Utilized AI tools to automate workflows and enhance operational efficiency",
    ],
  },
  {
    role: "App Developer Intern",
    company: "Bharat Intern",
    period: "Feb 2024 – Mar 2024",
    type: "Internship",
    typeColor: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
    dotColor: "bg-purple-500 dark:bg-purple-400",
    points: [
      "Developed UI components using React and integrated them with backend services",
      "Assisted in debugging issues and improving application performance",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Experience" subtitle="Where I've worked" />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Dot */}
                <div className={`absolute left-2.5 md:left-4 top-5 w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${exp.dotColor}`} />

                {/* Card */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-1.5">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${exp.typeColor}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-gray-600 dark:text-gray-300">
                        <span className="text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
