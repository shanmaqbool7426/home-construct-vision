import { createFileRoute } from "@tanstack/react-router";

import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import heroExtension from "@/assets/hero-extension.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "Kitchen Renovations in London — Bespoke Kitchen Design & Installation | ARZ Construction";
const DESCRIPTION =
  "Professional kitchen renovation services across London. Custom cabinetry, stone worktops, island kitchens, and integrated appliances. Fixed-price quotes, 10-year guarantee.";

export const Route = createFileRoute("/kitchen-renovations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: KitchenRenovations,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const kitchenStyles = [
  {
    title: "Modern Handleless Kitchens",
    description:
      "Sleek, contemporary designs with push-to-open mechanisms and integrated handles. Perfect for modern homes and open-plan living spaces.",
    features: [
      "Push-to-open cabinets",
      "Integrated appliances",
      "Minimalist design",
      "High-gloss or matte finishes",
    ],
    img: kitchenRenovation,
  },
  {
    title: "Traditional Shaker Kitchens",
    description:
      "Timeless shaker-style cabinetry with simple, elegant lines. Versatile enough for period properties and contemporary homes alike.",
    features: [
      "Classic shaker doors",
      "Butler sink options",
      "Timber worktops",
      "Period-appropriate design",
    ],
    img: heroExtension,
  },
  {
    title: "Open-Plan Kitchen Diners",
    description:
      "Create a social heart for your home with an open-plan kitchen that flows into dining and living areas. Perfect for entertaining and family life.",
    features: [
      "Island or peninsular units",
      "Breakfast bars",
      "Bi-fold doors",
      "Open-plan layouts",
    ],
    img: bathroomRenovation,
  },
  {
    title: "Bespoke Custom Kitchens",
    description:
      "Fully bespoke kitchens designed around your specific needs and space. Custom cabinetry made to measure with premium materials and finishes.",
    features: [
      "Made-to-measure units",
      "Custom storage solutions",
      "Premium materials",
      "Unique design features",
    ],
    img: loftConversion,
  },
];

const services = [
  {
    icon: "📐",
    title: "Kitchen Design",
    description:
      "Our designers create kitchens that work for your space and lifestyle. From initial concept to detailed 3D visuals, we bring your vision to life.",
  },
  {
    icon: "🔨",
    title: "Full Installation",
    description:
      "Complete kitchen fitting service including plumbing, electrics, carpentry, tiling, and decorating. One team handles everything.",
  },
  {
    icon: "🪨",
    title: "Worktop Supply & Fit",
    description:
      "Granite, quartz, marble, or solid wood worktops. We supply and install all materials with precision templating and fitting.",
  },
  {
    icon: "💡",
    title: "Lighting Design",
    description:
      "Strategic lighting design including under-cabinet lights, pendant fittings, and integrated LED systems to enhance your kitchen's ambiance.",
  },
  {
    icon: "🔌",
    title: "Appliance Installation",
    description:
      "Professional installation of all kitchen appliances including ovens, hobs, extractors, fridges, freezers, and dishwashers.",
  },
  {
    icon: "🎨",
    title: "Finishing Touches",
    description:
      "From splashback tiling to decorative finishes, we ensure every detail is perfect. Complete decorating and final touches included.",
  },
];

const materials = [
  {
    title: "Stone Worktops",
    description: "Granite, quartz, and marble worktops for durability and luxury.",
  },
  {
    title: "Solid Wood",
    description: "Oak, walnut, and other hardwoods for a warm, natural aesthetic.",
  },
  {
    title: "Custom Cabinetry",
    description: "Handcrafted cabinets made to measure in our workshop.",
  },
  {
    title: "Premium Hardware",
    description: "Blum, Hettich, and other premium hinges and drawer systems.",
  },
  {
    title: "Integrated Appliances",
    description: "Miele, Siemens, Neff, and other leading appliance brands.",
  },
  {
    title: "Designer Finishes",
    description: "Handleless, shaker, in-frame, and bespoke door styles.",
  },
];

function KitchenRenovations() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>London Kitchen Specialists · Fixed-Price Guaranteed Quotes</span>
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
                Kitchen Renovation Specialists
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                Bespoke Kitchen Renovations London
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                From design to installation, we create kitchens that combine beautiful aesthetics
                with practical functionality. Custom cabinetry, premium worktops, and expert
                craftsmanship.
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
                  alt="Bespoke kitchen renovation London ARZ Construction"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KITCHEN STYLES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Kitchen Styles
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Kitchen Design Options
            </h2>
            <p className="mt-4 text-base text-ink/70">
              We design and install all types of kitchens across London.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {kitchenStyles.map((style) => (
              <div key={style.title} className="luxury-card overflow-hidden rounded-2xl group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={style.img}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-ink">{style.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-ink/75">{style.description}</p>
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {style.features.map((feature) => (
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
              Complete Kitchen Services
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Everything you need for your kitchen renovation under one roof.
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

      {/* MATERIALS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Premium Materials
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Materials & Finishes
            </h2>
            <p className="mt-4 text-base text-ink/70">
              We use only the finest materials from trusted suppliers.
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="luxury-card rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {materials.map((material) => (
                  <div key={material.title} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber text-xs">
                      ✓
                    </span>
                    <div>
                      <h4 className="font-serif font-bold text-ink">{material.title}</h4>
                      <p className="mt-1 text-sm text-ink/70">{material.description}</p>
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
              Ready to Renovate Your Kitchen?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free design consultation with our kitchen specialists. We'll visit your home,
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
