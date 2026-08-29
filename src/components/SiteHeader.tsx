import { useState } from "react";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { ArzLogo } from "@/components/ArzLogo";
import { SITE, NAV_SERVICES } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Areas", href: "/areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-ink text-sand-2 text-xs py-2 px-4 text-center tracking-wider uppercase font-medium flex items-center justify-center gap-2 border-b border-amber/20">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
        <span>London Design &amp; Build Specialists · Fixed-Price Guaranteed Quotes</span>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand-2/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" aria-label="ARZ Construction home">
            <ArzLogo size="md" theme="light" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-7 text-sm font-semibold tracking-wide text-ink/80 lg:flex">
            <a className="transition-colors hover:text-amber" href="/">
              Home
            </a>

            {/* SERVICES MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a
                href="/services"
                className="inline-flex items-center gap-1 transition-colors hover:text-amber"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </a>
              <div
                className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  servicesOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-1"
                }`}
              >
                <div className="w-[540px] rounded-2xl border border-ink/10 bg-white p-4 shadow-2xl shadow-ink/10">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="col-span-2 px-3 py-1">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber">
                        Our Services
                      </p>
                    </div>
                    {NAV_SERVICES.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-sand-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                        <span>
                          <span className="block text-sm font-bold text-ink transition-colors group-hover:text-amber">
                            {s.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-ink/60">
                            {s.description}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-2 border-t border-ink/10 px-3 pt-3">
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber hover:text-copper transition-colors"
                    >
                      <span>View All Services</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {NAV_LINKS.filter((l) => l.label !== "Home" && l.label !== "Services").map((l) => (
              <a key={l.href} className="transition-colors hover:text-amber" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* HEADER ACTIONS */}
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink transition-all hover:bg-ink hover:text-sand-2"
              href={`tel:+44${SITE.phone.slice(1)}`}
            >
              <Phone className="h-3.5 w-3.5" />
              {SITE.phoneDisplay}
            </a>
            <a
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-copper hover:shadow-lg hover:-translate-y-0.5"
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp Us
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <nav className="border-t border-ink/10 bg-sand-2 lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-bold text-ink hover:bg-sand"
              >
                Home
              </a>
              <p className="px-3 pt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber">
                Services
              </p>
              {NAV_SERVICES.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 hover:bg-sand hover:text-ink"
                >
                  {s.title}
                </a>
              ))}
              <a
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-bold text-amber hover:bg-sand"
              >
                All Services →
              </a>
              {NAV_LINKS.filter((l) => l.label !== "Home").map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-bold text-ink hover:bg-sand"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
