import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { QuoteForm } from "@/components/QuoteForm";

const TITLE = "Contact ARZ Construction Ltd â€” Free Quote & Consultation | London Construction Specialists";
const DESCRIPTION =
  "Get in touch with ARZ Construction Ltd for a free quote and consultation. London's trusted construction specialists for extensions, loft conversions, and renovations. Call +44 7860 135189.";

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

const PHONE = "447860135189";
const PHONE_DISPLAY = "+44 7860 135189";
const WHATSAPP = "447860135189";
const EMAIL = "Arzconstruction23@gmail.com";

function Contact() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

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
                    ðŸ“ž
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
                    ðŸ’¬
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
                    âœ‰ï¸
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
                    ðŸ“
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-ink">Head Office</h3>
                    <address className="text-sm text-ink/70 not-italic">
                      4th Floor, Silverstream House
                      <br />
                      45 Fitzroy Street, Fitzrovia
                      <br />
                      London
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
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />

      <MobileCta />
    </div>
  );
}
