import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  ShieldCheck,
  Award,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";

const TITLE = "Electrical Services London  LOPO CONSTRUCTION LIMITED";
const DESCRIPTION =
  "NICEIC approved electrical rewiring, consumer unit upgrades, EV chargers, and architectural lighting across London. Certified electrical installations.";

export const Route = createFileRoute("/electrical")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Electrical,
});

const electricalServices = [
  {
    icon: Zap,
    title: "Full Property Rewiring",
    description: "Complete house rewiring with modern RCD consumer units, double sockets, and dedicated kitchen circuits.",
  },
  {
    icon: ShieldCheck,
    title: "Consumer Unit Upgrades",
    description: "Replacing outdated fuse boxes with metal RCD/RCBO consumer units conforming to 18th Edition regulations.",
  },
  {
    icon: Sparkles,
    title: "Architectural Lighting",
    description: "Recessed ceiling downlights, under-cabinet LED strip channels, garden spike lights, and smart switches.",
  },
  {
    icon: Award,
    title: "NICEIC Certification",
    description: "EICR inspection reports, Part P building control certificates, and safety testing for homeowners.",
  },
  {
    icon: CheckCircle2,
    title: "EV Charger Installation",
    description: "Dedicated 7kW home electric vehicle chargers installed with surge protection and smart app control.",
  },
  {
    icon: Zap,
    title: "Smoke Alarms & Fire Safety",
    description: "Mains-powered interlinked heat and smoke detector systems to satisfy modern building regulations.",
  },
];

function Electrical() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
                <Zap className="h-3.5 w-3.5" /> Certified Electricians
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Certified Electrical Services
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                NICEIC approved electrical installations across London. From full rewires to consumer units, smart lighting, EV chargers, and safety certificates.
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
                  src={kitchenRenovation}
                  alt="Electrical services London LOPO Construction"
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
              Electrical Scope
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              NICEIC Electrical Services
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Safe, certified electrical installations for extensions, refurbishments, and upgrades.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {electricalServices.map((s) => {
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
            Need Certified Electrical Work?
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact LOPO Construction today for a free site consultation and fixed-price quote.
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

