
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUp, ArrowUpRight } from "lucide-react";

const projects = {
  wigology: {
    title: "The Wigology",
    category: "Web Development · Personalisation",
    status: "In Progress",
    description:
      "A personalised hair discovery and customisation platform.",
    overview:
      "The Wigology combines technology, personalisation and hair education. I began by building a Python and Streamlit prototype, which has been published. I'm now developing a full Next.js website that allows visitors to explore hair characteristics, discover products and customise their ideal wig.",
    technologies: [
      "Python",
      "Streamlit",
      "Next.js",
      "TypeScript",
    ],
    progress: [
      "Developed the initial Python and Streamlit prototype",
      "Published the prototype",
      "Designed a personalised hair discovery experience",
      "Started developing the Next.js website",
    ],
  },

  "ai-preference-predictor": {
    title: "AI Response Preference Predictor",
    category: "Machine Learning · NLP",
    status: "Planned",
    description:
      "Exploring how machine learning can predict human preferences between AI-generated responses.",
    overview:
      "This planned project will explore how machine learning can be used to predict which response a person would prefer when comparing answers from two large language models. It is based on the Kaggle LLM Classification Finetuning competition.",
    technologies: [
      "Python",
      "pandas",
      "Machine Learning",
      "Natural Language Processing",
    ],
    progress: [
      "Selected the project topic",
      "Identified the Kaggle competition",
      "Planning the modelling approach",
    ],
  },
};

