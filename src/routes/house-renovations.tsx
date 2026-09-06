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
  Wrench,
  Zap,
} from "lucide-react";

import afterExtension from "@/assets/after-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";
import { buildSeoMeta, buildCanonical, absoluteUrl, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/house-renovations")({
  head: () => ({
    meta: buildSeoMeta({
      title: "House Renovations London — LOPO CONSTRUCTION LIMITED",
      description: "Full house renovations, structural alterations, and complete home refurbishments across London. Dedicated project manager & 10-year guarantee.",
      path: "/house-renovations",
      ogImage: kitchenRenovation,
    }),
    links: buildCanonical("/house-renovations"),
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "House Renovations",
          description: "Full house renovations, structural alterations, and complete home refurbishments across London.",
          provider: { "@id": `${SITE_URL}/#organisation` },
          url: absoluteUrl("/house-renovations"),
          areaServed: { "@type": "Place", name: "London and surrounding counties" },
          serviceType: "House Renovations",
        }),
      },
    ],
  }),
  component: HouseRenovations,
});

const renovationTypes = [
  {
    title: "Full House Refurbishments",
    description: "Complete back-to-brick restoration including damp proofing, rewiring, re-plumbing, plastering, and decorating.",
    img: afterExtension,
    features: ["Back-to-brick stripping", "Full electrical rewire", "Plumbing & heating install", "Plastering & decorating"],
  },
  {
    title: "Structural Alterations",
    description: "Knocking down load-bearing walls, installing steel RSJ beams, and creating open-plan family living areas.",
    img: kitchenRenovation,
    features: ["Steel RSJ beam installation", "Wall removals", "Subfloor replacement", "Chimney breast removal"],
  },
  {
    title: "Period Property Restoration",
    description: "Sympathetic restoration of Victorian and Edwardian period features alongside modern heating and insulation.",
    img: loftConversion,
    features: ["Period coving & cornicing", "Sash window restoration", "Damp proofing", "Traditional joinery"],
  },
];

const services = [
  {
    icon: Home,
    title: "Full Strip-Out & Demolition",
    description: "Safely removing old plaster, partition walls, outdated plumbing, and wiring back to sound structural brick.",
  },
  {
    icon: Layers,
    title: "Structural Steelwork",
    description: "Engineered steel beams installed to open up living spaces, kitchens, and ground floor layouts.",
  },
  {
    icon: Zap,
    title: "Rewiring & Plumbing",
    description: "Complete new electrical consumer units, rewiring, unvented hot water cylinders, and central heating.",
  },
  {
    icon: Wrench,
    title: "Plastering & Drylining",
    description: "Smooth skim coats, soundproof insulation boards, and decorative coving ready for final painting.",
  },
  {
    icon: Sparkles,
    title: "Flooring & Joinery",
    description: "Engineered oak floorboards, ceramic tiling, bespoke fitted wardrobes, and custom internal doors.",
  },
  {
    icon: ShieldCheck,
    title: "Completion Certification",
    description: "Full Gas Safe, NICEIC electrical, and local authority building control sign-off documentation.",
  },
];

function HouseRenovations() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
                <Home className="h-3.5 w-3.5" /> Renovation Specialists
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Full House Renovations
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Complete property transformations across London. From structural wall removals to complete rewiring, new heating systems, and luxury finishes.
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
                  alt="House renovation London LOPO Construction"
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
              Renovation Scope
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Home Refurbishment Services
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Custom refurbishment solutions tailored to your property and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {renovationTypes.map((type) => (
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
              End-to-End Refurbishment
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              One dedicated project manager coordinates all trades for your house renovation.
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
            Plan Your House Renovation
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact LOPO Construction today for a free site visit and itemised fixed-price quote.
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

