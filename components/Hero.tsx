
import Image from "next/image";
import portrait from "../public/portrait.jpg";
import ContourBackground from "./ContourBackground";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white text-[#25252A]">

      {/* INTERACTIVE DATA GRID */}
      <ContourBackground />

      {/* MAIN HERO */}
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 lg:min-h-[780px] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

        {/* INTRODUCTION */}
        <div className="relative z-10">

          <p className="hero-animate hero-delay-1 mb-7 text-xs font-medium uppercase tracking-[0.3em] text-[#A77F89] sm:text-sm">
            Aspiring Data Scientist
          </p>

          {/* ANIMATED NAME */}
          <h1 className="hero-animate hero-delay-2 text-[clamp(2.7rem,4.3vw,4.5rem)] font-semibold leading-[1.12] tracking-[-0.045em]">
            Mbewukazi Nozipho
            <span className="block text-[#B58E98]">
              Ngqukuvana.
            </span>
          </h1>

          {/* HEADLINE */}
          <h2 className="hero-animate hero-delay-3 mt-9 max-w-xl text-xl font-medium leading-snug md:text-2xl">
            Beyond the data, there are endless possibilities.
          </h2>

          {/* INTRODUCTION TEXT */}
          <p className="hero-animate hero-delay-4 mt-6 max-w-xl text-base leading-8 text-[#6D6970]">
            I'm passionate about understanding how things
            work and discovering what technology makes
            possible. What fascinates me most about coding
            is the freedom to create, experiment and bring
            ideas to life. I'm driven by the belief that
            code can turn imagination into something real.
          </p>

          {/* BUTTONS */}
          <div className="hero-animate hero-delay-5 mt-9 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#C6A3AA] px-7 py-3.5 text-sm font-semibold text-[#25252A] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D9B8C0]"
            >
              Explore My Work ↗
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-[#D8D1D3] bg-white px-7 py-3.5 text-sm font-medium transition-colors hover:border-[#B58E98] hover:text-[#B58E98]"
            >
              About Me
            </a>

          </div>
        </div>

        {/* PORTRAIT */}
        <div className="hero-animate-portrait hero-delay-4 relative mx-auto mt-8 w-full max-w-[340px] sm:max-w-[390px] lg:mt-0 lg:ml-auto lg:max-w-[410px]">

          {/* DECORATIVE BORDER */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-3 rounded-[2rem] border border-[#DCC9CE]"
          />

          {/* PHOTO WITHOUT CROPPING */}
          <div className="relative overflow-hidden rounded-[1.5rem] bg-white">

            <Image
              src={portrait}
              alt="Professional portrait of Mbewukazi Nozipho Ngqukuvana"
              priority
              placeholder="blur"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 390px, 410px"
              className="block h-auto w-full"
            />

          </div>

        </div>
      </div>
    </section>
  );
}
