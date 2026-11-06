
import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  slug: string;
  number: string;
  technologies: string[];
  preview: "wigology" | "ai";
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#EAEAEA] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A3AA] hover:shadow-lg"
    >
      <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-[#EEEEEE] bg-white p-3 sm:h-72">
        {project.preview === "wigology" ? (
          <Image
            src="/projects/wigology-home.png"
            alt="Screenshot of The Wigology website homepage"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full max-w-sm rounded-xl border border-[#E5E5E5] bg-white p-6">
            <p className="text-xs uppercase tracking-widest text-[#B58E98]">
              Machine Learning
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {["Response A", "Response B"].map(
                (response) => (
                  <div
                    key={response}
                    className="rounded-lg border border-[#EAEAEA] p-4"
                  >
                    <p className="text-xs text-[#6D6970]">
                      {response}
                    </p>
                    <div className="mt-4 h-2 rounded bg-[#EAEAEA]" />
                    <div className="mt-2 h-2 w-3/4 rounded bg-[#EAEAEA]" />
                  </div>
                )
              )}
            </div>

            <p className="mt-5 text-sm text-[#6D6970]">
              Predicting human response preferences.
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs uppercase tracking-wider text-[#B58E98]">
            {project.category}
          </p>

          <span className="text-xs text-[#A7A0A4]">
            {project.number}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#6D6970]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#EAEAEA] px-3 py-1.5 text-xs text-[#6D6970]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-8">
          <span className="rounded-full border border-[#E5E5E5] px-4 py-2 text-xs text-[#9C7580]">
            {project.status}
          </span>

          <span className="text-sm font-medium group-hover:text-[#B58E98]">
            Explore Project ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
