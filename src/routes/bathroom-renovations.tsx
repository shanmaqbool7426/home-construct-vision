import { createFileRoute } from "@tanstack/react-router";
import {
  Droplets,
  Wrench,
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
  Layers,
  Zap,
} from "lucide-react";

import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import afterExtension from "@/assets/after-extension.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";

const TITLE = "Bathroom Renovations London  LOPO CONSTRUCTION LIMITED";
const DESCRIPTION =
  "Luxury bathroom refurbishments and wetrooms across London. Microcement, marble tiling, freestanding stone tubs, brushed brass fittings. Fixed-price quote.";

export const Route = createFileRoute("/bathroom-renovations")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: BathroomRenovations,
});

const bathroomStyles = [
  {
    title: "Luxury Wetrooms",
    description: "Level-access walk-in showers with frameless glass screens and concealed drainage.",
    img: bathroomRenovation,
    features: ["Level-access walk-in shower", "Concealed linear drain", "Frameless glass screen", "Underfloor heating"],
  },
  {
    title: "Spa Master Bathrooms",
    description: "Freestanding stone bathtubs, double vanity units, and brushed brass taps.",
    img: kitchenRenovation,
    features: ["Freestanding stone tub", "Double basin vanity", "Brushed brass brassware", "Mood LED lighting"],
  },
  {
    title: "En-Suite Conversions",
    description: "Clever compact designs transforming underutilised spaces into luxury en-suite shower rooms.",
    img: afterExtension,
    features: ["Compact wall-hung WC", "Recessed storage niches", "Mechanical ventilation", "Acoustic insulation"],
  },
];

const services = [
  {
    icon: Droplets,
    title: "Complete Plumbing Installation",
    description: "New pipework, pressure boosting pumps, concealed thermostatic valves, and drainage.",
  },
  {
    icon: Layers,
    title: "Waterproofing & Tanking",
    description: "100% waterproof membrane tanking applied to floors and shower walls before tiling.",
  },
  {
    icon: Sparkles,
    title: "Tiling & Microcement",
    description: "Expert installation of large-format porcelain, marble, terrazzo, or seamless microcement.",
  },
  {
    icon: Zap,
    title: "Underfloor Heating",
    description: "Electric or warm-water underfloor heating systems with smart digital thermostats.",
  },
  {
    icon: Wrench,
    title: "Sanitaryware Fitting",
    description: "Precision installation of wall-hung WCs, freestanding tubs, and brassware.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Electrics",
    description: "IP65 rated bathroom lighting, shaver sockets, and extraction fans fully certified.",
  },
];

function BathroomRenovations() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
                <Droplets className="h-3.5 w-3.5" /> Bathroom Specialists
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Luxury Bathroom Refurbishments
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                We transform bathrooms into spa-like sanctuaries across London. From walk-in wetrooms to freestanding tubs, marble tiling, and underfloor heating.
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
                  alt="Luxury bathroom renovation London LOPO Construction"
                  className="w-full aspect-[4/3] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
              Bathroom Options
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Bathroom &amp; Wetroom Designs
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Custom designs tailored to your home layout and aesthetic preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {bathroomStyles.map((style) => (
              <div key={style.title} className="build-card overflow-hidden group">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={style.img}
                    alt={style.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1E293B]">{style.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{style.description}</p>
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                    {style.features.map((feature) => (
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
              Complete Bathroom Fitting
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              From strip-out to final siliconing, one team manages your bathroom project.
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
            Transform Your Bathroom
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact us today for a free site visit and written quotation.
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

