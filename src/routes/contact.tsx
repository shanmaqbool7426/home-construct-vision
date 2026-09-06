import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileCta } from "@/components/MobileCta";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE } from "@/lib/site-config";
import { buildSeoMeta, buildCanonical } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildSeoMeta({
      title: "Contact LOPO CONSTRUCTION LIMITED — Free Quote & Consultation",
      description: "Get in touch with LOPO CONSTRUCTION LIMITED for a free quote and consultation. London's trusted construction specialists for extensions, loft conversions, and renovations.",
      path: "/contact",
    }),
    links: buildCanonical("/contact"),
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-white text-[#1E293B] antialiased">
      <SiteHeader />

      {/* HERO */}
      <section className="bg-[#0F172A] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] mb-2">
            Get In Touch
          </p>
          <h1 className="font-display text-4xl font-extrabold text-white sm:text-6xl">
            Contact LOPO Construction
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Ready to start your project? Get in touch for a free consultation and fixed-price written quote. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* CONTACT INFO */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="font-display text-2xl font-extrabold text-[#1E293B]">Contact Details</h2>
              
              <div className="space-y-5">
                <div className="build-card p-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm">Phone</h3>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="text-xs text-slate-600 hover:text-[#F59E0B] transition-colors font-medium"
                    >
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="build-card p-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${SITE.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-slate-600 hover:text-[#25D366] transition-colors font-medium"
                    >
                      Message us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="build-card p-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm">Email</h3>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-xs text-slate-600 hover:text-[#F59E0B] transition-colors font-medium"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                <div className="build-card p-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F172A] text-sm">Registered Office</h3>
                    <address className="text-xs text-slate-600 not-italic leading-relaxed mt-0.5">
                      {SITE.addressLines.map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </address>
                  </div>
                </div>
              </div>

              {/* OFFICE HOURS CARD */}
              <div className="build-card p-6 bg-[#F8FAFC]">
                <h3 className="font-bold text-[#0F172A] text-base mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#F59E0B]" />
                  Standard Office Hours
                </h3>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span>Monday – Saturday</span>
                    <span className="font-bold text-[#0F172A]">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Sunday</span>
                    <span className="font-bold text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="lg:col-span-8">
              <div className="build-card p-8 sm:p-10">
                <h2 className="font-display text-2xl font-extrabold text-[#1E293B] mb-2">
                  Request Your Free Quote
                </h2>
                <p className="text-xs text-slate-600 mb-8">
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
