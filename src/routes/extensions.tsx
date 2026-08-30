import { createFileRoute } from "@tanstack/react-router";

import heroExtension from "@/assets/hero-extension.jpg";
import afterExtension from "@/assets/after-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "House Extensions in London â€” Rear, Side & Wraparound Extensions | ARZ Construction";
const DESCRIPTION =
  "Professional house extension services across London. Rear, side, and wraparound extensions with fixed-price quotes. Structural steelwork, full-height glazing, and architectural finishes. 10-year guarantee.";

export const Route = createFileRoute("/extensions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Extensions,
});

const PHONE = "447860135189";
const PHONE_DISPLAY = "+44 7860 135189";
const WHATSAPP = "447860135189";

const extensionTypes = [
  {
    title: "Rear House Extensions",
    description:
      "Extend your living space to the rear of your property. Perfect for creating open-plan kitchen-diners, family rooms, or ground-floor living spaces with garden access.",
    features: [
      "Open-plan kitchen extensions",
      "Family room additions",
      "Full-height glazing",
      "Bi-fold door installations",
    ],
    img: heroExtension,
  },
  {
    title: "Side Return Extensions",
    description:
      "Maximise your property's potential by extending into the often-wasted side return area. Ideal for terraced and semi-detached properties in London.",
    features: [
      "Kitchen side returns",
      "Utility room creation",
      "Narrow space solutions",
      "Light optimization",
    ],
    img: afterExtension,
  },
  {
    title: "Wraparound Extensions",
    description:
      "Combine rear and side extensions to create substantial additional living space. Transform your home with L-shaped or U-shaped extensions.",
    features: [
      "L-shaped extensions",
      "U-shaped designs",
      "Maximum space creation",
      "Multi-room additions",
    ],
    img: kitchenRenovation,
  },
  {
    title: "First-Floor Extensions",
    description:
      "Extend upwards to add additional bedrooms, bathrooms, or living space on the first floor. Perfect for growing families needing more space.",
    features: [
      "Additional bedrooms",
      "Master suites",
      "Home offices",
      "Structural reinforcement",
    ],
    img: loftConversion,
  },
];

const considerations = [
  {
    icon: "ðŸ“‹",
    title: "Planning Permission",
    description:
      "Many extensions fall under Permitted Development rights, but we handle all planning applications when required. We'll advise on the best approach for your project.",
  },
  {
    icon: "ðŸ—ï¸",
    title: "Building Regulations",
    description:
      "All structural work must comply with building regulations. We handle all applications, inspections, and sign-offs to ensure your extension is safe and compliant.",
  },
  {
    icon: "ðŸ”©",
    title: "Structural Steelwork",
    description:
      "Most extensions require structural steel beams to support the new structure. Our engineers design and specify all steelwork to ensure structural integrity.",
  },
  {
    icon: "ðŸ’¡",
    title: "Design & Glazing",
    description:
      "From traditional brick-and-mortar to contemporary full-height glazing, we design extensions that maximize natural light and complement your property's architecture.",
  },
  {
    icon: "â±ï¸",
    title: "Project Timeline",
    description:
      "Most single-storey extensions take 10-14 weeks to complete. We provide detailed timelines and keep you informed with weekly progress reports.",
  },
  {
    icon: "ðŸ’°",
    title: "Fixed-Price Quotes",
    description:
      "Receive a comprehensive line-by-line quotation with no hidden costs. The price we quote is the price you pay â€” guaranteed.",
  },
];

function Extensions() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
                Extension Specialists
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                House Extensions Across London
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Rear, side, and wraparound extensions designed to maximize space and light. From
                initial design to final finishes, we handle every aspect of your extension project.
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
                  src={heroExtension}
                  alt="Modern house extension London ARZ Construction"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXTENSION TYPES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Types of Extensions
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Extension Options For Your Home
            </h2>
            <p className="mt-4 text-base text-ink/70">
              We design and build all types of house extensions across London.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {extensionTypes.map((type) => (
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
                          âœ“
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

      {/* KEY CONSIDERATIONS */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              What You Need To Know
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Extension Planning & Building
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Everything you need to know about planning, building regulations, and the construction process.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {considerations.map((item) => (
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
              Ready to Extend Your Home?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free consultation with our extension specialists. We'll visit your property,
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