type ProjectSlug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in projects)) {
    notFound();
  }

  const project = projects[slug as ProjectSlug];

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-[#25252A]">
      <div className="mx-auto max-w-5xl">

        {/* BACK TO PORTFOLIO */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#A77F89] transition-colors hover:text-[#25252A]"
        >
          <ArrowLeft size={16} strokeWidth={1.8} aria-hidden="true" />
          Back to Projects
        </Link>

        {/* PROJECT HEADER */}
        <header className="mt-10">
          {slug === "wigology" ? (
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

              {/* LEFT: PROJECT INTRODUCTION */}
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#B58E98]">
                  Featured Project / 01
                </p>

                <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
                  The{" "}
                  <span className="text-[#B58E98]">
                    Wigology.
                  </span>
                </h1>

                <p className="mt-6 text-xl font-medium leading-relaxed text-[#25252A]">
                  Where hair intelligence meets
                  personalised technology.
                </p>

                <p className="mt-5 max-w-lg leading-8 text-[#6D6970]">
                  A personalised hair discovery and
                  customisation platform that combines
                  software development, hair education
                  and user experience.
                </p>

                {/* DEVELOPMENT STATUS */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#DCC9CE] bg-white px-4 py-2 text-xs font-medium text-[#9C7580]">
                    Streamlit Prototype · Published
                  </span>

                  <span className="rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-xs font-medium text-[#6D6970]">
                    Next.js Website · In Development
                  </span>
                </div>

                <a
                  href="#project-showcase"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#C6A3AA] px-6 py-3 text-sm font-semibold text-[#25252A] transition-colors hover:bg-[#D9B8C0]"
                >
                  Explore the Project
                  <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>

              {/* RIGHT: PROJECT SCREENSHOT */}
              <div className="relative overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white p-3 shadow-[0_15px_50px_rgba(37,37,42,0.06)]">
                <Image
                  src="/projects/wigology-home.png"
                  alt="The Wigology application homepage"
                  width={1644}
                  height={896}
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="h-auto w-full rounded-xl"
                />
              </div>
            </div>
          ) : (
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#A77F89]">
                {project.category}
              </p>

              <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-6xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-9 text-[#6D6970]">
                {project.description}
              </p>

              <span className="mt-7 inline-block rounded-full border border-[#E5E5E5] px-5 py-2 text-sm text-[#9C7580]">
                {project.status}
              </span>
            </div>
          )}
        </header>

        {/* PROJECT OVERVIEW */}
        <section className="mt-20 border-t border-[#EEEEEE] pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B58E98]">
            01 / Overview
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            About the Project
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-9 text-[#6D6970]">
            {project.overview}
          </p>
        </section>

        {/* TECHNOLOGIES */}
        <section className="mt-16 border-t border-[#EEEEEE] pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B58E98]">
            02 / Technology
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Technologies Used
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-[#E5E5E5] bg-white px-5 py-2 text-sm text-[#525057]"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* DEVELOPMENT JOURNEY */}
        <section className="mt-16 border-t border-[#EEEEEE] pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[#B58E98]">
            03 / Development
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Development Journey
          </h2>

          <div className="mt-8 space-y-5">
            {project.progress.map((step, index) => (
              <div
                key={step}
                className="flex items-start gap-5"
              >
                <span className="text-sm font-semibold text-[#B58E98]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-base leading-7 text-[#6D6970]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* WIGOLOGY-ONLY CONTENT */}
        {slug === "wigology" && (
          <>

            {/* PROJECT SHOWCASE */}
            <section
              id="project-showcase"
              className="mt-20 scroll-mt-12 border-t border-[#EEEEEE] pt-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#B58E98]">
                04 / Project Showcase
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                A look inside The Wigology.
              </h2>

              <p className="mt-6 max-w-3xl leading-8 text-[#6D6970]">
                A closer look at the application,
                from the homepage experience to the
                interactive Hair Intelligence feature.
              </p>

              {/* FIRST SCREENSHOT */}
              <div className="mt-12">
                <div className="overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white shadow-sm">
                  <Image
                    src="/projects/wigology-home.png"
                    alt="The Wigology homepage showing the mannequin and customisation options"
                    width={1644}
                    height={896}
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="h-auto w-full"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  The Wigology Homepage
                </h3>

                <p className="mt-3 max-w-3xl leading-8 text-[#6D6970]">
                  The homepage introduces the brand
                  and its approach to combining the
                  art and science of hair. Visitors
                  can begin customising their wig,
                  explore hair education or browse
                  the shopping experience.
                </p>
              </div>

              {/* SECOND SCREENSHOT */}
              <div className="mt-16">
                <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white shadow-sm">
                  <Image
                    src="/projects/wigology-hair-profile.png"
                    alt="Indian Wavy hair intelligence profile showing the wig and hair characteristics"
                    width={1183}
                    height={1273}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="h-auto w-full"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-semibold">
                  Hair Intelligence
                </h3>

                <p className="mt-3 max-w-3xl leading-8 text-[#6D6970]">
                  The Hair Intelligence feature
                  helps visitors understand the
                  characteristics of their selected
                  hair, including origin, texture,
                  strand feel and processing.

                  It also presents multiple viewing
                  options so users can explore
                  the hair from different angles.
                </p>
              </div>
            </section>

            {/* DEVELOPMENT STAGES */}
            <section className="mt-20 border-t border-[#EEEEEE] pt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B58E98]">
                05 / Building the Product
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                From Prototype to Product
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">

                {/* STREAMLIT STAGE */}
                <div className="rounded-2xl border border-[#EAEAEA] bg-white p-8">
                  <p className="text-xs uppercase tracking-widest text-[#B58E98]">
                    Stage 01
                  </p>

                  <h3 className="mt-5 text-xl font-semibold">
                    Streamlit Prototype
                  </h3>

                  <p className="mt-5 leading-8 text-[#6D6970]">
                    Built and published an initial
                    Python-based application to
                    explore the concept and test
                    customisation features.
                  </p>

                  <span className="mt-6 inline-block text-sm font-medium text-[#A77F89]">
                    Published Prototype
                  </span>
                </div>

                {/* NEXT.JS STAGE */}
                <div className="rounded-2xl border border-[#EAEAEA] bg-white p-8">
                  <p className="text-xs uppercase tracking-widest text-[#B58E98]">
                    Stage 02
                  </p>

                  <h3 className="mt-5 text-xl font-semibold">
                    Next.js Website
                  </h3>

                  <p className="mt-5 leading-8 text-[#6D6970]">
                    Developing a full website using
                    Next.js and TypeScript, focusing
                    on personalisation, product
                    discovery and user experience.
                  </p>

                  <span className="mt-6 inline-block text-sm font-medium text-[#A77F89]">
                    Currently in Development
                  </span>
                </div>
              </div>
            </section>

            {/* LIVE APP AND PERFORMANCE NOTE */}
            <section className="mt-20 border-t border-[#EEEEEE] pt-12">
              <p className="text-xs uppercase tracking-[0.2em] text-[#B58E98]">
                06 / Live Prototype
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Explore the Live Application
              </h2>

              <p className="mt-5 max-w-3xl leading-8 text-[#6D6970]">
                Explore the published Python and
                Streamlit prototype of The Wigology.
              </p>

              <a
                href="https://thewigology.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C6A3AA] px-7 py-3 text-sm font-semibold text-[#25252A] transition-colors hover:bg-[#D9B8C0]"
              >
                View Live App
                <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
              </a>

              <div className="mt-6 max-w-3xl border-l-2 border-[#DCC9CE] pl-4">
                <p className="text-sm leading-7 text-[#6D6970]">
                  <span className="font-semibold text-[#525057]">
                    Performance Note:
                  </span>{" "}
                  This prototype was built using Python
                  and Streamlit. Some page transitions
                  may be slower due to its rerun-based
                  architecture and limited hosting
                  resources. A transition to Next.js
                  is planned to improve performance
                  and user experience.
                </p>
              </div>
            </section>

          </>
        )}

        {/* FOOTER */}
        <footer className="mt-24 border-t border-[#EEEEEE] py-10">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <p className="text-sm text-[#8A858A]">
              Built with curiosity and intention.
            </p>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#A77F89] hover:text-[#25252A]"
            >
              Back to Portfolio
              <ArrowUp size={16} strokeWidth={1.8} aria-hidden="true" />
            </Link>
          </div>
        </footer>

      </div>
    </main>
  );
}
