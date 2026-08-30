import { createFileRoute } from "@tanstack/react-router";

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

const TITLE = "ARZ Construction Ltd â€” Extensions, Loft Conversions & Renovations in London";
const DESCRIPTION =
  "London construction specialists. Extensions, loft conversions, kitchens, bathrooms, plumbing and electrics â€” fixed-price quotes, fully insured, 10-year guarantee.";

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

const PHONE = "447860135189";
const PHONE_DISPLAY = "+44 7860 135189";
const WHATSAPP = "447860135189";

const servicesWithImages = [
  {
    n: "01",
    title: "Rear & Side Extensions",
    detail: "Open-plan living additions with full-height glazing and structural steelwork.",
    img: afterExtension,
    tag: "Extensions",
    link: "/services/extensions",
  },
  {
    n: "02",
    title: "Bespoke Loft Conversions",
    detail: "Dormer, Velux & hip-to-gable master bedroom suites overlooking London skylines.",
    img: loftConversion,
    tag: "Loft Suite",
    link: "/services/loft-conversions",
  },
  {
    n: "03",
    title: "Luxury Kitchen Renovations",
    detail: "Custom joinery, marble island worktops and Crittall glass garden doors.",
    img: kitchenRenovation,
    tag: "Kitchens",
    link: "/services/kitchen-renovations",
  },
  {
    n: "04",
    title: "Spa Bathrooms & Wetrooms",
    detail: "Microcement wall finishes, freestanding stone tubs and brushed brass fittings.",
    img: bathroomRenovation,
    tag: "Bathrooms",
    link: "/services/bathroom-renovations",
  },
];

const portfolioShowcase = [
  {
    title: "Victorian Master Suite Loft",
    location: "Richmond, London",
    img: loftConversion,
    specs: "Dormer Conversion Â· 12 Weeks Build",
  },
  {
    title: "Open-Plan Crittall Kitchen Extension",
    location: "Dulwich, London",
    img: kitchenRenovation,
    specs: "Rear Extension Â· 14 Weeks Build",
  },
  {
    title: "Microcement Spa Bathroom Refurb",
    location: "Greenwich, London",
    img: bathroomRenovation,
    specs: "Full Wetroom Â· 6 Weeks Build",
  },
  {
    title: "Modern Architectural Extension",
    location: "Bromley, London",
    img: afterExtension,
    specs: "Wraparound Extension Â· 16 Weeks Build",
  },
];

const trust = [
  { title: "Fully insured", detail: "Public liability coverage" },
  { title: "VAT registered", detail: "Verified business" },
  { title: "10-year guarantee", detail: "On structural work" },
  { title: "Fixed-price quotes", detail: "No hidden costs" },
];

const areas = ["Bromley", "Croydon", "Dulwich", "Richmond", "Greenwich", "Kingston", "Guildford", "Reigate"];

const faqs = [
  {
    q: "How long does a typical extension take?",
    a: "Most single-storey projects run 10â€“14 weeks from first fix to handover.",
  },
  {
    q: "Do you handle planning and building regs?",
    a: "Yes â€” we manage applications, drawings and sign-off end to end.",
  },
  {
    q: "Is the quotation really free and fixed?",
    a: "Always. You receive a line-by-line figure that won't drift once agreed.",
  },
];

