
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ContourBackground from "./ContourBackground";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <ContourBackground />
      </div>

      {/* HERO CONTENT */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:gap-16 lg:py-32">

        {/* LEFT SIDE */}
        <div className="relative z-10">
          <p className="hero-animate hero-delay-1 mb-8 text-xs font-medium uppercase tracking-[0.3em] text-[#B58E98]">
            Aspiring Data Scientist
          </p>

          <h1 className="hero-animate hero-delay-2 text-5xl font-bold leading-[1.08] tracking-tight text-[#25252A] sm:text-6xl lg:text-[68px]">
            Mbewukazi
            <br />
            Nozipho
            <br />
            <span className="text-[#B58E98]">
              Ngqukuvana.
            </span>
          </h1>

          <h2 className="hero-animate hero-delay-3 mt-10 max-w-xl text-xl font-medium leading-relaxed text-[#25252A] md:text-2xl">
            Beyond the data, there are endless possibilities.
          </h2>

          <p className="hero-animate hero-delay-4 mt-7 max-w-xl text-base leading-9 text-[#6D6970]">
            I'm passionate about understanding how things work
            and discovering what technology makes possible.
            What fascinates me most about coding is the freedom
            to create, experiment and bring ideas to life.
            I'm driven by the belief that code can turn
            imagination into something real.
          </p>

          <div className="hero-animate hero-delay-5 mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A5AD] px-7 py-4 text-sm font-semibold text-[#25252A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B58E98] hover:shadow-lg"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

            <Link
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[#DED5D8] bg-white px-7 py-4 text-sm font-medium text-[#25252A] transition-all duration-300 hover:border-[#B58E98] hover:bg-[#FCFAFB]"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - PORTRAIT */}
        <div className="hero-animate-portrait relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-[32px] border border-[#E8D8DC] bg-white p-3 shadow-[0_20px_60px_rgba(37,37,42,0.06)]">
            <div className="overflow-hidden rounded-[24px] bg-[#F5F1F2]">
              <Image
                src="/portrait.jpg"
                alt="Portrait of Mbewukazi Nozipho Ngqukuvana"
                width={900}
                height={1200}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
