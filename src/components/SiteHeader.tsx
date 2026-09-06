import { useState } from "react";
import { Menu, X, ChevronDown, Phone, Clock, ArrowRight } from "lucide-react";
import { LOPOLogo } from "@/components/LopoLogo";
import { SITE, NAV_SERVICES } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Areas", href: "/areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* TOP ANNOUNCEMENT & HOURS BAR */}
      <div className="bg-[#020617] text-slate-300 text-xs py-2 px-6 text-center font-semibold flex flex-wrap items-center justify-between gap-2 border-b border-[#F59E0B]/20">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
          <span className="uppercase tracking-wider">London Design &amp; Build Specialists</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] text-slate-300">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-[#F59E0B]" />
            {SITE.workingHoursShort}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-[#F59E0B] font-bold">Fixed-Price Guaranteed Quotes</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0F172A] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" aria-label="LOPO Construction home">
            <LOPOLogo size="md" theme="dark" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm font-bold tracking-wide text-slate-200 lg:flex">
            <a className="transition-colors hover:text-[#F59E0B]" href="/">
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
                className="inline-flex items-center gap-1 transition-colors hover:text-[#F59E0B]"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-[#F59E0B]" : ""}`}
                />
              </a>
              <div
                className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
                  servicesOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-1"
                }`}
              >
                <div className="w-[540px] rounded-2xl border border-slate-800 bg-[#0F172A] p-5 shadow-2xl">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="col-span-2 px-3 py-1 mb-1">
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#F59E0B]">
                        Our Construction Services
                      </p>
                    </div>
                    {NAV_SERVICES.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-800"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#F59E0B]" />
                        <span>
                          <span className="block text-sm font-bold text-white transition-colors group-hover:text-[#F59E0B]">
                            {s.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-slate-400">
                            {s.description}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-3 border-t border-slate-800 px-3 pt-3">
                    <a
                      href="/services"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F59E0B] hover:text-white transition-colors"
                    >
                      <span>View All Services</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {NAV_LINKS.filter((l) => l.label !== "Home" && l.label !== "Services").map((l) => (
              <a key={l.href} className="transition-colors hover:text-[#F59E0B]" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          {/* HEADER ACTIONS */}
          <div className="flex items-center gap-3">
            <a
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-bold tracking-wider text-white transition-all hover:bg-slate-700"
              href={`tel:${SITE.phone}`}
            >
              <Phone className="h-3.5 w-3.5 text-[#F59E0B]" />
              {SITE.phoneDisplay}
            </a>
            <a
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-[#F59E0B] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-[#0F172A] shadow-md transition-all hover:bg-[#D97706] hover:text-white hover:shadow-lg hover:-translate-y-0.5"
              href="/contact"
            >
              Get a Quote <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-white lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <nav className="border-t border-slate-800 bg-[#0F172A] lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
              <a
                href="/"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-bold text-white hover:bg-slate-800"
              >
                Home
              </a>
              <p className="px-3 pt-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#F59E0B]">
                Services
              </p>
              {NAV_SERVICES.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  {s.title}
                </a>
              ))}
              <a
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-bold text-[#F59E0B] hover:bg-slate-800"
              >
                All Services →
              </a>
              {NAV_LINKS.filter((l) => l.label !== "Home").map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-bold text-white hover:bg-slate-800"
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

