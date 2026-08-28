import { createFileRoute } from "@tanstack/react-router";

import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "Terms & Conditions — ARZ Construction Ltd";
const DESCRIPTION = "Terms and conditions for ARZ Construction Ltd services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: Terms,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

function Terms() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>Important Information</span>
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
            <a className="transition-colors hover:text-amber" href="/contact">
              Contact
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

      {/* CONTENT */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <div className="mb-12">
            <h1 className="font-serif text-4xl font-bold text-ink mb-4">Terms & Conditions</h1>
            <p className="text-sm text-ink/60">Last updated: August 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-ink/80 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                These terms and conditions govern your use of ARZ Construction Ltd's services. By engaging our services, you agree to these terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">2. Our Services</h2>
              <p className="leading-relaxed">
                ARZ Construction Ltd provides construction, renovation, and related services including but not limited to extensions, loft conversions, kitchen and bathroom renovations, plumbing, and electrical work.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">3. Quotes & Contracts</h2>
              <p className="leading-relaxed mb-3">
                All quotes are provided in good faith and are valid for 30 days unless otherwise stated. Work commences only upon written acceptance of a quote and receipt of deposit.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Quotes are fixed-price unless variations are agreed in writing</li>
                <li>Payment terms are specified in each quote</li>
                <li>Variations to the original scope may incur additional costs</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">4. Guarantees</h2>
              <p className="leading-relaxed">
                We provide a 10-year structural guarantee on all structural work. All materials and workmanship are guaranteed according to manufacturer specifications and industry standards.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">5. Insurance</h2>
              <p className="leading-relaxed">
                ARZ Construction Ltd maintains comprehensive public liability insurance and builder's risk coverage. Certificates are available upon request.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">6. Planning & Building Regulations</h2>
              <p className="leading-relaxed">
                Where required, we handle planning applications and building regulations approvals on your behalf. However, final approval is at the discretion of the relevant authorities.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">7. Limitations</h2>
              <p className="leading-relaxed">
                While we take all reasonable precautions, we cannot be held liable for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm mt-3">
                <li>Damage to existing structures not disclosed prior to work</li>
                <li>Delays caused by factors beyond our control</li>
                <li>Consequential losses arising from project delays</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">8. Dispute Resolution</h2>
              <p className="leading-relaxed">
                Any disputes will be resolved through good faith negotiation. If resolution cannot be reached, disputes will be subject to UK law and the jurisdiction of English courts.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">9. Contact</h2>
              <p className="leading-relaxed">
                For questions about these terms, please contact us at:
              </p>
              <address className="mt-3 not-italic text-sm">
                ARZ Construction Ltd<br />
                4th Floor, Silverstream House<br />
                45 Fitzroy Street, Fitzrovia<br />
                London, W1T 6EB<br />
                Phone: {PHONE_DISPLAY}
              </address>
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
          </div>
          <p className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink/50">
            © 2026 ARZ Construction Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
