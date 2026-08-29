import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";

const TITLE = "Frequently Asked Questions — ARZ Construction Ltd | London Construction FAQs";
const DESCRIPTION =
  "Find answers to common questions about our construction services. Extensions, loft conversions, renovations, quotes, timelines, and more.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: FAQ,
});

const PHONE = "02079460000";
const PHONE_DISPLAY = "020 7946 0000";
const WHATSAPP = "447700900000";

const faqs = [
  {
    category: "General",
    questions: [
      {
        q: "What areas do you cover?",
        a: "We provide construction services across London and surrounding Home Counties. Our main areas include Bromley, Croydon, Dulwich, Richmond, Greenwich, Kingston, Guildford, and Reigate. Contact us to check if we cover your specific location.",
      },
      {
        q: "Are you insured?",
        a: "Yes, we are fully insured with comprehensive public liability insurance and builder's risk coverage. All our work is protected for your peace of mind.",
      },
      {
        q: "Do you provide guarantees?",
        a: "Yes, all our structural work comes with a 10-year structural guarantee. We also provide guarantees on all materials and workmanship.",
      },
      {
        q: "Are your plumbers and electricians qualified?",
        a: "Yes, all our plumbers are Gas Safe registered and our electricians are NICEIC approved contractors. All work is certified and compliant with current regulations.",
      },
    ],
  },
  {
    category: "Quotes & Pricing",
    questions: [
      {
        q: "How do I get a quote?",
        a: "Simply contact us by phone, email, or through our online form. We'll arrange a free site visit to discuss your project and provide a detailed, fixed-price quote within 48 hours.",
      },
      {
        q: "Are your quotes really fixed-price?",
        a: "Yes, our quotes are comprehensive and fixed-price. The price we quote is the price you pay — there are no hidden costs or surprise charges.",
      },
      {
        q: "How long does it take to get a quote?",
        a: "We provide detailed quotes within 48 hours of the site visit. For larger projects, it may take up to a week to ensure accuracy.",
      },
      {
        q: "Do you charge for site visits?",
        a: "No, all site visits and consultations are completely free with no obligation.",
      },
    ],
  },
  {
    category: "Project Timeline",
    questions: [
      {
        q: "How long does a typical extension take?",
        a: "Most single-storey extensions take 10-14 weeks from start to finish. Larger or more complex projects may take longer. We provide detailed timelines with every quote.",
      },
      {
        q: "How long does a loft conversion take?",
        a: "Most loft conversions take 8-12 weeks to complete. The exact timeline depends on the type of conversion and complexity of the work.",
      },
      {
        q: "Will you provide a timeline before starting?",
        a: "Yes, we provide detailed project timelines before work begins. You'll know exactly when each phase will start and finish.",
      },
      {
        q: "What happens if there are delays?",
        a: "We keep you informed of any potential delays immediately. Our project managers work to minimize disruptions and keep your project on track.",
      },
    ],
  },
  {
    category: "Planning & Building Regulations",
    questions: [
      {
        q: "Do I need planning permission?",
        a: "Many extensions and loft conversions fall under Permitted Development rights and don't require planning permission. We'll advise you on your specific project and handle all applications if needed.",
      },
      {
        q: "Do you handle building regulations?",
        a: "Yes, we handle all building regulations applications, inspections, and sign-offs. All our work is fully compliant and certified.",
      },
      {
        q: "Will I receive certificates?",
        a: "Yes, you'll receive all necessary completion certificates including building control sign-off, electrical certificates, and gas safety certificates where applicable.",
      },
    ],
  },
  {
    category: "During the Project",
    questions: [
      {
        q: "Will I have a dedicated project manager?",
        a: "Yes, every project has a dedicated project manager who is your single point of contact throughout the build.",
      },
      {
        q: "How often will I receive updates?",
        a: "We provide weekly progress reports and hold regular site meetings to keep you informed of progress and any decisions needed.",
      },
      {
        q: "Do you clean up after yourselves?",
        a: "Yes, we maintain clean, safe worksites. We clean up daily and ensure minimal disruption to your home life.",
      },
      {
        q: "Can I make changes during the project?",
        a: "While we try to accommodate changes, it's best to finalize all decisions before work begins. Changes during construction may affect timeline and cost.",
      },
    ],
  },
];

function FAQ() {
  return (
    <div className="bg-sand-2 text-ink selection:bg-amber selection:text-white">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-sand-2 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber mb-3">
              Got Questions?
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Find answers to common questions about our construction services, quotes, timelines,
              and the building process.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTIONS */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <div className="space-y-12">
            {faqs.map((section) => (
              <div key={section.category}>
                <h2 className="font-serif text-2xl font-bold text-ink mb-6 pb-3 border-b-2 border-amber/20">
                  {section.category}
                </h2>
                <div className="space-y-6">
                  {section.questions.map((faq) => (
                    <div key={faq.q} className="luxury-card rounded-2xl p-6">
                      <h3 className="font-serif text-lg font-bold text-ink mb-3">{faq.q}</h3>
                      <p className="text-sm text-ink/75 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
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
              Still Have Questions?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink/75 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Get in touch with our team. We're happy to
              help.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-amber px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5"
              >
                Contact Us
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
