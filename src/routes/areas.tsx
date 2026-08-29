import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Areas We Cover — ARZ Construction Ltd | London Construction Services";
const DESCRIPTION =
  "ARZ Construction provides construction services across London and surrounding areas. Extensions, loft conversions, and renovations in Bromley, Croydon, Dulwich, Richmond, Greenwich, and more.";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Areas,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const areas = [
  { name: "Bromley", description: "Extensions, lofts, and renovations across Bromley and surrounding areas." },
  { name: "Croydon", description: "Complete construction services for Croydon homeowners." },
  { name: "Dulwich", description: "Premium construction services in Dulwich and East Dulwich." },
  { name: "Richmond", description: "Extensions and renovations throughout Richmond and Barnes." },
  { name: "Greenwich", description: "Professional construction services across Greenwich and Blackheath." },
  { name: "Kingston", description: "Full construction services in Kingston upon Thames." },
  { name: "Guildford", description: "Extensions, lofts, and renovations in Guildford and surrounding areas." },
  { name: "Reigate", description: "Complete construction services for Reigate homeowners." },
  { name: "Wimbledon", description: "Premium construction services in Wimbledon and SW London." },
  { name: "Clapham", description: "Extensions and renovations throughout Clapham and Battersea." },
  { name: "Putney", description: "Professional construction services in Putney and SW15." },
  { name: "Wandsworth", description: "Full construction services across Wandsworth and Earlsfield." },
];

function Areas() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Our Coverage
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Areas We Cover
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              ARZ Construction provides professional construction services across London and
              surrounding areas. From extensions to full renovations, we're your local trusted
              builders.
            </p>
          </div>
        </div>
      </section>

      {/* AREAS GRID */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              London & Surrounding Areas
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Where We Work
            </h2>
            <p className="mt-4 text-base text-ink/70">
              We provide construction services across these areas and more.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div key={area.name} className="luxury-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📍</span>
                  <h3 className="font-serif text-xl font-bold text-ink">{area.name}</h3>
                </div>
                <p className="text-sm text-ink/70 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-sm text-ink/70">
              Don't see your area? We work across all of London and surrounding Home Counties.{" "}
              <a href="/contact" className="text-amber font-semibold hover:underline">
                Contact us
              </a>{" "}
              to check if we cover your location.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Need Construction Services in Your Area?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Get in touch for a free consultation and fixed-price quote. We serve homeowners across
              all of London and surrounding areas.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
              >
                Request Free Quote
              </a>
              <a
                href={`tel:+44${PHONE.slice(1)}`}
                className="inline-flex items-center justify-center rounded-full border border-ink/15 px-8 py-4 text-sm font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-sand-2"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <MobileCta />
    </div>
  );
}
