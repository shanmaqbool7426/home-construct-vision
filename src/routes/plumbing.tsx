import { createFileRoute } from "@tanstack/react-router";

import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import heroExtension from "@/assets/hero-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "Plumbing Services in London — Gas Safe Registered Plumbers | ARZ Construction";
const DESCRIPTION =
  "Professional plumbing services across London. Gas Safe registered plumbers for boiler installations, bathroom plumbing, emergency repairs, and central heating systems. 24/7 emergency call-outs.";

export const Route = createFileRoute("/plumbing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Plumbing,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const services = [
  {
    icon: "🔧",
    title: "Emergency Plumbing Repairs",
    description:
      "24/7 emergency call-outs for burst pipes, leaks, blockages, and boiler breakdowns. Fast response across London.",
    features: [
      "Burst pipes",
      "Leak detection",
      "Blocked drains",
      "Boiler breakdowns",
    ],
  },
  {
    icon: "🔥",
    title: "Boiler Installations",
    description:
      "Gas Safe registered engineers for boiler installations, replacements, and repairs. All major brands supplied and fitted.",
    features: [
      "New boiler installations",
      "Boiler replacements",
      "Annual servicing",
      "Power flushing",
    ],
  },
  {
    icon: "🚿",
    title: "Bathroom Plumbing",
    description:
      "Complete bathroom plumbing services for renovations and new installations. From sanitaryware to pipework and drainage.",
    features: [
      "Sanitaryware fitting",
      "Pipework installation",
      "Drainage systems",
      "Shower installations",
    ],
  },
  {
    icon: "🏠",
    title: "Central Heating Systems",
    description:
      "Installation and maintenance of central heating systems. Radiators, underfloor heating, and controls.",
    features: [
      "Radiator installation",
      "Underfloor heating",
      "Thermostat controls",
      "System upgrades",
    ],
  },
  {
    icon: "🍳",
    title: "Kitchen Plumbing",
    description:
      "Kitchen plumbing for sinks, dishwashers, washing machines, and water filtration systems. Professional installation guaranteed.",
    features: [
      "Sink installation",
      "Dishwasher fitting",
      "Washing machine connections",
      "Water filtration",
    ],
  },
  {
    icon: "🔍",
    title: "Leak Detection & Repair",
    description:
      "Advanced leak detection services to find and fix leaks without unnecessary damage to your property.",
    features: [
      "Electronic leak detection",
      "Pipe repairs",
      "Joint replacements",
      "Preventative maintenance",
    ],
  },
];

const whyChooseUs = [
  {
    icon: "✅",
    title: "Gas Safe Registered",
    description: "All our gas engineers are Gas Safe registered for your safety and peace of mind.",
  },
  {
    icon: "⏰",
    title: "24/7 Emergency Service",
    description: "Available round the clock for plumbing emergencies. Fast response times across London.",
  },
  {
    icon: "💰",
    title: "Fixed-Price Quotes",
    description: "No hidden costs or surprise charges. We provide clear, fixed-price quotes before work begins.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured",
    description: "Comprehensive public liability insurance for complete protection.",
  },
  {
    icon: "🏆",
    title: "Experienced Engineers",
    description: "Our plumbers have extensive experience across all types of plumbing work.",
  },
  {
    icon: "📋",
    title: "Guaranteed Work",
    description: "All work comes with our guarantee for quality assurance.",
  },
];

function Plumbing() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>Gas Safe Registered Plumbers · 24/7 Emergency Service</span>
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
                Gas Safe Registered Plumbers
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                Professional Plumbing Services London
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                From emergency repairs to complete bathroom installations, our Gas Safe registered
                plumbers provide comprehensive plumbing services across London. Available 24/7 for
                emergencies.
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
                  Emergency: {PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="reveal">
              <div className="luxury-card overflow-hidden rounded-2xl">
                <img
                  src={bathroomRenovation}
                  alt="Professional plumbing services London ARZ Construction"
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
              Our Plumbing Services
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Complete Plumbing Solutions
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Professional plumbing services for residential and commercial properties across London.
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
              Why Choose Our Plumbers?
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Trusted, qualified, and experienced plumbing professionals.
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

      {/* EMERGENCY CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16 border-amber/30">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber/10 text-5xl mb-6">
              🚨
            </div>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Plumbing Emergency?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Don't panic. Our emergency plumbers are available 24/7 across London. Fast response
              times for burst pipes, leaks, and boiler breakdowns.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <a
                href={`tel:+44${PHONE.slice(1)}`}
                className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
              >
                Call Emergency: {PHONE_DISPLAY}
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-ink/15 px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-sand-2"
              >
                Request Callback
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Need a Plumber in London?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free consultation with our plumbing team. We'll assess your needs and provide a
              fixed-price quote with no obligation.
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
