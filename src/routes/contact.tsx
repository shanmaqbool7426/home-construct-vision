import { createFileRoute } from "@tanstack/react-router";

import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "Contact ARZ Construction Ltd — Free Quote & Consultation | London Construction Specialists";
const DESCRIPTION =
  "Get in touch with ARZ Construction Ltd for a free quote and consultation. London's trusted construction specialists for extensions, loft conversions, and renovations. Call 020 7946 0000.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Contact,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";
const EMAIL = "info@arzconstruction.co.uk";

function Contact() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>Free Quotes · Fast Response · Fixed-Price Guaranteed</span>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-sand-2/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/">
            <ArzLogo size="md" theme="light" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-semibold tracking-wide text-ink/80 md:flex">
            <a className="transition-colors hover:text-amber" href="/">
              Home
            </a>
            <a className="transition-colors hover:text-amber" href="/about">
              About
            </a>
            <a className="transition-colors hover:text-amber" href="/services">
              Services
            </a>
            <a className="transition-colors hover:text-amber" href="/projects">
              Projects
            </a>
            <a className="transition-colors hover:text-amber" href="/reviews">
              Reviews
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
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Contact ARZ Construction
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Ready to start your project? Get in touch for a free consultation and fixed-price
              quote. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* CONTACT INFO */}
            <div className="lg:col-span-4">
              <h2 className="font-serif text-2xl font-bold text-ink mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber/10 text-2xl">
                    📞
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-ink">Phone</h3>
                    <a
                      href={`tel:+44${PHONE.slice(1)}`}
                      className="text-sm text-ink/70 hover:text-amber transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber/10 text-2xl">
                    💬
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-ink">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${WHATSAPP}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink/70 hover:text-amber transition-colors"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber/10 text-2xl">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-ink">Email</h3>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-sm text-ink/70 hover:text-amber transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber/10 text-2xl">
                    📍
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-ink">Head Office</h3>
                    <address className="text-sm text-ink/70 not-italic">
                      4th Floor, Silverstream House
                      <br />
                      45 Fitzroy Street, Fitzrovia
                      <br />
                      London, W1T 6EB
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-8 luxury-card rounded-2xl p-6">
                <h3 className="font-serif text-lg font-bold text-ink mb-3">Opening Hours</h3>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-ink/10">
                    <p className="text-xs text-ink/60">
                      24/7 emergency service available for plumbing and electrical emergencies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="lg:col-span-8">
              <div className="luxury-card rounded-2xl p-8 sm:p-10">
                <h2 className="font-serif text-2xl font-bold text-ink mb-2">
                  Request Your Free Quote
                </h2>
                <p className="text-sm text-ink/70 mb-8">
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="e.g. 07700 900000"
                        className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="project"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                      >
                        Project Type *
                      </label>
                      <select
                        id="project"
                        name="project"
                        required
                        className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                      >
                        <option value="">Select project type</option>
                        <option>House Renovation</option>
                        <option>Rear Extension</option>
                        <option>Side Extension</option>
                        <option>Wraparound Extension</option>
                        <option>Loft Conversion</option>
                        <option>Kitchen Renovation</option>
                        <option>Bathroom Renovation</option>
                        <option>Plumbing Work</option>
                        <option>Electrical Work</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="postcode"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                      >
                        Property Postcode *
                      </label>
                      <input
                        id="postcode"
                        name="postcode"
                        type="text"
                        required
                        placeholder="e.g. SE1 2AB"
                        className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                      >
                        <option value="">Select budget range</option>
                        <option>Under £20,000</option>
                        <option>£20,000 - £50,000</option>
                        <option>£50,000 - £100,000</option>
                        <option>£100,000 - £200,000</option>
                        <option>Over £200,000</option>
                        <option>Prefer not to say</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="start"
                        className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                      >
                        Preferred Start Date
                      </label>
                      <input
                        id="start"
                        name="start"
                        type="text"
                        placeholder="e.g. ASAP, 3 months"
                        className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="details"
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      rows={4}
                      required
                      placeholder="Please describe your project, including any specific requirements or ideas..."
                      className="w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contact"
                          value="phone"
                          className="accent-amber"
                        />
                        <span className="text-sm text-ink/80">Phone</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contact"
                          value="whatsapp"
                          className="accent-amber"
                        />
                        <span className="text-sm text-ink/80">WhatsApp</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contact"
                          value="email"
                          className="accent-amber"
                        />
                        <span className="text-sm text-ink/80">Email</span>
                      </label>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-amber px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Request My Free Quote
                  </button>
                </form>
              </div>
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
              <div className="mt-4 max-w-sm space-y-2 text-sm leading-relaxed text-ink/65">
                <p className="font-semibold text-ink/80">Head Office</p>
                <p>
                  4th Floor, Silverstream House
                  <br />
                  45 Fitzroy Street, Fitzrovia
                  <br />
                  London, W1T 6EB
                </p>
                <p className="mt-3">
                  Registered in England & Wales
                  <br />
                  Company details available on request
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 text-sm font-medium text-ink/75">
              <a className="hover:text-amber transition-colors" href="/privacy">
                Privacy & Cookie Policy
              </a>
              <a className="hover:text-amber transition-colors" href="/terms">
                Terms & Conditions
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
            © 2026 ARZ Construction Ltd. All rights reserved.
          </p>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-sand-2/95 p-3 backdrop-blur-md md:hidden">
        <a
          className="flex-1 rounded-xl bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-ink ring-1 ring-ink/15 shadow-xs"
          href={`tel:+44${PHONE.slice(1)}`}
        >
          Call Us
        </a>
        <a
          className="flex-1 rounded-xl bg-amber px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm"
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
