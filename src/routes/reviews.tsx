import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Customer Reviews — ARZ Construction Ltd | What Our Clients Say";
const DESCRIPTION =
  "Read genuine reviews from our satisfied clients across London. See why homeowners trust ARZ Construction for their extensions, loft conversions, and renovations.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Reviews,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const reviews = [
  {
    name: "R. Whitmore",
    location: "Dulwich, London",
    rating: 5,
    text: "They turned a dark two-bed into a proper family home. On time, on budget, and spotless every evening. The team was professional and the quality of work exceeded our expectations.",
    project: "House Renovation",
  },
  {
    name: "S. Patel",
    location: "Richmond, London",
    rating: 5,
    text: "The loft conversion is the best money we've spent. Clean joinery, no mess left behind. The team was respectful of our home and completed the work exactly as promised.",
    project: "Loft Conversion",
  },
  {
    name: "D. Okafor",
    location: "Croydon, London",
    rating: 5,
    text: "One team handled everything from plumbing to the final coat of paint. Genuinely rare. The project manager kept us informed throughout and the finish quality is outstanding.",
    project: "Full Renovation",
  },
  {
    name: "M. Thompson",
    location: "Greenwich, London",
    rating: 5,
    text: "Our kitchen extension transformed our home. The design team understood exactly what we wanted and the construction team delivered it perfectly. Highly recommended.",
    project: "Kitchen Extension",
  },
  {
    name: "J. Anderson",
    location: "Bromley, London",
    rating: 5,
    text: "Professional from start to finish. The quote was detailed and accurate, no hidden costs. The bathroom renovation is stunning - exactly what we wanted.",
    project: "Bathroom Renovation",
  },
  {
    name: "L. Martinez",
    location: "Kingston, London",
    rating: 5,
    text: "We had a wraparound extension built and couldn't be happier. The team was skilled, punctual, and the quality is excellent. Would definitely use again.",
    project: "Wraparound Extension",
  },
];

function Reviews() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Client Testimonials
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              What Our Clients Say
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Don't just take our word for it. Read genuine reviews from homeowners across London who
              trusted ARZ Construction with their projects.
            </p>
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="luxury-card rounded-2xl p-8 flex flex-col">
                <div className="flex gap-1 text-amber mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed text-ink/85 font-normal flex-1">
                  "{review.text}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-ink/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-serif font-bold text-ink">{review.name}</p>
                      <p className="text-xs text-ink/60 mt-1">{review.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-semibold uppercase tracking-wider text-amber">
                        {review.project}
                      </p>
                    </div>
                  </div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Join our satisfied clients. Book a free consultation and receive a fixed-price quote
              within 48 hours.
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
