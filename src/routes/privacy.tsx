import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Privacy & Cookie Policy â€” ARZ Construction Ltd";
const DESCRIPTION = "Privacy and cookie policy for ARZ Construction Ltd website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
    ],
  }),
  component: Privacy,
});

const PHONE_DISPLAY = "+44 7860 135189";

function Privacy() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* CONTENT */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <div className="mb-12">
            <h1 className="font-serif text-4xl font-bold text-ink mb-4">Privacy & Cookie Policy</h1>
            <p className="text-sm text-ink/60">Last updated: August 2026</p>
          </div>

          <div className="prose prose-lg max-w-none text-ink/80 space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Introduction</h2>
              <p className="leading-relaxed">
                ARZ Construction Ltd ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information when you use our website or services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Information We Collect</h2>
              <p className="leading-relaxed mb-3">We may collect and process the following data:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Name, email address, and phone number when you contact us</li>
                <li>Property address and project details for quotes</li>
                <li>Technical information about your device and browser</li>
                <li>Cookies and usage data</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">How We Use Your Information</h2>
              <p className="leading-relaxed mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Respond to your enquiries and provide quotes</li>
                <li>Deliver our construction services</li>
                <li>Communicate with you about your project</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Cookies</h2>
              <p className="leading-relaxed">
                Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Data Protection</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information. We do not sell or share your data with third parties except as required to deliver our services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Your Rights</h2>
              <p className="leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-ink mb-4">Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <address className="mt-3 not-italic text-sm">
                ARZ Construction Ltd<br />
                4th Floor, Silverstream House<br />
                45 Fitzroy Street, Fitzrovia<br />
                London<br />
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
