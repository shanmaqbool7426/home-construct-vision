import { createFileRoute } from "@tanstack/react-router";

import loftConversion from "@/assets/loft-conversion.jpg";
import heroExtension from "@/assets/hero-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Loft Conversions in London — Dormer, Velux & Hip-to-Gable | ARZ Construction";
const DESCRIPTION =
  "Professional loft conversion services across London. Dormer, Velux, and hip-to-gable conversions creating master bedrooms, home offices, and guest suites. Fixed-price quotes, 10-year guarantee.";

export const Route = createFileRoute("/loft-conversions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: LoftConversions,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const loftTypes = [
  {
    title: "Dormer Loft Conversions",
    description:
      "The most popular choice for London homes. Dormer extensions project from the roof slope to create maximum headroom and floor space. Perfect for master bedrooms with ensuite bathrooms.",
    features: [
      "Maximum headroom",
      "Full-size windows",
      "Master bedroom suites",
      "Box dormer or pitched roof",
    ],
    img: loftConversion,
  },
  {
    title: "Velux Roof Light Conversions",
    description:
      "The simplest and most cost-effective option. Velux windows are installed flush with the roof line, maintaining the existing roof structure while flooding the space with natural light.",
    features: [
      "Cost-effective solution",
      "Minimal structural work",
      "Multiple window options",
      "Preserves roof line",
    ],
    img: heroExtension,
  },
  {
    title: "Hip-to-Gable Conversions",
    description:
      "Ideal for properties with hipped roofs. The hip roof is extended vertically to create a gable wall, significantly increasing the usable loft space and head height.",
    features: [
      "Increased floor space",
      "Better head height",
      "Suitable for hipped roofs",
      "Structural steelwork",
    ],
    img: kitchenRenovation,
  },
  {
    title: "L-Shaped Loft Conversions",
    description:
      "Extend across two sections of your property to create substantial additional space. Common in Victorian and Edwardian terraced houses with rear outriggers.",
    features: [
      "Maximum space creation",
      "Two-room potential",
      "Ideal for terraced homes",
      "Complex structural work",
    ],
    img: bathroomRenovation,
  },
];

const benefits = [
  {
    icon: "📈",
    title: "Add 20% to Property Value",
    description:
      "A well-designed loft conversion can increase your property's value by up to 20%, making it one of the best home improvement investments.",
  },
  {
    icon: "🛏️",
    title: "Create Additional Bedrooms",
    description:
      "Transform unused loft space into a master bedroom with ensuite, additional bedrooms for growing families, or a self-contained guest suite.",
  },
  {
    icon: "🏠",
    title: "Home Office or Studio",
    description:
      "Create a quiet, separate workspace away from the main living areas. Perfect for remote working or creative pursuits.",
  },
  {
    icon: "💡",
    title: "Maximize Natural Light",
    description:
      "Strategic window placement and roof lights flood your new space with natural light, creating a bright and airy environment.",
  },
  {
    icon: "📐",
    title: "Utilize Unused Space",
    description:
      "Most London lofts are completely unused. Convert this dead space into valuable living accommodation without extending your footprint.",
  },
  {
    icon: "✅",
    title: "No Garden Sacrifice",
    description:
      "Unlike ground-floor extensions, loft conversions don't sacrifice any of your valuable outdoor space.",
  },
];

const process = [
  {
    step: "01",
    title: "Feasibility Survey",
    description:
      "We assess your loft's suitability: roof height, structure, and access. Most lofts can be converted, but some require more structural work than others.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Our team creates designs that maximize space and light. We handle planning permissions (if required) and building regulations applications.",
  },
  {
    step: "03",
    title: "Structural Engineering",
    description:
      "Our engineers design the structural steelwork and floor joists needed to support the conversion. All calculations are submitted for approval.",
  },
  {
    step: "04",
    title: "Construction Phase",
    description:
      "Most loft conversions take 8-12 weeks. We handle everything from scaffolding to final decorations with minimal disruption to your home.",
  },
  {
    step: "05",
    title: "Final Inspection",
    description:
      "Building control inspects the conversion to ensure compliance. We handle all sign-offs and provide you with completion certificates.",
  },
  {
    step: "06",
    title: "Handover & Guarantee",
    description:
      "Final snagging, handover, and our 10-year structural guarantee. Your new space is ready to enjoy.",
  },
];

function LoftConversions() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
                Loft Conversion Experts
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                Loft Conversions Across London
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Transform your unused loft space into valuable living accommodation. Dormer, Velux,
                and hip-to-gable conversions designed to maximize space and light.
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
                  src={loftConversion}
                  alt="Professional loft conversion London ARZ Construction"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOFT TYPES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Types of Loft Conversions
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Loft Conversion Options
            </h2>
            <p className="mt-4 text-base text-ink/70">
              We design and build all types of loft conversions across London.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {loftTypes.map((type) => (
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

      {/* BENEFITS */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Why Convert Your Loft?
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Benefits of Loft Conversions
            </h2>
            <p className="mt-4 text-base text-ink/70">
              A loft conversion is one of the best home improvement investments you can make.
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

      {/* PROCESS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              How We Work
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Our Loft Conversion Process
            </h2>
            <p className="mt-4 text-base text-ink/70">
              A structured, transparent approach from feasibility to final handover.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {process.map((step) => (
              <div key={step.step} className="luxury-card rounded-2xl p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber/10 font-serif text-2xl font-bold text-amber">
                  {step.step}
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Ready to Convert Your Loft?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free feasibility survey with our loft conversion specialists. We'll assess your
              loft's potential and provide a fixed-price quote within 48 hours.
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
