import { createFileRoute } from "@tanstack/react-router";
import {
  Ruler,
  Wrench,
  Sparkles,
  ChefHat,
  Hammer,
  Flame,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Award,
} from "lucide-react";

import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import afterExtension from "@/assets/after-extension.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";
import { buildSeoMeta, buildCanonical, absoluteUrl, SITE_URL } from "@/lib/seo";

export const Route = createFileRoute("/kitchen-renovations")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Kitchen Renovations London — LOPO CONSTRUCTION LIMITED",
      description: "Bespoke kitchen renovations and fitting across London. Custom joinery, marble islands, structural steelwork, plumbing and electrics. Fixed-price quote.",
      path: "/kitchen-renovations",
      ogImage: kitchenRenovation,
    }),
    links: buildCanonical("/kitchen-renovations"),
    scripts: [
      {
        type: "application/ld+json" as const,
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Kitchen Renovations",
          description: "Bespoke kitchen renovations and fitting across London.",
          provider: { "@id": `${SITE_URL}/#organisation` },
          url: absoluteUrl("/kitchen-renovations"),
          areaServed: { "@type": "Place", name: "London and surrounding counties" },
          serviceType: "Kitchen Renovations",
        }),
      },
    ],
  }),
  component: KitchenRenovations,
});

const kitchenStyles = [
  {
    title: "Modern Minimalist Kitchens",
    description: "Handleless units, integrated appliances, and sleek quartz or marble worktops.",
    img: kitchenRenovation,
    features: ["Handleless cabinetry", "Quartz & marble island", "Integrated smart appliances", "Under-cabinet LED lighting"],
  },
  {
    title: "Traditional Shaker Kitchens",
    description: "Timeless timber Shaker doors, Belfast sinks, and range cookers.",
    img: afterExtension,
    features: ["Solid wood doors", "Belfast ceramic sink", "Custom pantry unit", "Hand-painted finish"],
  },
  {
    title: "Open-Plan Extension Kitchens",
    description: "Knocking through walls to combine kitchen, dining, and living with Crittall garden doors.",
    img: loftConversion,
    features: ["Structural steel RSJs", "Crittall / bifold doors", "Continuous floor tiling", "Zoned task lighting"],
  },
];

const services = [
  {
    icon: Ruler,
    title: "Kitchen Design & 3D Planning",
    description: "Detailed 3D visual concepts, spatial planning, and material selection for your lifestyle.",
  },
  {
    icon: Wrench,
    title: "Full Installation",
    description: "Complete fitting service including plumbing, gas, electrics, joinery, and decorating.",
  },
  {
    icon: Sparkles,
    title: "Worktop Supply & Fitting",
    description: "Precision templating and installation of granite, quartz, marble, or solid wood worktops.",
  },
  {
    icon: ChefHat,
    title: "Appliance Integration",
    description: "Professional hookup of hobs, extractors, double ovens, wine coolers, and hot water taps.",
  },
  {
    icon: Hammer,
    title: "Knock-Through & Structural Work",
    description: "Removing load-bearing walls with steel beams to create spacious open-plan kitchens.",
  },
  {
    icon: Flame,
    title: "Gas Safe & Electrical Sign-Off",
    description: "All plumbing, gas, and electrical work fully certified by accredited engineers.",
  },
];

const materials = [
  { title: "Quartz & Marble", description: "Hard-wearing, stain-resistant worktops in stunning vein patterns." },
  { title: "Bespoke Joinery", description: "Custom-made timber units tailored to exact room dimensions." },
  { title: "Porcelain & Ceramic Tiling", description: "Durable floor and splashback tiling with precise grout lines." },
  { title: "Architectural Lighting", description: "Recessed spotlights, feature pendants, and LED strip lighting." },
];

function KitchenRenovations() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#F59E0B] mb-4">
                <ChefHat className="h-3.5 w-3.5" /> Kitchen Specialists
              </span>
              <h1 className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                Bespoke Kitchen Renovations
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                We design and build luxury kitchens across London. From open-plan knock-through extensions to custom Shaker cabinetry and marble worktops.
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
                  alt="Bespoke kitchen renovation London LOPO Construction"
                  className="w-full aspect-[4/3] rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KITCHEN STYLES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
              Kitchen Styles
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Kitchen Design Options
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We design and install all types of kitchens across London and surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {kitchenStyles.map((style) => (
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
              Complete Kitchen Services
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Everything you need for your kitchen renovation under one roof.
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

      {/* MATERIALS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
              Premium Quality
            </p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Materials &amp; Finishes
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              We use only the finest materials from trusted UK suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((m) => (
              <div key={m.title} className="build-card p-6">
                <div className="flex items-center gap-2 font-bold text-[#0F172A] text-base">
                  <CheckCircle2 className="h-4 w-4 text-[#F59E0B] shrink-0" />
                  <span>{m.title}</span>
                </div>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Renovate Your Kitchen?
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Book a free design consultation. We'll visit your home, discuss your ideas, and provide a fixed-price quote within 48 hours.
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

