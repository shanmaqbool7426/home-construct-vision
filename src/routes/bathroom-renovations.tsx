import { createFileRoute } from "@tanstack/react-router";

import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import heroExtension from "@/assets/hero-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Bathroom Renovations in London — Luxury Bathrooms & Wetrooms | ARZ Construction";
const DESCRIPTION =
  "Professional bathroom renovation services across London. Luxury bathrooms, wetrooms, ensuites, and cloakrooms. Microcement finishes, freestanding baths, and premium brassware. Fixed-price quotes.";

export const Route = createFileRoute("/bathroom-renovations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: BathroomRenovations,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";

const bathroomTypes = [
  {
    title: "Luxury Bathrooms",
    description:
      "Create a spa-like retreat with premium fixtures, freestanding baths, and high-end finishes. Transform your bathroom into a personal sanctuary.",
    features: [
      "Freestanding baths",
      "Rainfall showers",
      "Underfloor heating",
      "Premium brassware",
    ],
    img: bathroomRenovation,
  },
  {
    title: "Wetrooms",
    description:
      "Fully tanked wetrooms with level-access showers. Perfect for modern homes and accessible bathrooms. Microcement or tiled finishes available.",
    features: [
      "Full tanking system",
      "Level-access showers",
      "Microcement finishes",
      "Accessible design",
    ],
    img: heroExtension,
  },
  {
    title: "Ensuite Bathrooms",
    description:
      "Add value and convenience with a bespoke ensuite bathroom. Designed to complement your bedroom and maximize your space.",
    features: [
      "Space-saving designs",
      "Walk-in showers",
      "Custom storage",
      "Ventilation systems",
    ],
    img: kitchenRenovation,
  },
  {
    title: "Family Bathrooms",
    description:
      "Practical, durable bathrooms designed for family life. Bath-shower combinations, robust finishes, and ample storage for the whole family.",
    features: [
      "Bath-shower combos",
      "Durable finishes",
      "Family storage",
      "Safe surfaces",
    ],
    img: loftConversion,
  },
];

const services = [
  {
    icon: "📐",
    title: "Bathroom Design",
    description:
      "Our designers create bathrooms that combine beauty with functionality. From initial concept to detailed plans and 3D visuals.",
  },
  {
    icon: "🔨",
    title: "Complete Installation",
    description:
      "Full bathroom fitting service including plumbing, electrics, tiling, and decorating. One team handles everything from start to finish.",
  },
  {
    icon: "🚿",
    title: "Shower Installations",
    description:
      "From electric showers to digital mixer systems and rainfall showers. Professional installation with guaranteed water pressure.",
  },
  {
    icon: "🪞",
    title: "Tanking & Waterproofing",
    description:
      "Professional tanking systems for wetrooms and bathrooms. Ensure your bathroom is fully waterproofed and protected.",
  },
  {
    icon: "🔥",
    title: "Underfloor Heating",
    description:
      "Electric or wet underfloor heating systems. Luxury comfort with energy-efficient operation.",
  },
  {
    icon: "🎨",
    title: "Tiling & Finishes",
    description:
      "Professional tiling service with natural stone, porcelain, ceramic, or microcement. Precision cutting and flawless finishes.",
  },
];

const features = [
  {
    title: "Freestanding Baths",
    description: "Statement pieces in stone, copper, or acrylic.",
  },
  {
    title: "Walk-In Showers",
    description: "Frameless glass enclosures with rainfall heads.",
  },
  {
    title: "Vanity Units",
    description: "Custom storage solutions to maximize space.",
  },
  {
    title: "Heated Towel Rails",
    description: "Keep towels warm and add a touch of luxury.",
  },
  {
    title: "LED Mirrors",
    description: "Illuminated mirrors with demister pads.",
  },
  {
    title: "Premium Brassware",
    description: "Grohe, Hansgrohe, and other leading brands.",
  },
];

function BathroomRenovations() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
                Bathroom Renovation Specialists
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                Luxury Bathroom Renovations London
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Transform your bathroom into a spa-like sanctuary. From luxury ensuites to practical
                family bathrooms, we design and install bathrooms that combine beauty with
                functionality.
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
                  src={bathroomRenovation}
                  alt="Luxury bathroom renovation London ARZ Construction"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BATHROOM TYPES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Bathroom Types
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Bathroom Design Options
            </h2>
            <p className="mt-4 text-base text-ink/70">
              We design and install all types of bathrooms across London.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {bathroomTypes.map((type) => (
              <div key={type.title} className="luxury-card overflow-hidden rounded-2xl group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={type.img}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-ink">{type.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/75">{type.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber text-xs">
                          ✓
                        </span>
                        <span className="text-sm font-medium text-ink/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Complete Bathroom Services
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Everything you need for your bathroom renovation under one roof.
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Premium Features
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Bathroom Features & Fixtures
            </h2>
            <p className="mt-4 text-base text-ink/70">
              We supply and install only the finest bathroom fixtures and fittings.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="luxury-card rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber text-xs">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-ink">{feature.title}</h4>
                      <p className="mt-1 text-sm text-ink/70">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Ready to Renovate Your Bathroom?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free design consultation with our bathroom specialists. We'll visit your home,
              discuss your ideas, and provide a fixed-price quote within 48 hours.
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
