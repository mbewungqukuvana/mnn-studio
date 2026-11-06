
const contactLinks = [
  {
    name: "GitHub",
    description: "Explore my code and projects",
    href: "https://github.com/mbewungqukuvana",
    action: "View GitHub ↗",
  },
  {
    name: "LinkedIn",
    description: "Connect with me professionally",
    href: "https://www.linkedin.com/in/mbewukazi-nozipho-ngqukuvana-a9735b3b0",
    action: "View LinkedIn ↗",
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 border-t border-[#EEEEEE] bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <p className="portfolio-section-label">
          04 / Contact
        </p>

        <h2 className="portfolio-section-title">
          Let's connect.
        </h2>

        <p className="portfolio-section-description">
          I'm always interested in learning opportunities,
          meaningful projects and connecting with people
          working in data science, artificial intelligence
          and technology.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {contactLinks.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#EAEAEA] bg-white p-8 transition-all duration-300 hover:border-[#DCC9CE] hover:shadow-[0_12px_35px_rgba(37,37,42,0.05)]"
            >
              <h3 className="portfolio-card-title">
                {contact.name}
              </h3>

              <p className="portfolio-card-description mt-3">
                {contact.description}
              </p>

              <p className="mt-7 text-sm font-medium text-[#A77F89] transition-colors group-hover:text-[#25252A]">
                {contact.action}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-[#EEEEEE] pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-[#8A858A]">
            Built with curiosity and intention.
          </p>

          <p className="text-sm text-[#8A858A]">
            © {new Date().getFullYear()} MNN.
          </p>
        </div>

      </div>
    </footer>
  );
}
