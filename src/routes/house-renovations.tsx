import { createFileRoute } from "@tanstack/react-router";

import heroExtension from "@/assets/hero-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "House Renovations in London — ARZ Construction Ltd";
const DESCRIPTION =
  "Complete house renovation services across London. Structural refurbishments, period property restoration, open-plan conversions, and full home transformations. Fixed-price quotes, 10-year guarantee.";

export const Route = createFileRoute("/house-renovations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: HouseRenovations,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const renovationTypes = [
  {
    title: "Full Structural Refurbishments",
    description:
      "Complete home transformations including structural alterations, wall removal, steel beam installations, and reconfiguration of living spaces.",
    features: [
      "Structural wall removal",
      "Steel beam installations",
      "Floor joist replacements",
      "Foundation underpinning",
    ],
  },
  {
    title: "Period Property Restoration",
    description:
      "Sympathetic restoration of Victorian, Edwardian, and Georgian properties. Preserving character while upgrading to modern standards.",
    features: [
      "Period feature restoration",
      "Sash window repairs",
      "Original fireplace restoration",
      "Listed building consent",
    ],
  },
  {
    title: "Open-Plan Living Conversions",
    description:
      "Transforming compartmentalised layouts into spacious open-plan living areas. Creating flowing spaces perfect for modern family life.",
    features: [
      "Kitchen-diner conversions",
      "Living room extensions",
      "Structural glazing",
      "Bi-fold door installations",
    ],
  },
  {
    title: "Whole House Refurbishments",
    description:
      "Comprehensive renovations covering every aspect of your property from roof to foundations. Complete makeovers with minimal disruption.",
    features: [
      "Full interior strip-out",
      "Electrical rewiring",
      "Plumbing upgrades",
      "Decorating and finishing",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We visit your property to discuss your renovation goals, assess the existing structure, and identify opportunities and constraints.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Our team creates detailed designs and drawings. We handle all planning permissions and building regulations applications.",
  },
  {
    step: "03",
    title: "Fixed-Price Quote",
    description:
      "You receive a comprehensive line-by-line quotation with no hidden costs. The price we quote is the price you pay.",
  },
  {
    step: "04",
    title: "Construction Phase",
    description:
      "Our skilled team carries out the work with weekly progress reports and regular site meetings to keep you informed.",
  },
  {
    step: "05",
    title: "Quality Inspection",
    description:
      "Every phase is inspected to ensure it meets our exacting standards. We don't move to the next stage until you're satisfied.",
  },
  {
    step: "06",
    title: "Handover & Guarantee",
    description:
      "Final inspection, snagging, and handover. All work comes with our 10-year structural guarantee for your peace of mind.",
  },
];

const benefits = [
  {
    icon: "🏠",
    title: "Increase Property Value",
    description: "A well-executed renovation can increase your property's value by 20-30% or more.",
  },
  {
    icon: "⚡",
    title: "Improve Energy Efficiency",
    description: "Upgrade insulation, windows, and heating systems to reduce energy bills and carbon footprint.",
  },
  {
    icon: "🎨",
    title: "Create Your Dream Home",
    description: "Transform your existing property into the home you've always wanted without the hassle of moving.",
  },
  {
    icon: "🛡️",
    title: "Fix Structural Issues",
    description: "Address subsidence, damp, rot, and other structural problems before they become worse.",
  },
  {
    icon: "📐",
    title: "Optimise Space",
    description: "Reconfigure layouts to make better use of your existing space with open-plan living.",
  },
  {
    icon: "✅",
    title: "Modern Standards",
    description: "Upgrade to modern building standards with new electrics, plumbing, and insulation.",
  },
];

function HouseRenovations() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>London Construction Specialists · Fixed-Price Guaranteed Quotes</span>
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
                House Renovation Specialists
              </p>
              <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
                Complete House Renovations Across London
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                From structural refurbishments to full home transformations, we handle every aspect
                of your house renovation with professional craftsmanship and transparent project
                management.
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
                  alt="Complete house renovation by ARZ Construction London"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Our Renovation Services
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              What We Can Do For Your Home
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Comprehensive renovation services covering every aspect of your property transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {renovationTypes.map((type, idx) => (
              <div key={type.title} className="luxury-card overflow-hidden rounded-2xl group">
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

      {/* OUR PROCESS */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              How We Work
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Our Renovation Process
            </h2>
            <p className="mt-4 text-base text-ink/70">
              A transparent, structured approach from initial consultation to final handover.
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

      {/* BENEFITS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Why Renovate?
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Benefits of House Renovation
            </h2>
            <p className="mt-4 text-base text-ink/70">
              Transform your existing home rather than moving — often more cost-effective and less stressful.
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
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Ready to Renovate Your Home?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Book a free consultation with our renovation specialists. We'll visit your property,
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
