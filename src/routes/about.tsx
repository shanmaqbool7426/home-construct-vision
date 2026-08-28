import { createFileRoute } from "@tanstack/react-router";

import heroExtension from "@/assets/hero-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "About Us — ARZ Construction Ltd | London's Trusted Design & Build Specialists";
const DESCRIPTION =
  "Established in 2011, ARZ Construction Ltd is a London-based design and build company specializing in extensions, loft conversions, and luxury home renovations. Fully insured, 10-year guarantee.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: About,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const companyStats = [
  { number: "15+", label: "Years Experience" },
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "10yr", label: "Structural Guarantee" },
];

const values = [
  {
    icon: "🏛️",
    title: "Architectural Excellence",
    description:
      "Every project begins with meticulous design. We combine traditional craftsmanship with contemporary innovation to create spaces that stand the test of time.",
  },
  {
    icon: "🤝",
    title: "Transparent Partnership",
    description:
      "Fixed-price quotes, weekly progress reports, and a dedicated project manager ensure you're informed and in control throughout your build journey.",
  },
  {
    icon: "🛡️",
    title: "Uncompromising Quality",
    description:
      "From structural steelwork to final finishes, we use only premium materials and accredited tradespeople. Every detail is inspected to meet our exacting standards.",
  },
  {
    icon: "⏱️",
    title: "On-Time Delivery",
    description:
      "Our track record speaks for itself. 95% of projects complete on schedule, with detailed timelines and proactive project management from day one.",
  },
];

const team = [
  {
    name: "Project Management",
    role: "Dedicated Project Manager",
    description:
      "Your single point of contact from initial consultation to handover. Ensures timelines, budgets, and quality standards are met at every phase.",
  },
  {
    name: "Design Team",
    role: "Architects & Designers",
    description:
      "Experienced in residential extensions, loft conversions, and full renovations. Creates designs that maximize space, light, and architectural harmony.",
  },
  {
    name: "Structural Engineers",
    role: "Chartered Engineers",
    description:
      "Handles all structural calculations, steelwork specifications, and building regulations approvals. Ensures your project is safe and compliant.",
  },
  {
    name: "Skilled Tradespeople",
    role: "Accredited Specialists",
    description:
      "Our network of carpenters, electricians, plumbers, and finishers are all vetted, insured, and committed to delivering exceptional craftsmanship.",
  },
];

const certifications = [
  "Federation of Master Builders (FMB)",
  "TrustMark Registered",
  "Gas Safe Registered",
  "NICEIC Approved Contractors",
  "CHAS Accredited",
  "Constructionline Certified",
];

