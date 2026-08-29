import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

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

const PHONE_DISPLAY = "020 7946 0000";

function Terms() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

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

      <SiteFooter />
    </div>
  );
}