function Index() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

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
              <span>âœ¨</span>
              <span>Design &amp; Build Â· Est. 2011</span>
            </div>
            <h1 className="reveal max-w-[22ch] font-serif text-5xl font-bold leading-[0.96] text-ink sm:text-6xl lg:text-7xl">
              Space built to be lived in, not just finished.
            </h1>
            <div className="reveal mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-[48ch] text-base sm:text-lg font-normal leading-relaxed text-ink/80">
                Extensions, lofts and full renovations across London and the home counties â€” measured,
                quoted and built by one accountable team.
              </p>
              <a
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-amber px-7 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
                href="#quote"
              >
                Request a free quote â†’
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

      {/* SERVICES WITH LUXURY IMAGES */}
      <section id="services" className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">What We Do</p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">Complete Construction & Renovation Services</h2>
            <p className="mt-4 text-base text-ink/70">Professional construction services across every phase of your project.</p>
            <a
              href="/services"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber hover:text-copper transition-colors"
            >
              <span>View All Services</span>
              <span>â†’</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicesWithImages.map((s) => (
              <a
                key={s.n}
                href={s.link}
                className="luxury-card overflow-hidden rounded-2xl flex flex-col justify-between group no-underline"
              >
                <div>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber shadow-xs">
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-serif text-lg font-bold text-amber">{s.n}</span>
                      <h3 className="font-serif text-xl font-bold text-ink">{s.title}</h3>
                    </div>
                    <p className="text-sm text-ink/70 leading-relaxed font-normal mt-2">{s.detail}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber hover:text-copper transition-colors">
                    <span>View Service</span>
                    <span>â†’</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SHOWCASE GRID */}
      <section id="portfolio" className="border-t border-ink/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-2">Our Recent Projects</p>
              <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">Recently Completed Builds</h2>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <p className="max-w-md text-sm text-ink/70">A selection of recently completed home extensions, lofts, and refurbishments across London.</p>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber hover:text-copper transition-colors"
              >
                <span>View Full Portfolio</span>
                <span>â†’</span>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioShowcase.map((p, idx) => (
              <a
                key={idx}
                href="/projects"
                className="luxury-card overflow-hidden rounded-2xl group no-underline"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber">{p.location}</span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">{p.title}</h3>
                    <p className="text-xs text-sand/80 mt-1 font-medium">{p.specs}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section id="projects" className="border-y border-ink/10 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">Transformation Gallery</p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">Before &amp; After Projects</h2>
            <p className="mt-4 text-base text-ink/70">See how we transform dated properties into modern homes.</p>
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
                <span className="text-xs font-bold uppercase tracking-widest text-amber">Completed Project</span>
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
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">Client Testimonials</p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <figure className="luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber mb-4">â˜…â˜…â˜…â˜…â˜…</div>
                <blockquote className="text-base leading-relaxed text-ink/85 font-normal">
                  â€œThey turned a dark two-bed into a proper family home. On time, on budget, and spotless every evening.â€
                </blockquote>
              </div>
              <figcaption className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="font-serif font-bold text-ink">R. Whitmore</span>
                <span className="text-xs uppercase tracking-wider text-amber font-semibold">Dulwich</span>
              </figcaption>
            </figure>
            <figure className="luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber mb-4">â˜…â˜…â˜…â˜…â˜…</div>
                <blockquote className="text-base leading-relaxed text-ink/85 font-normal">
                  â€œThe loft conversion is the best money we've spent. Clean joinery, no mess left behind.â€
                </blockquote>
              </div>
              <figcaption className="mt-6 pt-4 border-t border-ink/10 flex items-center justify-between">
                <span className="font-serif font-bold text-ink">S. Patel</span>
                <span className="text-xs uppercase tracking-wider text-amber font-semibold">Richmond</span>
              </figcaption>
            </figure>
            <figure className="luxury-card rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber mb-4">â˜…â˜…â˜…â˜…â˜…</div>
                <blockquote className="text-base leading-relaxed text-ink/85 font-normal">
                  â€œOne team handled everything from plumbing to the final coat of paint. Genuinely rare.â€
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
            <h3 className="font-serif text-2xl font-bold text-ink">Areas We Cover Across London</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              Operating throughout London and surrounding areas with headquarters in Fitzrovia.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {areas.map((a) => (
                <li key={a} className="rounded-full bg-sand-2 border border-ink/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink shadow-xs">
                  ðŸ“ {a}
                </li>
              ))}
            </ul>
            <a
              href="/areas"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber hover:text-copper transition-colors"
            >
              <span>View All Areas</span>
              <span>â†’</span>
            </a>
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
            <a
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber hover:text-copper transition-colors"
            >
              <span>View All FAQs</span>
              <span>â†’</span>
            </a>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="border-t border-ink/10 bg-sand/40 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-2">Get In Touch</p>
              <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">Request Your Free Quote</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Tell us about your project. We'll respond within 24 hours to arrange a free site visit and provide a fixed-price quote.
              </p>
              <div className="mt-8 flex flex-col gap-4 text-sm font-semibold text-ink">
                <a className="inline-flex items-center gap-3 hover:text-amber transition-colors" href={`tel:+44${PHONE.slice(1)}`}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 text-amber">ðŸ“ž</span>
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a className="inline-flex items-center gap-3 hover:text-amber transition-colors" href="mailto:Arzconstruction23@gmail.com">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/15 text-amber">âœ‰ï¸</span>
                  <span>Arzconstruction23@gmail.com</span>
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
