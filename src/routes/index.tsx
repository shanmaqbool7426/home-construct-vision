import { createFileRoute } from "@tanstack/react-router";

import heroExtension from "@/assets/hero-extension.jpg";
import beforeExtension from "@/assets/before-extension.jpg";
import afterExtension from "@/assets/after-extension.jpg";

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
    <div className="bg-sand-2">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-sand/10 bg-ink/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-sand-2">ARZ</span>
            <span className="hidden text-[11px] uppercase tracking-[0.25em] text-sand/50 sm:inline">
              Construction Ltd
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-sand/70 md:flex">
            <a className="transition-colors hover:text-sand-2" href="#services">
              Services
            </a>
            <a className="transition-colors hover:text-sand-2" href="#projects">
              Projects
            </a>
            <a className="transition-colors hover:text-sand-2" href="#reviews">
              Reviews
            </a>
            <a className="transition-colors hover:text-sand-2" href="#areas">
              Areas
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              className="rounded-md px-3 py-2 text-sm font-medium text-sand/80 transition-transform hover:-translate-y-0.5"
              href={`tel:+44${PHONE.slice(1)}`}
            >
              Call
            </a>
            <a
              className="rounded-md bg-amber px-3 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-ink">
        <div className="relative h-[78vh] min-h-[540px] w-full">
          <img
            src={heroExtension}
            alt="Modern rear house extension at dusk with black-framed glazing and warm interior lighting"
            width={1920}
            height={1088}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-12">
            <p className="reveal mb-4 text-[11px] font-medium uppercase tracking-[0.3em] text-amber">
              Design &amp; Build · Est. 2011
            </p>
            <h1 className="reveal max-w-[20ch] text-5xl font-bold leading-[0.95] text-sand-2 sm:text-6xl lg:text-7xl">
              Space built to be lived in, not just finished.
            </h1>
            <div className="reveal mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[44ch] text-base leading-relaxed text-sand/70">
                Extensions, lofts and full renovations across London and the home counties — measured,
                quoted and built by one accountable team.
              </p>
              <a
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-amber px-5 py-3 text-sm font-semibold text-ink ring-1 ring-amber/60 transition-transform hover:-translate-y-0.5"
                href="#quote"
              >
                Request a free quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-sand-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-sand/40 md:grid-cols-4">
          {trust.map((t) => (
            <div key={t.title} className="bg-sand-2 px-5 py-5">
              <p className="font-display font-semibold text-ink">{t.title}</p>
              <p className="mt-0.5 text-sm text-ink/55">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-sand-2">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-bold text-ink md:text-4xl">What we build</h2>
            <span className="hidden text-sm tabular-nums text-ink/50 sm:block">01 — 08</span>
          </div>
          <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.n} className="rule-top flex items-baseline gap-4 py-4">
                <span className="font-display text-lg font-semibold tabular-nums text-amber">{s.n}</span>
                <div>
                  <p className="font-semibold text-ink">{s.title}</p>
                  <p className="mt-0.5 text-sm text-ink/55">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section id="projects" className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="text-3xl font-bold text-sand-2 md:text-4xl">Before &amp; after</h2>
          <p className="mt-2 max-w-[48ch] text-base leading-relaxed text-sand/60">
            A rear extension in Bromley — from a tired single-storey box to a light-filled living space.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <figure>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={beforeExtension}
                  alt="Dated grey single-storey rear extension before renovation"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-sand/50">
                Before
              </figcaption>
            </figure>
            <figure>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={afterExtension}
                  alt="Completed flat-roof rear extension with full-height glazing and oak interior"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-amber">
                After
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-sand-2">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <h2 className="text-3xl font-bold text-ink md:text-4xl">In the words of our clients</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <figure className="rounded-lg bg-ink p-6 ring-1 ring-ink/5">
              <blockquote className="text-base leading-relaxed text-sand/80">
                “They turned a dark two-bed into a proper family home. On time, on budget, and spotless
                every evening.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-sand/50">— R. Whitmore, Dulwich</figcaption>
            </figure>
            <figure className="rounded-lg bg-sand p-6 ring-1 ring-ink/10">
              <blockquote className="text-base leading-relaxed text-ink/80">
                “The loft conversion is the best money we've spent. Clean joinery, no mess left behind.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-ink/50">— S. Patel, Richmond</figcaption>
            </figure>
            <figure className="rounded-lg bg-ink p-6 ring-1 ring-ink/5">
              <blockquote className="text-base leading-relaxed text-sand/80">
                “One team handled everything from plumbing to the final coat of paint. Genuinely rare.”
              </blockquote>
              <figcaption className="mt-4 text-sm text-sand/50">— D. Okafor, Croydon</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* AREAS + FAQ */}
      <section className="bg-sand-2">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 pb-16 md:grid-cols-2 md:pb-24">
          <div id="areas">
            <h3 className="text-2xl font-bold text-ink">Areas we cover</h3>
            <p className="mt-3 max-w-[40ch] text-base leading-relaxed text-ink/60">
              Serving London and the surrounding home counties, with a base in Bromley.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {areas.map((a) => (
                <li key={a} className="rounded-md bg-sand px-3 py-1.5 text-sm text-ink/70">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-ink">Questions, answered</h3>
            <dl className="mt-4">
              {faqs.map((f) => (
                <div key={f.q} className="rule-top py-4">
                  <dt className="font-medium text-ink">{f.q}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink/55">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="bg-ink">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-sand-2 md:text-4xl">Request your free quotation</h2>
              <p className="mt-3 max-w-[40ch] text-base leading-relaxed text-sand/60">
                Tell us what you're planning. We'll reply within one working day to book a site visit.
              </p>
              <div className="mt-6 flex flex-col gap-2 text-sm text-sand/70">
                <a className="hover:text-sand-2" href={`tel:+44${PHONE.slice(1)}`}>
                  {PHONE_DISPLAY}
                </a>
                <a className="hover:text-sand-2" href="mailto:hello@arzconstruction.co.uk">
                  hello@arzconstruction.co.uk
                </a>
              </div>
            </div>
            <form className="rounded-lg bg-ink-2 p-6 ring-1 ring-sand/10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-xs uppercase tracking-[0.15em] text-sand/50"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-md bg-ink px-3 py-2.5 text-sm text-sand-2 ring-1 ring-sand/15 focus:outline-none focus:ring-amber"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-1 block text-xs uppercase tracking-[0.15em] text-sand/50"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded-md bg-ink px-3 py-2.5 text-sm text-sand-2 ring-1 ring-sand/15 focus:outline-none focus:ring-amber"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="project"
                  className="mb-1 block text-xs uppercase tracking-[0.15em] text-sand/50"
                >
                  Project type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full rounded-md bg-ink px-3 py-2.5 text-sm text-sand-2 ring-1 ring-sand/15 focus:outline-none focus:ring-amber"
                >
                  <option>Rear extension</option>
                  <option>Loft conversion</option>
                  <option>Kitchen / bathroom</option>
                  <option>Full renovation</option>
                  <option>Plumbing / electrical</option>
                </select>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="details"
                  className="mb-1 block text-xs uppercase tracking-[0.15em] text-sand/50"
                >
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={3}
                  className="w-full rounded-md bg-ink px-3 py-2.5 text-sm text-sand-2 ring-1 ring-sand/15 focus:outline-none focus:ring-amber"
                />
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-md bg-amber px-5 py-3 text-sm font-semibold text-ink ring-1 ring-amber/60 transition-transform hover:-translate-y-0.5"
              >
                Send my request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-sand/10 bg-ink-2">
        <div className="mx-auto max-w-6xl px-5 py-12 pb-24 md:pb-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-lg font-bold tracking-tight text-sand-2">ARZ</span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-sand/50">
                  Construction Ltd
                </span>
              </div>
              <p className="mt-3 max-w-[34ch] text-sm leading-relaxed text-sand/55">
                Registered in England · Company No. 07452319 · VAT No. GB 123 4567 89
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm text-sand/60">
              <a className="hover:text-sand-2" href="#">
                Privacy &amp; Cookie Policy
              </a>
              <a className="hover:text-sand-2" href="#">
                Terms &amp; Conditions
              </a>
            </div>
            <div className="flex gap-4 text-sm text-sand/60">
              <a className="hover:text-sand-2" href="#">
                Instagram
              </a>
              <a className="hover:text-sand-2" href="#">
                Facebook
              </a>
              <a className="hover:text-sand-2" href="#">
                LinkedIn
              </a>
            </div>
          </div>
          <p className="mt-8 text-xs text-sand/40">
            © 2026 ARZ Construction Ltd. All rights reserved. Secured with SSL.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-sand/10 bg-ink/95 p-3 backdrop-blur-md md:hidden">
        <a
          className="flex-1 rounded-md px-3 py-3 text-center text-sm font-medium text-sand ring-1 ring-sand/20"
          href={`tel:+44${PHONE.slice(1)}`}
        >
          Call now
        </a>
        <a
          className="flex-1 rounded-md bg-amber px-3 py-3 text-center text-sm font-semibold text-ink"
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
