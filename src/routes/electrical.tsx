import { createFileRoute } from "@tanstack/react-router";

import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import heroExtension from "@/assets/hero-extension.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Electrical Services in London â€” NICEIC Approved Electricians | ARZ Construction";
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

const PHONE = "447860135189";
const PHONE_DISPLAY = "+44 7860 135189";

const services = [
  {
    icon: "ðŸ”Œ",
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
    icon: "âš¡",
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
    icon: "ðŸ’¡",
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
    icon: "ðŸ ",
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
    icon: "ðŸ”§",
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
    icon: "ðŸ“‹",
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
    icon: "âœ…",
    title: "NICEIC Approved",
    description: "Our electricians are NICEIC approved contractors, ensuring the highest standards of work.",
  },
  {
    icon: "ðŸ“œ",
    title: "Fully Certified",
    description: "All work comes with appropriate certificates and complies with BS7671 regulations.",
  },
  {
    icon: "ðŸ›¡ï¸",
    title: "Fully Insured",
    description: "Comprehensive public liability insurance for complete protection.",
  },
  {
    icon: "ðŸ’°",
    title: "Fixed-Price Quotes",
    description: "Clear, upfront pricing with no hidden costs. The price we quote is the price you pay.",
  },
  {
    icon: "ðŸ†",
    title: "Experienced Electricians",
    description: "Our team has extensive experience across all types of electrical work.",
  },
  {
    icon: "ðŸ“‹",
    title: "Guaranteed Work",
    description: "All work comes with our guarantee for quality assurance.",
  },
];

function Electrical() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

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
                        âœ“
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

      <SiteFooter />

      <MobileCta />
    </div>
  );
}
