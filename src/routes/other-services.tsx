import { createFileRoute } from "@tanstack/react-router";

import heroExtension from "@/assets/hero-extension.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "Other Building Services in London — Roofing, Plastering, Tiling & Decorating | ARZ Construction";
const DESCRIPTION =
  "Comprehensive building services across London. Roofing, plastering, tiling, and decorating services. Professional finishing trades for complete construction projects. Fixed-price quotes.";

export const Route = createFileRoute("/other-services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: OtherServices,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const services = [
  {
    category: "Roofing Services",
    icon: "🏠",
    items: [
      {
        title: "Roof Repairs",
        description: "Fixing leaks, damaged tiles, and structural issues. Fast, reliable repairs.",
      },
      {
        title: "New Roofs",
        description: "Complete roof installations for new builds and extensions.",
      },
      {
        title: "Flat Roofs",
        description: "EPDM, felt, and liquid-applied flat roof systems.",
      },
      {
        title: "Lead Work",
        description: "Lead flashing, soakers, and lead roof installations.",
      },
    ],
  },
  {
    category: "Plastering Services",
    icon: "🔨",
    items: [
      {
        title: "Internal Plastering",
        description: "Smooth, polished finishes for walls and ceilings.",
      },
      {
        title: "Rendering",
        description: "External rendering for weather protection and aesthetics.",
      },
      {
        title: "Dry Lining",
        description: "Plasterboard installation and taping for partitions.",
      },
      {
        title: "Skimming",
        description: "Over-skimming for a fresh, smooth finish.",
      },
    ],
  },
  {
    category: "Tiling Services",
    icon: "🎨",
    items: [
      {
        title: "Floor Tiling",
        description: "Ceramic, porcelain, natural stone, and marble floor tiles.",
      },
      {
        title: "Wall Tiling",
        description: "Kitchen splashbacks, bathroom walls, and feature walls.",
      },
      {
        title: "Underfloor Heating",
        description: "Tile installations over underfloor heating systems.",
      },
      {
        title: "Waterproof Tanking",
        description: "Tanking for wetrooms and bathrooms before tiling.",
      },
    ],
  },
  {
    category: "Decorating Services",
    icon: "🖌️",
    items: [
      {
        title: "Interior Painting",
        description: "Professional painting for walls, ceilings, and woodwork.",
      },
      {
        title: "Wallpaper Hanging",
        description: "Precision wallpaper installation including patterned papers.",
      },
      {
        title: "Exterior Painting",
        description: "Weather-resistant paints for external surfaces.",
      },
      {
        title: "Specialist Finishes",
        description: "Feature walls, metallic paints, and decorative finishes.",
      },
    ],
  },
];

function OtherServices() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>Complete Building Services · Professional Finishing Trades</span>
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
          <div className="reveal max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Complete Building Services
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Other Building Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Comprehensive finishing trades for your construction project. From roofing to
              decorating, we provide all the services you need under one roof.
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
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Professional Finishing Services
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Quality craftsmanship across all finishing trades.
            </p>
          </div>
          <div className="space-y-12">
            {services.map((service) => (
              <div key={service.category} className="luxury-card rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber/10 text-3xl">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-ink">{service.category}</h3>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {service.items.map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber/15 text-amber text-xs">
                        ✓
                      </span>
                      <div>
                        <h4 className="font-serif font-bold text-ink">{item.title}</h4>
                        <p className="mt-1 text-sm text-ink/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl text-center mb-8">
              Why Choose ARZ for Finishing Works?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: "👷",
                  title: "Skilled Tradespeople",
                  description: "Experienced professionals in all finishing trades.",
                },
                {
                  icon: "✅",
                  title: "Quality Guaranteed",
                  description: "All work comes with our quality guarantee.",
                },
                {
                  icon: "💰",
                  title: "Fixed Pricing",
                  description: "Clear, upfront pricing with no hidden costs.",
                },
                {
                  icon: "📋",
                  title: "Complete Projects",
                  description: "All finishing trades under one roof for convenience.",
                },
                {
                  icon: "🛡️",
                  title: "Fully Insured",
                  description: "Comprehensive insurance for complete protection.",
                },
                {
                  icon: "⏱️",
                  title: "On-Time Delivery",
                  description: "We complete work on schedule, every time.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber/10 text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Need Finishing Works in London?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free consultation with our team. We'll assess your needs and provide a
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
