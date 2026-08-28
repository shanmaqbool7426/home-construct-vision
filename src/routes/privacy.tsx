import { createFileRoute } from "@tanstack/react-router";

import { ArzLogo } from "@/components/ArzLogo";

const TITLE = "Privacy & Cookie Policy — ARZ Construction Ltd";
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

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

function Privacy() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>Your Privacy Matters</span>
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
