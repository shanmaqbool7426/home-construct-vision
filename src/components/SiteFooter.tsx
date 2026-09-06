import { LOPOLogo } from "@/components/LopoLogo";
import { SITE } from "@/lib/site-config";
import { Clock, MapPin } from "lucide-react";

const EXPLORE_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Areas We Cover", href: "/areas" },
];

const COMPANY_LINKS = [
  { label: "FAQ", href: "/faq" },
  { label: "Contact & Quotes", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-[#0F172A] text-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <LOPOLogo size="lg" theme="dark" />
            <div className="mt-5 space-y-3 text-xs leading-relaxed text-slate-300">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  {SITE.addressLines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </span>
              </p>

              {/* Office Hours */}
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                  <Clock className="h-3.5 w-3.5 text-[#F59E0B]" />
                  Office Hours
                </p>
                <p className="text-slate-300 text-xs">{SITE.workingHours}</p>
                <p className="text-slate-400 text-xs">{SITE.sundayHours}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm font-medium">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-black uppercase tracking-widest text-[#F59E0B]">Explore</p>
              {EXPLORE_LINKS.map((l) => (
                <a key={l.href} className="text-slate-300 hover:text-[#F59E0B] transition-colors" href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-black uppercase tracking-widest text-[#F59E0B]">Company</p>
              {COMPANY_LINKS.map((l) => (
                <a key={l.href} className="text-slate-300 hover:text-[#F59E0B] transition-colors" href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} {SITE.companyName}. All rights reserved.
          </p>
          <p className="text-slate-400">
            Built with <span className="text-[#F59E0B]">architectural precision</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

