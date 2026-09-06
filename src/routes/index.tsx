import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
  Leaf,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import heroExtension from "@/assets/hero-extension.jpg";
import beforeExtension from "@/assets/before-extension.jpg";
import afterExtension from "@/assets/after-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site-config";

const TITLE = "LOPO CONSTRUCTION LIMITED - Extensions, Loft Conversions & Renovations in London";
const DESCRIPTION = "London construction specialists. Extensions, loft conversions, kitchens, bathrooms, plumbing and electrics - fixed-price quotes, fully insured, 10-year guarantee.";

export const Route = createFileRoute("/")(  {
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const servicesWithImages = [
  { n: "01", title: "Rear & Side Extensions", detail: "Open-plan living additions with full-height glazing and structural steelwork.", img: afterExtension, tag: "Extensions", link: "/extensions" },
  { n: "02", title: "Bespoke Loft Conversions", detail: "Dormer, Velux & hip-to-gable master bedroom suites overlooking London skylines.", img: loftConversion, tag: "Loft Suite", link: "/loft-conversions" },
  { n: "03", title: "Luxury Kitchen Renovations", detail: "Custom joinery, marble island worktops and Crittall glass garden doors.", img: kitchenRenovation, tag: "Kitchens", link: "/kitchen-renovations" },
  { n: "04", title: "Spa Bathrooms & Wetrooms", detail: "Microcement wall finishes, freestanding stone tubs and brushed brass fittings.", img: bathroomRenovation, tag: "Bathrooms", link: "/bathroom-renovations" },
];

const portfolioShowcase = [
  { title: "Victorian Master Suite Loft", location: "Richmond, London", img: loftConversion, specs: "Dormer Conversion | 12 Weeks Build" },
  { title: "Open-Plan Crittall Kitchen Extension", location: "Dulwich, London", img: kitchenRenovation, specs: "Rear Extension | 14 Weeks Build" },
  { title: "Microcement Spa Bathroom Refurb", location: "Greenwich, London", img: bathroomRenovation, specs: "Full Wetroom | 6 Weeks Build" },
  { title: "Modern Architectural Extension", location: "Bromley, London", img: afterExtension, specs: "Wraparound Extension | 16 Weeks Build" },
];

const areas = ["Morden", "Bromley", "Croydon", "Dulwich", "Richmond", "Greenwich", "Kingston", "Guildford", "Reigate", "Sutton"];

const faqs = [
  { q: "How long does a typical extension take?", a: "Most single-storey projects run 10 to 14 weeks from groundworks to handover." },
  { q: "Do you handle planning and building regs?", a: "Yes - we manage architectural drawings, planning applications and building control sign-off end to end." },
  { q: "Is the quotation really free and fixed-price?", a: "Always. You receive an itemised, written quote that won't drift once agreed." },
  { q: "Are you fully insured?", a: "LOPO Construction carries full public liability, employers liability and professional indemnity insurance." },
];

const badges = [
  { icon: <ShieldCheck className="h-6 w-6" />, title: "Quality Work", sub: "We never compromise on quality." },
  { icon: <Clock className="h-6 w-6" />, title: "On Time Delivery", sub: "Your time matters to us." },
  { icon: <Users className="h-6 w-6" />, title: "Expert Team", sub: "Skilled & experienced team." },
  { icon: <Leaf className="h-6 w-6" />, title: "Sustainable Building", sub: "For a better tomorrow." },
];

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased selection:bg-[#F59E0B] selection:text-[#0F172A]">
      <SiteHeader />

      {/* ══ HERO — full-bleed background image with premium dark overlay ══ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroExtension}
          alt="LOPO Construction"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/92 via-[#0F172A]/75 to-[#0F172A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/50 bg-[#F59E0B]/10 backdrop-blur-sm px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#F59E0B] mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              Building A Stronger Tomorrow
            </div>

            <h1 className="font-display text-5xl font-black leading-[1.1] text-white sm:text-6xl lg:text-7xl">
              Your Vision. <br />
              <span className="text-[#F59E0B]">Our Construction</span><br />
              <span className="text-white">Expertise.</span>
            </h1>

            <p className="mt-6 text-base sm:text-xl leading-relaxed text-slate-300 max-w-xl font-normal">
              We build modern, durable and sustainable structures that stand the test of time. From residential refurbishments to commercial developments across London.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="#quote" className="btn-primary">
                Get Free Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-bold text-white hover:bg-white/20 transition-all">
                Explore Our Services
              </a>
            </div>

            <div className="mt-14 flex items-center gap-10 flex-wrap">
              <div>
                <p className="text-3xl font-black text-white">200+</p>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Projects Completed</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-3xl font-black text-white">10yr</p>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Build Guarantee</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <p className="text-3xl font-black text-[#F59E0B]">5 Star</p>
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Client Rated</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ══ FEATURE BADGES ══ */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((b) => (
              <div key={b.title} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#D97706] border border-[#F59E0B]/30">
                  {b.icon}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-[#0F172A]">{b.title}</h4>
                  <p className="text-xs text-slate-500">{b.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID ══ */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">Our Services</p>
              <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">What We Offer</h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl">
                From residential extensions to full home refurbishments, LOPO Construction provides end-to-end building excellence.
              </p>
            </div>
            <a href="/services" className="btn-secondary shrink-0">
              All Services <ArrowRight className="h-4 w-4 text-[#F59E0B]" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicesWithImages.map((s) => (
              <a key={s.n} href={s.link} className="group build-card overflow-hidden flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3 rounded-full bg-[#0F172A]/85 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-[#F59E0B]">
                    {s.tag}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#1E293B] group-hover:text-[#F59E0B] transition-colors leading-snug">{s.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{s.detail}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-2 text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                    <span>Explore Service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PORTFOLIO SHOWCASE ══ */}
      <section className="bg-white py-20 lg:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">Our Portfolio</p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">Recent Completed Projects</h2>
            <p className="mt-3 text-sm text-slate-600">Take a look at some of our recent construction and renovation work across London.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {portfolioShowcase.map((p) => (
              <div key={p.title} className="build-card overflow-hidden">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] font-bold text-[#F59E0B] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {p.location}
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-[#1E293B] leading-snug">{p.title}</h3>
                  <p className="mt-2 text-xs text-slate-500 border-t border-slate-100 pt-2">{p.specs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BEFORE & AFTER ══ */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">Transformation</p>
            <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">Before &amp; After</h2>
            <p className="mt-3 text-sm text-slate-600">See how LOPO Construction transforms ordinary houses into extraordinary living spaces.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="build-card overflow-hidden p-4">
              <div className="overflow-hidden rounded-xl bg-slate-100">
                <img src={beforeExtension} alt="Before renovation" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="mt-4 flex items-center justify-between px-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Original Condition</span>
                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-bold text-slate-700">Before</span>
              </div>
            </div>
            <div className="build-card overflow-hidden p-4">
              <div className="overflow-hidden rounded-xl bg-slate-100">
                <img src={afterExtension} alt="Completed extension" className="aspect-[4/3] w-full object-cover" />
              </div>
              <div className="mt-4 flex items-center justify-between px-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B]">Completed Project</span>
                <span className="rounded-full bg-[#F59E0B]/20 px-3 py-1 text-xs font-bold text-[#F59E0B]">After</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ AREAS + FAQ ══ */}
      <section className="bg-white py-20 lg:py-24 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            <div id="areas" className="build-card p-8">
              <h3 className="font-display text-2xl font-bold text-[#1E293B]">Areas We Cover Across London</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">Operating throughout Morden, London and surrounding counties. Registered office in Morden, SM4 5HJ.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="rounded-full bg-white border border-slate-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] shadow-sm flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#F59E0B]" /> {a}
                  </li>
                ))}
              </ul>
              <a href="/areas" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B] hover:text-[#D97706] transition-colors">
                <span>View All Areas</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
            <div className="build-card p-8">
              <h3 className="font-display text-2xl font-bold text-[#1E293B]">Frequently Asked Questions</h3>
              <dl className="mt-4">
                {faqs.map((f) => (
                  <div key={f.q} className="py-4 border-t border-slate-100">
                    <dt className="font-bold text-[#0F172A] text-sm">{f.q}</dt>
                    <dd className="mt-1 text-xs leading-relaxed text-slate-600 font-normal">{f.a}</dd>
                  </div>
                ))}
              </dl>
              <a href="/faq" className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B] hover:text-[#D97706] transition-colors">
                <span>View All FAQs</span>
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FREE QUOTE ══ */}
      <section id="quote" className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">Get In Touch</p>
              <h2 className="font-display text-3xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">Request Your Free Quote</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Tell us about your project. We will respond within 24 hours to arrange a free site consultation and provide a written fixed-price quote.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm font-semibold text-[#0F172A]">
                <a className="inline-flex items-center gap-3 hover:text-[#F59E0B] transition-colors" href={`tel:${SITE.phone}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF3C7] text-[#D97706]">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>{SITE.phoneDisplay}</span>
                </a>
                <a className="inline-flex items-center gap-3 hover:text-[#F59E0B] transition-colors" href={`mailto:${SITE.email}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF3C7] text-[#D97706]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>{SITE.email}</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileCta />
    </div>
  );
}
