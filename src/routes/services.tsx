import { createFileRoute } from "@tanstack/react-router";
import {
  Building,
  Home,
  ChefHat,
  Droplets,
  Wrench,
  Zap,
  ArrowRight,
  Phone,
} from "lucide-react";

import afterExtension from "@/assets/after-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { SITE } from "@/lib/site-config";

const TITLE = "Our Services  LOPO CONSTRUCTION LIMITED";
const DESCRIPTION =
  "Comprehensive construction services across London: house extensions, loft conversions, kitchen and bathroom renovations, plumbing and electrical work.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Services,
});

const allServices = [
  {
    icon: Building,
    title: "House Extensions",
    description: "Single, double storey, rear and wraparound house extensions with structural steelwork.",
    img: afterExtension,
    link: "/extensions",
  },
  {
    icon: Home,
    title: "Loft Conversions",
    description: "Dormer, Velux, and hip-to-gable conversions creating luxury master bedroom suites.",
    img: loftConversion,
    link: "/loft-conversions",
  },
  {
    icon: ChefHat,
    title: "Kitchen Renovations",
    description: "Bespoke kitchen design, custom joinery, island worktops, and appliance fitting.",
    img: kitchenRenovation,
    link: "/kitchen-renovations",
  },
  {
    icon: Droplets,
    title: "Bathroom Refurbishments",
    description: "Luxury wetrooms, microcement finishes, marble tiling, and freestanding stone tubs.",
    img: bathroomRenovation,
    link: "/bathroom-renovations",
  },
  {
    icon: Home,
    title: "Full House Renovations",
    description: "Back-to-brick refurbishments, structural alterations, plastering, and decorating.",
    img: afterExtension,
    link: "/house-renovations",
  },
  {
    icon: Wrench,
    title: "Plumbing & Heating",
    description: "Gas Safe registered boiler installations, unvented cylinders, and re-piping.",
    img: bathroomRenovation,
    link: "/plumbing",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description: "NICEIC approved rewiring, consumer units, EV chargers, and architectural lighting.",
    img: kitchenRenovation,
    link: "/electrical",
  },
  {
    icon: Wrench,
    title: "Trade Building Services",
    description: "Roofing, plastering, tiling, carpentry, and decorating across London.",
    img: loftConversion,
    link: "/other-services",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">LOPO Construction</p>
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-6xl">
            Our Building Services
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            From major structural extensions to luxury kitchen and bathroom refurbishments, we deliver end-to-end building excellence.
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="bg-[#F8FAFC] py-20 md:py-28 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {allServices.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.title} href={s.link} className="build-card overflow-hidden group flex flex-col justify-between">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F59E0B]/10 text-[#F59E0B] mb-3">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#F59E0B] transition-colors">{s.title}</h3>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{s.description}</p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                      <span>View Service</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Have A Project In Mind?
          </h2>
          <p className="mt-4 text-sm text-slate-300 max-w-xl mx-auto">
            Contact LOPO Construction today for a free site visit and fixed-price written quotation.
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

