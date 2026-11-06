
import Hero from "../../components/Hero";
import Skills from "../../components/Skills";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import ProjectCard, {
  type Project,
} from "../../components/ProjectCard";

const projects: Project[] = [
  {
    title: "The Wigology",
    category: "Web Development · Personalisation",
    status: "In Progress",
    description:
      "A personalised hair discovery and customisation platform, evolving from a published Python and Streamlit prototype into a full Next.js website.",
    slug: "wigology",
    number: "01",
    technologies: [
      "Python",
      "Streamlit",
      "Next.js",
      "TypeScript",
    ],
    preview: "wigology",
  },
  {
    title: "AI Response Preference Predictor",
    category: "Machine Learning · NLP",
    status: "Planned",
    description:
      "A planned machine learning project exploring how to predict human preferences between AI-generated responses.",
    slug: "ai-preference-predictor",
    number: "02",
    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
    ],
    preview: "ai",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#25252A]">

      {/* NAVIGATION */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-16 border-t border-[#EEEEEE] bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="portfolio-section-label">
            01 / About
          </p>

          <h2 className="portfolio-section-title">
            A little about me.
          </h2>

          <p className="portfolio-section-description">
            I'm an aspiring Data Scientist with a Higher
            Certificate in Software Development, currently
            in my second year of studying Data Science.
            My interests include Machine Learning,
            Artificial Intelligence, Generative AI
            and Web Development.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Python",
              "Machine Learning",
              "Next.js",
              "TypeScript",
              "Streamlit",
              "Data Analysis",
            ].map((skill) => (
              <span
                key={skill}
                className="portfolio-skill-tag rounded-full border border-[#E5E5E5] bg-white px-5 py-2"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <Skills />

      {/* PROJECTS */}
      <section
        id="projects"
        className="scroll-mt-16 border-t border-[#EEEEEE] bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <p className="portfolio-section-label">
            03 / Selected Work
          </p>

          <h2 className="portfolio-section-title">
            Projects & explorations.
          </h2>

          <p className="portfolio-section-description">
            A collection of ideas, experiments and
            applications I'm developing as I explore
            data science and software engineering.
          </p>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <Contact />

    </main>
  );
}
