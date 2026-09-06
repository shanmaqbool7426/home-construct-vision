import { createFileRoute } from "@tanstack/react-router";
import {
  Home,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  Ruler,
} from "lucide-react";

import loftConversion from "@/assets/loft-conversion.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import afterExtension from "@/assets/after-extension.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";
import { buildSeoMeta, buildCanonical, absoluteUrl, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/loft-conversions")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Loft Conversions London — LOPO CONSTRUCTION LIMITED",
      description: "Dormer, Velux, hip-to-gable, and mansard loft conversions across London. Master bedroom en-suites, skylights, structural steelwork. Fixed-price quote.",
      path: "/loft-conversions",
      ogImage: loftConversion,
    }),
    links: buildCanonical("/loft-conversions"),
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Loft Conversions",
          description: "Dormer, Velux, hip-to-gable, and mansard loft conversions across London.",
          provider: { "@id": `${SITE_URL}/#organisation` },
          url: absoluteUrl("/loft-conversions"),
          areaServed: { "@type": "Place", name: "London and surrounding counties" },
          serviceType: "Loft Conversions",
        }),
      },
    ],
  }),
  component: LoftConversions,
});

const loftTypes = [
  {
    title: "Rear Dormer Conversions",
    description: "Create maximum headroom and usable floor space for master bedroom suites and luxury shower rooms.",
    img: loftConversion,
    features: ["Full headroom expansion", "Master bedroom & en-suite", "Juliet balcony options", "Velux skylights"],
  },
  {
    title: "Hip-to-Gable Conversions",
    description: "Extending the sloping hip roof outwards to create a vertical gable wall for maximum loft space in semi-detached homes.",
    img: afterExtension,
    features: ["Ideal for semi-detached homes", "Massive space gain", "Custom staircase layout", "Full insulation"],
  },
  {
    title: "Velux / Rooflight Conversions",
    description: "Simple, cost-effective loft conversions retaining the original roofline with high-performance Velux windows.",
    img: kitchenRenovation,
    features: ["Fast installation", "Cost-effective", "Natural light flood", "Preserved external look"],
  },
];

const services = [
  {
    icon: Home,
    title: "Structural Steelwork",
    description: "Engineered steel beams installed to support new loft floor joists and roof structures.",
  },
  {
    icon: Layers,
    title: "Staircase Fitting",
    description: "Bespoke timber staircases designed to match your existing ground and first floor stairs.",
  },
  {
    icon: Sparkles,
    title: "En-Suite Plumbing",
    description: "Saniflo or direct soil pipe connections for luxury master bedroom en-suite bathrooms.",
  },
  {
    icon: Ruler,
    title: "Velux & Dormer Windows",
    description: "High-performance double glazed Velux rooflights and custom dormer windows.",
  },
  {
    icon: ShieldCheck,
    title: "Fire Protection & Insulation",
    description: "FD30 fire doors, mains smoke alarms, acoustic insulation, and PIR thermal insulation.",
  },
  {
    icon: Award,
    title: "Building Regs Approval",
    description: "Full coordination with building control for structural, thermal, and fire sign-off.",
  },
];

function LoftConversions() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
                <Home className="h-3.5 w-3.5" /> Loft Specialists
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Bespoke Loft Conversions
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Unlock valuable living space in your attic. We build dormer, Velux, and hip-to-gable loft conversions with master suites across London.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/contact" className="btn-primary">
                  Get Free Quote <ArrowRight className="h-4 w-4" />
                </a>
                <a href={`tel:${SITE.phone}`} className="btn-secondary">
                  <Phone className="h-4 w-4 text-[#F59E0B]" /> Call {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div>
              <div className="build-card overflow-hidden rounded-2xl p-2">
                <img
                  src={loftConversion}
                  alt="Loft conversion London LOPO Construction"
                  className="w-full aspect-[4/3] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
              Loft Options
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Loft Conversion Designs
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Custom designs tailored to your property type and space requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {loftTypes.map((type) => (
              <div key={type.title} className="build-card overflow-hidden group">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={type.img}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E293B]">{type.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{type.description}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" />
                        <span>{feature}</span>
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
      <section className="bg-[#F8FAFC] py-20 md:py-28 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
              What We Offer
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Complete Loft Services
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Everything required to transform your attic into luxury living space.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="build-card p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#1E293B]">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Convert Your Loft?
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact LOPO Construction today for a free site survey and fixed-price quote.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Request Free Quote <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${SITE.phone}`} className="btn-secondary">
              <Phone className="h-4 w-4 text-[#F59E0B]" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileCta />
    </div>
  );
}

