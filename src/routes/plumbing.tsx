import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench,
  Droplets,
  Flame,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";

const TITLE = "Plumbing Services London  LOPO CONSTRUCTION LIMITED";
const DESCRIPTION =
  "Gas Safe registered plumbing, heating, boiler installation, and unvented hot water systems across London. Emergency plumbing and full house re-plumbing.";

export const Route = createFileRoute("/plumbing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Plumbing,
});

const plumbingServices = [
  {
    icon: Flame,
    title: "Boiler Installation & Heating",
    description: "Gas Safe registered installation of high-efficiency combi boilers, system boilers, and smart thermostats.",
  },
  {
    icon: Droplets,
    title: "Unvented Hot Water Cylinders",
    description: "High-pressure hot water systems supplying multiple bathrooms simultaneously with powerful water flow.",
  },
  {
    icon: Wrench,
    title: "Complete Re-Plumbing",
    description: "Full property re-piping in copper or multi-layer barrier pipework for house extensions and refurbishments.",
  },
  {
    icon: ShieldCheck,
    title: "Underfloor Heating Plumbing",
    description: "Warm-water underfloor heating manifolds, pipe loops, and zone controls for ground floors and extensions.",
  },
  {
    icon: Award,
    title: "Gas Safe Certification",
    description: "Landlord gas safety certificates, boiler servicing, and gas pipework inspections fully accredited.",
  },
  {
    icon: CheckCircle2,
    title: "Drainage & Soil Pipes",
    description: "New underground drainage connections, stack replacement, and waste pipe routing for new bathrooms.",
  },
];

function Plumbing() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
                <Flame className="h-3.5 w-3.5" /> Gas Safe Registered
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Plumbing &amp; Heating Services
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                Professional plumbing and gas heating solutions across London. From boiler replacements to full house re-plumbing and underfloor heating manifolds.
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
                  src={bathroomRenovation}
                  alt="Plumbing services London LOPO Construction"
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
              Plumbing Solutions
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Gas Safe &amp; Plumbing Services
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Expert plumbing services for residential refurbishments, extensions, and emergency upgrades.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {plumbingServices.map((s) => {
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
            Need Gas Safe Plumbing?
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact LOPO Construction today for a free site visit and fixed-price quote.
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

