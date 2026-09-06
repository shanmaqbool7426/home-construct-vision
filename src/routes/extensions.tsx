import { createFileRoute } from "@tanstack/react-router";
import {
  Building,
  Ruler,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
} from "lucide-react";

import afterExtension from "@/assets/after-extension.jpg";
import beforeExtension from "@/assets/before-extension.jpg";
import heroExtension from "@/assets/hero-extension.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";
import { buildSeoMeta, buildCanonical, absoluteUrl, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/extensions")({
  head: () => ({
    meta: buildSeoMeta({
      title: "House Extensions London — LOPO CONSTRUCTION LIMITED",
      description: "Single storey, double storey, rear and wraparound house extensions across London. Structural steelwork, planning permission & building regs managed.",
      path: "/extensions",
      ogImage: afterExtension,
    }),
    links: buildCanonical("/extensions"),
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "House Extensions",
          description: "Single storey, double storey, rear and wraparound house extensions across London.",
          provider: { "@id": `${SITE_URL}/#organisation` },
          url: absoluteUrl("/extensions"),
          areaServed: { "@type": "Place", name: "London and surrounding counties" },
          serviceType: "House Extensions",
        }),
      },
    ],
  }),
  component: Extensions,
});

const extensionTypes = [
  {
    title: "Rear Extensions",
    description: "Extend into your garden to create a spacious open-plan kitchen, dining and living area.",
    img: afterExtension,
    features: ["Open-plan layout", "Bifold / sliding glass doors", "Roof lanterns & skylights", "Structural steel RSJs"],
  },
  {
    title: "Side Return Extensions",
    description: "Transform unused side alleyways into bright, wide family living space in period terrace homes.",
    img: heroExtension,
    features: ["Maximized floor area", "Glass side return roof", "Infilled passage design", "Seamless garden access"],
  },
  {
    title: "Wraparound Extensions",
    description: "Combine rear and side return extensions for maximum ground floor transformation.",
    img: beforeExtension,
    features: ["Maximum space creation", "Zoned open-plan living", "Underfloor heating throughout", "Bespoke architectural finish"],
  },
];

const services = [
  {
    icon: Building,
    title: "Groundworks & Foundations",
    description: "Trench fill, strip foundations, or piling engineered for your soil type and structural loads.",
  },
  {
    icon: Layers,
    title: "Structural Steelwork",
    description: "Calculation and installation of steel RSJs to support open-plan knocked-through walls.",
  },
  {
    icon: Sparkles,
    title: "Glazing & Bifold Doors",
    description: "High-performance aluminium bifolds, sliding glass doors, roof lanterns, and Velux skylights.",
  },
  {
    icon: Ruler,
    title: "Brickwork & Masonry",
    description: "Matching existing period brickwork, cavity insulation, and weatherproof rendering.",
  },
  {
    icon: ShieldCheck,
    title: "Roofing & Insulation",
    description: "Flat green roofs, EPDM rubber membranes, pitched slate roofs, and PIR insulation.",
  },
  {
    icon: Award,
    title: "Building Regs Sign-Off",
    description: "Full coordination with local authority or approved inspector for final completion certificates.",
  },
];

function Extensions() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
                <Building className="h-3.5 w-3.5" /> Extension Specialists
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                House Extensions London
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Transform your home with a custom rear, side return, or wraparound extension. From groundworks to structural steel, architectural glazing, and handover.
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
                  src={afterExtension}
                  alt="House extension London LOPO Construction"
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
              Extension Options
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Extension Designs
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We build all types of house extensions across London and surrounding counties.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {extensionTypes.map((type) => (
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
              Complete Build Management
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              From foundations to final inspection, we coordinate every trade.
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
            Start Your Extension Project
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact us today to arrange a free site consultation and fixed-price quote.
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