function About() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>London Design & Build Specialists · Fixed-Price Guaranteed Quotes</span>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand-2/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/">
            <ArzLogo size="md" theme="light" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-ink/80 md:flex">
            <a className="transition-colors hover:text-amber" href="/">
              Home
            </a>
            <a className="transition-colors hover:text-amber" href="/services">
              Services
            </a>
            <a className="transition-colors hover:text-amber" href="/projects">
              Projects
            </a>
            <a className="transition-colors hover:text-amber" href="/reviews">
              Reviews
            </a>
            <a className="transition-colors hover:text-amber" href="/contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex rounded-full border border-ink/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-sand-2"
              href={`tel:+44${PHONE.slice(1)}`}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              className="rounded-full bg-amber px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-copper hover:shadow-lg hover:-translate-y-0.5"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              About ARZ Construction
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Building London's Finest Homes Since 2011
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              We are a family-run design and build company with an unwavering commitment to
              craftsmanship, transparency, and client satisfaction. Every project we undertake is a
              testament to our passion for creating exceptional living spaces.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY STATS */}
      <section className="border-y border-ink/10 bg-white py-12">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-amber md:text-5xl">{stat.number}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
                Our Story
              </p>
              <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
                From Vision to Reality: The ARZ Journey
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/75">
                <p>
                  Founded in 2011, ARZ Construction Ltd began with a simple mission: to transform
                  the way London homeowners approach building projects. Tired of the industry's
                  reputation for delays, hidden costs, and poor communication, we set out to create
                  a different kind of construction company.
                </p>
                <p>
                  Over the past 15 years, we've completed more than 500 projects across London and
                  the Home Counties — from modest bathroom refurbishments to ambitious whole-house
                  renovations and architectural extensions. Each project has strengthened our
                  commitment to quality, transparency, and client care.
                </p>
                <p>
                  Today, we're proud to be one of London's most trusted design and build specialists,
                  with a team of dedicated project managers, architects, and skilled tradespeople who
                  share our passion for excellence.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="luxury-card overflow-hidden rounded-2xl">
                <img
                  src={heroExtension}
                  alt="Modern house extension designed and built by ARZ Construction"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 luxury-card rounded-2xl p-6 max-w-[240px]">
                <p className="font-serif text-3xl font-bold text-amber">15+</p>
                <p className="mt-1 text-sm font-semibold text-ink/80">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="border-t border-ink/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              What Drives Us
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-base text-ink/70">
              The principles that guide every decision we make and every project we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {values.map((value, idx) => (
              <div key={value.title} className="luxury-card overflow-hidden rounded-2xl group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={
                      idx === 0
                        ? heroExtension
                        : idx === 1
                          ? kitchenRenovation
                          : idx === 2
                            ? loftConversion
                            : bathroomRenovation
                    }
                    alt={value.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 backdrop-blur-md text-3xl shadow-lg">
                    {value.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-ink">{value.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/75">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              The People Behind ARZ
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Meet Your Project Team
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Every project is supported by a dedicated team of specialists committed to your
              success.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="luxury-card rounded-2xl p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber/10 font-serif text-2xl font-bold text-amber">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-ink">{member.name}</h3>
                    <p className="text-sm font-semibold uppercase tracking-wider text-amber">
                      {member.role}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-relaxed text-ink/75">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-t border-ink/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Accredited & Approved
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Industry Certifications
            </h2>
            <p className="mt-4 text-base text-ink/70">
              We maintain the highest industry standards and accreditations for your peace of mind.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="luxury-card rounded-2xl p-8">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-ink/85">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Let's discuss your vision. Book a free consultation with our team and receive a
              fixed-price quote within 48 hours.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
              >
                Request Free Quote
              </a>
              <a
                href={`tel:+44${PHONE.slice(1)}`}
                className="inline-flex items-center justify-center rounded-full border border-ink/15 px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-sand-2"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-sand-2 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <ArzLogo size="lg" theme="light" />
              <div className="mt-4 max-w-sm space-y-2 text-sm leading-relaxed text-ink/65">
                <p className="font-semibold text-ink/80">Head Office</p>
                <p>
                  4th Floor, Silverstream House
                  <br />
                  45 Fitzroy Street, Fitzrovia
                  <br />
                  London, W1T 6EB
                </p>
                <p className="mt-3">
                  Registered in England & Wales · Company No. 07452319
                  <br />
                  VAT No. GB 123 4567 89
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-ink/75">
              <a className="hover:text-amber transition-colors" href="/privacy">
                Privacy & Cookie Policy
              </a>
              <a className="hover:text-amber transition-colors" href="/terms">
                Terms & Conditions
              </a>
            </div>
            <div className="flex gap-5 text-sm font-bold text-ink/75">
              <a className="hover:text-amber transition-colors" href="#">
                Instagram
              </a>
              <a className="hover:text-amber transition-colors" href="#">
                Facebook
              </a>
              <a className="hover:text-amber transition-colors" href="#">
                LinkedIn
              </a>
            </div>
          </div>
          <p className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink/50">
            © 2026 ARZ Construction Ltd. All rights reserved. Built with architectural precision.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-sand-2/95 p-3 backdrop-blur-md md:hidden">
        <a
          className="flex-1 rounded-xl bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-ink ring-1 ring-ink/15 shadow-xs"
          href={`tel:+44${PHONE.slice(1)}`}
        >
          Call Studio
        </a>
        <a
          className="flex-1 rounded-xl bg-amber px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm"
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
