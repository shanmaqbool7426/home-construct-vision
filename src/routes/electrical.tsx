import { createFileRoute } from "@tanstack/react-router";

import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import heroExtension from "@/assets/hero-extension.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "Electrical Services in London — NICEIC Approved Electricians | ARZ Construction";
const DESCRIPTION =
  "Professional electrical services across London. NICEIC approved electricians for full rewires, consumer unit upgrades, smart home installations, and electrical repairs. Fully certified and compliant.";

export const Route = createFileRoute("/electrical")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Electrical,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const services = [
  {
    icon: "🔌",
    title: "Full House Rewires",
    description:
      "Complete electrical rewires for older properties. Upgrade to modern standards with new wiring, sockets, and consumer unit.",
    features: [
      "Complete rewiring",
      "New consumer unit",
      "Additional sockets",
      "LED lighting throughout",
    ],
  },
  {
    icon: "⚡",
    title: "Consumer Unit Upgrades",
    description:
      "Upgrade your fuse box to a modern consumer unit with RCD protection. Essential for safety and compliance with current regulations.",
    features: [
      "RCD protection",
      "MCB breakers",
      "Surge protection",
      "Certificate provided",
    ],
  },
  {
    icon: "💡",
    title: "Lighting Design & Installation",
    description:
      "From simple downlighters to complex lighting schemes. LED, smart lighting, and decorative installations.",
    features: [
      "Downlighters",
      "Pendant lights",
      "Outdoor lighting",
      "Smart lighting systems",
    ],
  },
  {
    icon: "🏠",
    title: "Smart Home Systems",
    description:
      "Control your lighting, heating, and appliances from your phone. Smart home automation for modern living.",
    features: [
      "Smart lighting",
      "Heating controls",
      "Voice control",
      "App integration",
    ],
  },
  {
    icon: "🔧",
    title: "Electrical Repairs",
    description:
      "Fault finding and repairs for all electrical issues. Sockets, switches, lighting, and appliance connections.",
    features: [
      "Fault finding",
      "Socket replacements",
      "Switch replacements",
      "Appliance connections",
    ],
  },
  {
    icon: "📋",
    title: "Electrical Certificates",
    description:
      "EICR reports for home buyers, landlords, and insurance. All testing and certification to BS7671 standards.",
    features: [
      "EICR reports",
      "Landlord certificates",
      "Building control sign-off",
      "Insurance reports",
    ],
  },
];

const whyChooseUs = [
  {
    icon: "✅",
    title: "NICEIC Approved",
    description: "Our electricians are NICEIC approved contractors, ensuring the highest standards of work.",
  },
  {
    icon: "📜",
    title: "Fully Certified",
    description: "All work comes with appropriate certificates and complies with BS7671 regulations.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured",
    description: "Comprehensive public liability insurance for complete protection.",
  },
  {
    icon: "💰",
    title: "Fixed-Price Quotes",
    description: "Clear, upfront pricing with no hidden costs. The price we quote is the price you pay.",
  },
  {
    icon: "🏆",
    title: "Experienced Electricians",
    description: "Our team has extensive experience across all types of electrical work.",
  },
  {
    icon: "📋",
    title: "Guaranteed Work",
    description: "All work comes with our guarantee for quality assurance.",
  },
];

function Electrical() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>NICEIC Approved Electricians · Fully Certified & Compliant</span>
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
            <a className="transition-colors hover:text-amber" href="/about">
              About
            </a>
            <a className="transition-colors hover:text-amber" href="/services">
              Services
            </a>
            <a className="transition-colors hover:text-amber" href="/projects">
              Projects
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
                NICEIC Approved Electricians
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                Professional Electrical Services London
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                From full rewires to smart home installations, our NICEIC approved electricians
                provide comprehensive electrical services across London. Fully certified and
                compliant with all regulations.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get Free Quote
                </a>
                <a
                  href={`tel:+44${PHONE.slice(1)}`}
                  className="inline-flex items-center justify-center rounded-full border border-ink/15 px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-sand-2"
                >
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="luxury-card overflow-hidden rounded-2xl">
                <img
                  src={kitchenRenovation}
                  alt="Professional electrical services London ARZ Construction"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Our Electrical Services
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Complete Electrical Solutions
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Professional electrical services for residential and commercial properties across London.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="luxury-card rounded-2xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber/10 text-3xl">
                  {service.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber text-xs">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-ink/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Why Choose ARZ
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Why Choose Our Electricians?
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Qualified, certified, and experienced electrical professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="luxury-card rounded-2xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber/10 text-3xl">
                  {item.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Need an Electrician in London?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free consultation with our electrical team. We'll assess your needs and provide
              a fixed-price quote with no obligation.
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
                  Registered in England & Wales
                  <br />
                  Company details available on request
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
            © 2026 ARZ Construction Ltd. All rights reserved.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-sand-2/95 p-3 backdrop-blur-md md:hidden">
        <a
          className="flex-1 rounded-xl bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-ink ring-1 ring-ink/15 shadow-xs"
          href={`tel:+44${PHONE.slice(1)}`}
        >
          Call Us
        </a>
        <a
          className="flex-1 rounded-xl bg-amber px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm"
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
