import { createFileRoute } from "@tanstack/react-router";

import heroExtension from "@/assets/hero-extension.jpg";
import beforeExtension from "@/assets/before-extension.jpg";
import afterExtension from "@/assets/after-extension.jpg";
import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "ARZ Construction Ltd — Extensions, Loft Conversions & Renovations";
const DESCRIPTION =
  "London design-and-build specialists. Extensions, loft conversions, kitchens, bathrooms, plumbing and electrics — fixed-price quotes, fully insured, 10-year guarantee.";

export const Route = createFileRoute("/")({
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

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const services = [
  { n: "01", title: "House renovations", detail: "Full and partial refurbishments" },
  { n: "02", title: "Rear, side & wraparound extensions", detail: "Ground & single-storey additions" },
  { n: "03", title: "Loft conversions", detail: "Velux, dormer & hip-to-gable" },
  { n: "04", title: "Kitchen renovations", detail: "Design, joinery & stone worktops" },
  { n: "05", title: "Bathroom renovations", detail: "Wet rooms, tiling & fittings" },
  { n: "06", title: "Plumbing", detail: "Heating, pipework & radiators" },
  { n: "07", title: "Electrical", detail: "Rewires, lighting & certification" },
  { n: "08", title: "Roofing, plastering & decorating", detail: "Finishing trades under one roof" },
];

const trust = [
  { title: "Fully insured", detail: "Public liability & builder's risk" },
  { title: "VAT registered", detail: "GB 123 4567 89" },
  { title: "10-year guarantee", detail: "On all structural work" },
  { title: "Fixed-price quotes", detail: "No surprises, line by line" },
];

const areas = ["Bromley", "Croydon", "Dulwich", "Richmond", "Greenwich", "Kingston", "Guildford", "Reigate"];

const faqs = [
  {
    q: "How long does a typical extension take?",
    a: "Most single-storey projects run 10–14 weeks from first fix to handover.",
  },
  {
    q: "Do you handle planning and building regs?",
    a: "Yes — we manage applications, drawings and sign-off end to end.",
  },
  {
    q: "Is the quotation really free and fixed?",
    a: "Always. You receive a line-by-line figure that won't drift once agreed.",
  },
];

function Index() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>London Design &amp; Build Specialists · Fixed-Price Guaranteed Quotes</span>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand-2/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <ArzLogo size="md" theme="light" />
          <nav className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-ink/80 md:flex">
            <a className="transition-colors hover:text-amber" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-amber" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-amber" href="#reviews">
              Reviews
            </a>
            <a className="transition-colors hover:text-amber" href="#areas">
              Areas
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex rounded-full border border-ink/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-sand-2"
              href={`tel:+44${PHONE.slice(1)}`}
            >
              {PHONE_DISPLAY}
            </a>
            <a
              className="rounded-full bg-amber px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-copper hover:shadow-lg hover:-translate-y-0.5"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-sand-2">
        <div className="relative h-[82vh] min-h-[560px] w-full">
          <img
            src={heroExtension}
            alt="Modern rear house extension at dusk with black-framed glazing and warm interior lighting"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Subtle rich gradient overlay blending smoothly into warm ivory page theme */}
          <div className="absolute inset-0 bg-gradient-to-t from-sand-2 via-sand-2/70 to-sand-2/20" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-16">
            <div className="reveal inline-flex items-center gap-2 self-start rounded-full border border-amber/30 bg-white/80 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber mb-4 shadow-sm">
              <span>✨</span>
              <span>Design &amp; Build · Est. 2011</span>
            </div>
            <h1 className="reveal max-w-[22ch] font-serif text-5xl font-bold leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
              Space built to be lived in, not just finished.
            </h1>
            <div className="reveal mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[48ch] text-base sm:text-lg font-normal leading-relaxed text-ink/80">
                Extensions, lofts and full renovations across London and the home counties — measured,
                quoted and built by one accountable team.
              </p>
              <a
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-amber px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
                href="#quote"
              >
                Request a free quote →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BANNER */}
      <section className="border-y border-ink/10 bg-white py-6">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {trust.map((t) => (
              <div key={t.title} className="p-2">
                <p className="font-serif text-lg font-bold text-ink">{t.title}</p>
                <p className="mt-1 text-xs text-ink/60 font-medium">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">Our Expertise</p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">Bespoke Construction &amp; Build Services</h2>
            <p className="mt-4 text-base text-ink/70">From conception to turnkey completion, managed seamlessly under one roof.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.n} className="luxury-card rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif text-2xl font-bold text-amber">{s.n}</span>
                    <span className="h-2 w-2 rounded-full bg-amber" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-ink mb-2">{s.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed font-normal">{s.detail}</p>
                </div>
                <a href="#quote" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber hover:text-copper transition-colors">
                  <span>Enquire Service</span>
                  <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section id="projects" className="border-y border-ink/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">Transformation Gallery</p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">Before &amp; After Masterpieces</h2>
            <p className="mt-4 text-base text-ink/70">Observe how we transform dated properties into modern luxury residences.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <figure className="luxury-card overflow-hidden rounded-2xl p-4">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={beforeExtension}
                  alt="Dated grey single-storey rear extension before renovation"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between px-2">
                <span className="text-xs font-bold uppercase tracking-widest text-ink/50">Original Condition</span>
                <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/60">Before</span>
              </figcaption>
            </figure>
            <figure className="luxury-card overflow-hidden rounded-2xl p-4 border-amber/30">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={afterExtension}
                  alt="Completed flat-roof rear extension with full-height glazing and oak interior"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between px-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber">Architectural Handover</span>
                <span className="rounded-full bg-amber/15 px-3 py-1 text-xs font-bold text-amber">After</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">Client Trust</p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">Words of Praise from Homeowners</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <figure className="luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber mb-4">★★★★★</div>
                <blockquote className="text-base leading-relaxed text-ink/85 font-normal">
                  “They turned a dark two-bed into a proper family home. On time, on budget, and spotless every evening.”
                </blockquote>
              </div>
              <figcaption className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="font-serif font-bold text-ink">R. Whitmore</span>
                <span className="text-xs uppercase tracking-wider text-amber font-semibold">Dulwich</span>
              </figcaption>
            </figure>
            <figure className="luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber mb-4">★★★★★</div>
                <blockquote className="text-base leading-relaxed text-ink/85 font-normal">
                  “The loft conversion is the best money we've spent. Clean joinery, no mess left behind.”
                </blockquote>
              </div>
              <figcaption className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="font-serif font-bold text-ink">S. Patel</span>
                <span className="text-xs uppercase tracking-wider text-amber font-semibold">Richmond</span>
              </figcaption>
            </figure>
            <figure className="luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber mb-4">★★★★★</div>
                <blockquote className="text-base leading-relaxed text-ink/85 font-normal">
                  “One team handled everything from plumbing to the final coat of paint. Genuinely rare.”
                </blockquote>
              </div>
              <figcaption className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="font-serif font-bold text-ink">D. Okafor</span>
                <span className="text-xs uppercase tracking-wider text-amber font-semibold">Croydon</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* AREAS + FAQ */}
      <section className="bg-sand-2 pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-2">
          <div id="areas" className="luxury-card rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-ink">Coverage Across Greater London</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Operating throughout London and premium Home Counties with headquarters in Bromley.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <li key={a} className="rounded-full bg-sand-2 border border-ink/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-xs">
                  📍 {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="luxury-card rounded-2xl p-8">
            <h3 className="font-serif text-2xl font-bold text-ink">Frequently Asked Questions</h3>
            <dl className="mt-4">
              {faqs.map((f) => (
                <div key={f.q} className="rule-top py-4 border-ink/10">
                  <dt className="font-serif font-bold text-ink">{f.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink/70 font-normal">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="border-t border-ink/10 bg-sand/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-2">Begin Your Journey</p>
              <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">Request Your Consultation</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Share your architectural vision with us. We respond within 24 hours to schedule a complimentary site valuation.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm font-semibold text-ink">
                <a className="inline-flex items-center gap-3 hover:text-amber transition-colors" href={`tel:+44${PHONE.slice(1)}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 text-amber">📞</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a className="inline-flex items-center gap-3 hover:text-amber transition-colors" href="mailto:hello@arzconstruction.co.uk">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 text-amber">✉️</span>
                  <span>hello@arzconstruction.co.uk</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-7">
              <form className="luxury-card rounded-2xl p-8 sm:p-10 border-amber/20 shadow-xl">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Alexander Wright"
                      className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                    >
                      Telephone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. 07700 900000"
                      className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="project"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                  >
                    Scope of Project
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                  >
                    <option>Rear / Side Architectural Extension</option>
                    <option>Bespoke Loft Conversion</option>
                    <option>Luxury Kitchen / Bathroom Refurbishment</option>
                    <option>Full Structural Home Renovation</option>
                    <option>Complete Mechanical &amp; Electrical Rewire</option>
                  </select>
                </div>
                <div className="mt-6">
                  <label
                    htmlFor="details"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                  >
                    Project Overview
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    placeholder="Briefly describe your space and intended timeline..."
                    className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full rounded-xl bg-amber px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
                >
                  Submit Quote Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 bg-sand-2 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div>
              <ArzLogo size="lg" theme="light" />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
                Registered in England &amp; Wales · Company No. 07452319 · VAT No. GB 123 4567 89
              </p>
            </div>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-ink/75">
              <a className="hover:text-amber transition-colors" href="#">
                Privacy &amp; Cookie Policy
              </a>
              <a className="hover:text-amber transition-colors" href="#">
                Terms &amp; Conditions
              </a>
            </div>
            <div className="flex gap-5 text-sm font-bold text-ink/75">
              <a className="hover:text-amber transition-colors" href="#">
                Instagram
              </a>
              <a className="hover:text-amber transition-colors" href="#">
                Facebook
              </a>
              <a className="hover:text-amber transition-colors" href="#">
                LinkedIn
              </a>
            </div>
          </div>
          <p className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink/50">
            © 2026 ARZ Construction Ltd. All rights reserved. Built with architectural precision.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-sand-2/95 p-3 backdrop-blur-md md:hidden">
        <a
          className="flex-1 rounded-xl bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-ink ring-1 ring-ink/15 shadow-xs"
          href={`tel:+44${PHONE.slice(1)}`}
        >
          Call Studio
        </a>
        <a
          className="flex-1 rounded-xl bg-amber px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm"
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp Us
        </a>
      </div>
    </div>
  );
}
