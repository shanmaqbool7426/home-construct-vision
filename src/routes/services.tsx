import { createFileRoute } from "@tanstack/react-router";

import heroExtension from "@/assets/hero-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Our Services — ARZ Construction Ltd | Complete Design & Build Solutions";
const DESCRIPTION =
  "Comprehensive construction services across London: extensions, loft conversions, renovations, kitchens, bathrooms, plumbing, electrical, roofing, and more. Fixed-price quotes, 10-year guarantee.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Services,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";

const services = [
  {
    number: "01",
    title: "House Renovations",
    description:
      "Complete home transformations from structural refurbishments to cosmetic upgrades. We handle period properties, modern homes, and everything in between.",
    features: [
      "Full structural refurbishments",
      "Period property restoration",
      "Open-plan living conversions",
      "Heritage and listed building work",
    ],
    img: heroExtension,
    link: "/house-renovations",
  },
  {
    number: "02",
    title: "Extensions",
    description:
      "Rear, side, and wraparound extensions designed to maximize space and light. Structural steelwork, full-height glazing, and architectural finishes.",
    features: [
      "Rear house extensions",
      "Side return extensions",
      "Wraparound extensions",
      "First-floor extensions",
    ],
    img: heroExtension,
    link: "/extensions",
  },
  {
    number: "03",
    title: "Loft Conversions",
    description:
      "Dormer, Velux, and hip-to-gable conversions creating master bedrooms, home offices, or guest suites with stunning skylines views.",
    features: [
      "Dormer conversions",
      "Velux roof lights",
      "Hip-to-gable conversions",
      "Ensuite bathrooms",
    ],
    img: loftConversion,
    link: "/loft-conversions",
  },
  {
    number: "04",
    title: "Kitchen Renovations",
    description:
      "Bespoke kitchen design and installation with custom joinery, premium worktops, and integrated appliances. From galley to open-plan layouts.",
    features: [
      "Custom cabinetry",
      "Stone & quartz worktops",
      "Island kitchens",
      "Crittall glass doors",
    ],
    img: kitchenRenovation,
    link: "/kitchen-renovations",
  },
  {
    number: "05",
    title: "Bathroom Renovations",
    description:
      "Luxury bathroom design featuring microcement finishes, freestanding tubs, wetrooms, and premium brassware. Spa-like retreats for your home.",
    features: [
      "Wetroom installations",
      "Freestanding baths",
      "Microcement finishes",
      "Underfloor heating",
    ],
    img: bathroomRenovation,
    link: "/bathroom-renovations",
  },
  {
    number: "06",
    title: "Plumbing Services",
    description:
      "Gas Safe registered plumbers for all domestic and commercial plumbing work. From emergency repairs to full bathroom installations.",
    features: [
      "Emergency call-outs",
      "Boiler installations",
      "Bathroom plumbing",
      "Central heating systems",
    ],
    img: bathroomRenovation,
    link: "/plumbing",
  },
  {
    number: "07",
    title: "Electrical Services",
    description:
      "NICEIC approved electricians for complete rewires, consumer unit upgrades, and smart home installations. Fully certified and compliant.",
    features: [
      "Full house rewires",
      "Consumer unit upgrades",
      "Smart home systems",
      "LED lighting design",
    ],
    img: kitchenRenovation,
    link: "/electrical",
  },
  {
    number: "08",
    title: "Other Building Services",
    description:
      "Comprehensive finishing trades including roofing, plastering, tiling, and decorating. One team for all your construction needs.",
    features: [
      "Roofing & flat roofs",
      "Plastering & rendering",
      "Floor & wall tiling",
      "Painting & decorating",
    ],
    img: loftConversion,
    link: "/other-services",
  },
];

const benefits = [
  {
    icon: "📋",
    title: "Fixed-Price Quotes",
    description: "Line-by-line quotations with no hidden costs. The price we quote is the price you pay.",
  },
  {
    icon: "👷",
    title: "Dedicated Project Manager",
    description: "Your single point of contact from initial consultation to final handover.",
  },
  {
    icon: "🛡️",
    title: "10-Year Guarantee",
    description: "All structural work comes with our comprehensive 10-year structural guarantee.",
  },
  {
    icon: "✅",
    title: "Fully Insured",
    description: "Public liability and builder's risk insurance for complete peace of mind.",
  },
  {
    icon: "📊",
    title: "Weekly Progress Reports",
    description: "Regular updates and site meetings keep you informed throughout your project.",
  },
  {
    icon: "🏆",
    title: "Accredited Professionals",
    description: "Gas Safe, NICEIC, FMB, and TrustMark registered for your assurance.",
  },
];

function Services() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Complete Design & Build
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Our Professional Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              From initial design to final finishes, we provide comprehensive construction services
              across London. One accountable team for your entire project — no subcontracting, no
              surprises.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Comprehensive Construction Services
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Every service you need under one roof, delivered by accredited professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.number} className="luxury-card overflow-hidden rounded-2xl group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md font-serif text-lg font-bold text-amber shadow-lg">
                    {service.number}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-base leading-relaxed text-ink/75">{service.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber text-xs">
                          ✓
                        </span>
                        <span className="text-sm font-medium text-ink/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t border-ink/10">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber hover:text-copper transition-colors"
                    >
                      <span>Learn More</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
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
              The ARZ Difference
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Why Choose ARZ Construction?
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Industry-leading guarantees and transparent service from start to finish.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="luxury-card rounded-2xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber/10 text-3xl">
                  {benefit.icon}
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="border-t border-ink/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Ready to Discuss Your Project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free consultation with our team. We'll visit your property, discuss your vision,
              and provide a fixed-price quote within 48 hours.
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
