import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Building,
} from "lucide-react";

import afterExtension from "@/assets/after-extension.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";

const TITLE = "Building & Construction Services London  LOPO CONSTRUCTION LIMITED";
const DESCRIPTION =
  "Roofing, plastering, tiling, carpentry, painting, and decorating across London. Comprehensive building services for homeowners.";

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

const additionalServices = [
  {
    icon: Building,
    title: "Roofing & Leadwork",
    description: "Slate roofs, tile repairs, flat EPDM rubber roofing, chimney repointing, and lead flashing.",
  },
  {
    icon: Wrench,
    title: "Plastering & Rendering",
    description: "Internal skimming, dry lining, external K-Rend, and monocouche silicone rendering.",
  },
  {
    icon: Sparkles,
    title: "Tiling & Stonework",
    description: "Porcelain, marble, mosaic, and natural stone tiling for kitchens, bathrooms, and patios.",
  },
  {
    icon: Layers,
    title: "Carpentry & Joinery",
    description: "Structural joists, timber stud walls, door hanging, skirting boards, and fitted wardrobes.",
  },
  {
    icon: ShieldCheck,
    title: "Damp Proofing",
    description: "Chemical damp proof courses, basement tanking membranes, and condensation control.",
  },
  {
    icon: CheckCircle2,
    title: "Painting & Decorating",
    description: "Professional interior and exterior painting, woodwork spraying, and wallpapering.",
  },
];

function OtherServices() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
                <Wrench className="h-3.5 w-3.5" /> Specialist Building Trades
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Building &amp; Trade Services
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Roofing, plastering, tiling, carpentry, and decorating across London. From minor home improvements to major structural repairs.
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
                  alt="Building services London LOPO Construction"
                  className="w-full aspect-[4/3] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F8FAFC] py-20 md:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
              Trade Expertise
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Building Services
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Skilled tradesmen delivering exceptional workmanship on every job.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((s) => {
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
            Discuss Your Building Project
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact LOPO Construction today for a free estimate and friendly advice.
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

