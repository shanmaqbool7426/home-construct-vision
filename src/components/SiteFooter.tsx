import { ArzLogo } from "@/components/ArzLogo";
import { SITE } from "@/lib/site-config";

const EXPLORE_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
];

const COMPANY_LINKS = [
  { label: "Areas We Cover", href: "/areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact & Quotes", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-sand-2 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <ArzLogo size="lg" theme="light" />
            <div className="mt-4 max-w-sm space-y-2 text-sm leading-relaxed text-ink/65">
              <p className="font-semibold text-ink/80">Head Office</p>
              <p>
                {SITE.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <p className="mt-3">
                Registered in England &amp; Wales
                <br />
                Company details available on request
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2.5 text-sm font-medium text-ink/75">
            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Explore</p>
              {EXPLORE_LINKS.map((l) => (
                <a key={l.href} className="hover:text-amber transition-colors" href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/50">Company</p>
              {COMPANY_LINKS.map((l) => (
                <a key={l.href} className="hover:text-amber transition-colors" href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink/50">
          © {new Date().getFullYear()} {SITE.companyName}. All rights reserved. Built with
          architectural precision.
        </p>
      </div>
    </footer>
  );
}
