import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site-config";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  "171aa7c1-ecc4-48ec-a322-6b1f6271709a";

const inputCls =
  "w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-[#0F172A] ring-1 ring-[#0F172A]/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C5A059]";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", `New Quote Enquiry — ${SITE.companyName}`);
    formData.append("from_name", `${SITE.companyName} Website`);

    setStatus("sending");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" },
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="luxury-card rounded-2xl p-8 sm:p-10 border-[#C5A059]/30 shadow-xl" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Full Name *
          </label>
          <input id="name" name="name" type="text" required placeholder="Your full name" className={inputCls} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Phone Number *
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="07354 045309" className={inputCls} />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Email Address *
          </label>
          <input id="email" name="email" type="email" required placeholder="Lopoconstruction@gmail.com" className={inputCls} />
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Project Type *
          </label>
          <select id="service" name="service" required className={inputCls}>
            <option value="">Select a service...</option>
            <option value="House Renovations">House Renovations</option>
            <option value="Extensions">Extensions</option>
            <option value="Loft Conversions">Loft Conversions</option>
            <option value="Kitchen Renovations">Kitchen Renovations</option>
            <option value="Bathroom Renovations">Bathroom Renovations</option>
            <option value="Plumbing & Heating">Plumbing & Heating</option>
            <option value="Electrical">Electrical Work</option>
            <option value="Other">Other Building Services</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="details" className="mb-2 block text-xs font-bold uppercase tracking-wider text-[#0F172A]">
            Project Details
          </label>
          <textarea
            id="details"
            name="details"
            rows={4}
            placeholder="Tell us about your project requirements, location, and preferred timeline..."
            className={inputCls}
          />
        </div>
      </div>

      {status === "success" && (
        <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-center text-sm font-semibold text-emerald-800">
          ✓ Thank you! Your request has been received. The LOPO Construction team will contact you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mt-6 rounded-xl bg-rose-50 border border-rose-200 p-4 text-center text-sm font-semibold text-rose-800">
          ⚠ There was an error submitting your request. Please try again or call us directly at {SITE.phoneDisplay}.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#C5A059] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-[#B08B40] hover:shadow-xl disabled:opacity-50"
      >
        {status === "sending" ? "Sending Request..." : "Request Free Written Quote"}
      </button>
    </form>
  );
}


