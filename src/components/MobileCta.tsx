import { Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-config";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-ink/10 bg-sand-2/95 p-3 backdrop-blur-md md:hidden">
      <a
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-ink ring-1 ring-ink/15 shadow-xs"
        href={`tel:+44${SITE.phone.slice(1)}`}
      >
        <Phone className="h-4 w-4" />
        Call Us
      </a>
      <a
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-white shadow-sm"
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
