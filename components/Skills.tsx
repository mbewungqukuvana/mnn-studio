
const skillGroups = [
  {
    number: "01",
    title: "Programming & Web Development",
    description:
      "Technologies applied in personal projects.",
    skills: [
      "Python",
      "Streamlit",
      "Next.js",
      "TypeScript",
    ],
  },
  {
    number: "02",
    title: "Data Science & Analysis",
    description:
      "Foundational skills developed through coursework and practice.",
    skills: [
      "pandas",
      "Data Preparation",
      "Exploratory Data Analysis",
      "Jupyter Notebook",
    ],
  },
  {
    number: "03",
    title: "Machine Learning",
    description:
      "Concepts explored through learning exercises.",
    skills: [
      "Linear Regression",
      "Classification",
      "K-Nearest Neighbours",
      "Model Evaluation",
    ],
  },
  {
    number: "04",
    title: "Development Tools",
    description:
      "Tools used to build and manage projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-16 border-t border-[#EEEEEE] bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <p className="portfolio-section-label">
          02 / Technical Skills
        </p>

        <h2 className="portfolio-section-title">
          My technical toolkit.
        </h2>

        <p className="portfolio-section-description">
          A growing collection of technologies and concepts
          I've developed through personal projects,
          academic coursework and independent exploration.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-[#EAEAEA] bg-white p-8 transition-all duration-300 hover:border-[#DCC9CE] hover:shadow-[0_12px_35px_rgba(37,37,42,0.05)]"
            >
              <p className="text-xs font-medium tracking-[0.2em] text-[#B58E98]">
                {group.number}
              </p>

              <h3 className="portfolio-card-title mt-5">
                {group.title}
              </h3>

              <p className="portfolio-card-description mt-3">
                {group.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="portfolio-skill-tag rounded-full border border-[#E5E5E5] bg-[#FCFAFB] px-4 py-2"
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
