import { createFileRoute } from "@tanstack/react-router";

import heroExtension from "@/assets/hero-extension.jpg";
import afterExtension from "@/assets/after-extension.jpg";
import kitchenRenovation from "@/assets/kitchen-renovation.jpg";
import loftConversion from "@/assets/loft-conversion.jpg";
import bathroomRenovation from "@/assets/bathroom-renovation.jpg";
import beforeExtension from "@/assets/before-extension.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Projects & Gallery â€” ARZ Construction Ltd | Recent London Construction Projects";
const DESCRIPTION =
  "View our portfolio of recently completed construction projects across London. Extensions, loft conversions, kitchen and bathroom renovations. Before and after photos.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Projects,
});

const PHONE = "447860135189";
const PHONE_DISPLAY = "+44 7860 135189";

const projects = [
  {
    title: "Victorian Master Suite Loft",
    location: "Richmond, London",
    type: "Loft Conversion",
    duration: "12 Weeks",
    description:
      "Dormer loft conversion creating a master bedroom with ensuite bathroom. Structural steelwork, Velux windows, and bespoke joinery.",
    img: loftConversion,
  },
  {
    title: "Open-Plan Kitchen Extension",
    location: "Dulwich, London",
    type: "Rear Extension",
    duration: "14 Weeks",
    description:
      "Single-storey rear extension with full-height glazing and bi-fold doors. Created a spacious open-plan kitchen-diner.",
    img: kitchenRenovation,
  },
  {
    title: "Microcement Spa Bathroom",
    location: "Greenwich, London",
    type: "Bathroom Renovation",
    duration: "6 Weeks",
    description:
      "Complete bathroom refurbishment with microcement walls, freestanding bath, and underfloor heating. Luxury spa retreat.",
    img: bathroomRenovation,
  },
  {
    title: "Modern Architectural Extension",
    location: "Bromley, London",
    type: "Wraparound Extension",
    duration: "16 Weeks",
    description:
      "Wraparound extension combining rear and side extensions. Created additional living space and ground-floor bathroom.",
    img: afterExtension,
  },
  {
    title: "Period Property Restoration",
    location: "Kingston, London",
    type: "House Renovation",
    duration: "20 Weeks",
    description:
      "Full structural refurbishment of Victorian property. Restored period features while upgrading to modern standards.",
    img: heroExtension,
  },
  {
    title: "Contemporary Family Bathroom",
    location: "Croydon, London",
    type: "Bathroom Renovation",
    duration: "5 Weeks",
    description:
      "Family bathroom renovation with walk-in shower, vanity units, and underfloor heating. Practical and stylish.",
    img: bathroomRenovation,
  },
];

const beforeAfter = [
  {
    title: "Rear Extension Transformation",
    before: beforeExtension,
    after: afterExtension,
  },
];

function Projects() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Our Portfolio
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Recent Projects & Gallery
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              View our portfolio of recently completed construction projects across London. Each
              project showcases our commitment to quality craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Completed Projects
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Our Recent Work
            </h2>
            <p className="mt-4 text-base text-ink/70">
              A selection of recently completed projects across London.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="luxury-card overflow-hidden rounded-2xl group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber shadow-sm">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-serif text-xl font-bold text-ink">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-ink/60 mb-3">
                    <span>ðŸ“ {project.location}</span>
                    <span>â±ï¸ {project.duration}</span>
                  </div>
                  <p className="text-sm text-ink/70 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Transformations
            </p>
            <h2 className="font-serif text-3xl font-bold text-ink md:text-5xl">
              Before & After
            </h2>
            <p className="mt-4 text-base text-ink/70">
              See the dramatic transformations we achieve.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {beforeAfter.map((item) => (
              <div key={item.title} className="space-y-4">
                <div className="luxury-card overflow-hidden rounded-2xl">
                  <div className="relative">
                    <img
                      src={item.before}
                      alt={`${item.title} - Before`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-ink/80 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                      Before
                    </div>
                  </div>
                </div>
                <div className="luxury-card overflow-hidden rounded-2xl border-amber/30">
                  <div className="relative">
                    <img
                      src={item.after}
                      alt={`${item.title} - After`}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4 rounded-full bg-amber/90 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                      After
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-ink text-center">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="luxury-card rounded-2xl p-10 text-center md:p-16">
            <h2 className="font-serif text-3xl font-bold text-ink md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Let's discuss your vision. Book a free consultation and receive a fixed-price quote
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
