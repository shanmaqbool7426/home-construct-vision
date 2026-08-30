import { useState, type FormEvent } from "react";
import { SITE } from "@/lib/site-config";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY =
  import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] ??
  "02b2cb25-9bae-454e-bda2-02228432290f";

const inputCls =
  "w-full rounded-xl bg-sand-2/80 px-4 py-3 text-sm text-ink ring-1 ring-ink/15 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber";

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New Quote Enquiry — ARZ Construction Ltd");
    formData.append("from_name", "ARZ Construction Website");

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
    <form className="luxury-card rounded-2xl p-8 sm:p-10 border-amber/20 shadow-xl" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
            Full Name *
          </label>
          <input id="name" name="name" type="text" required placeholder="Your full name" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
            Phone Number *
          </label>
          <input id="phone" name="phone" type="tel" required placeholder="e.g. 07860 135189" className={inputCls} />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
          Email Address *
        </label>
        <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputCls} />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="project" className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
            Project Type *
          </label>
          <select id="project" name="project" required className={inputCls}>
            <option value="">Select project type</option>
            <option>House Renovation</option>
            <option>Rear Extension</option>
            <option>Side Extension</option>
            <option>Wraparound Extension</option>
            <option>Loft Conversion</option>
            <option>Kitchen Renovation</option>
            <option>Bathroom Renovation</option>
            <option>Plumbing Work</option>
            <option>Electrical Work</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="postcode" className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
            Property Postcode *
          </label>
          <input id="postcode" name="postcode" type="text" required placeholder="e.g. SE1 2AB" className={inputCls} />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
            Estimated Budget
          </label>
          <select id="budget" name="budget" className={inputCls}>
            <option value="">Select budget range</option>
            <option>Under £20,000</option>
            <option>£20,000 - £50,000</option>
            <option>£50,000 - £100,000</option>
            <option>£100,000 - £200,000</option>
            <option>Over £200,000</option>
            <option>Prefer not to say</option>
          </select>
        </div>
        <div>
          <label htmlFor="start" className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
            Preferred Start Date
          </label>
          <input id="start" name="start" type="text" placeholder="e.g. ASAP, 3 months" className={inputCls} />
        </div>
      </div>
      <div className="mt-6">
        <label htmlFor="details" className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
          Project Description *
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          required
          placeholder="Please describe your project, including any specific requirements or ideas..."
          className={inputCls}
        />
      </div>
      <div className="mt-6">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ink/70">
          Preferred Contact Method
        </label>
        <div className="flex flex-wrap gap-4">
          {["phone", "whatsapp", "email"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="contact" value={method} className="accent-amber" />
              <span className="text-sm text-ink/80 capitalize">{method}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 min-h-[60px]">
        {status === "success" && (
          <p className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm font-medium text-green-700">
            Thank you — your enquiry has been sent. We'll get back to you within 24 hours.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm font-medium text-red-700">
            Something went wrong sending your enquiry. Please try again or call us on {SITE.phoneDisplay}.
          </p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-4 w-full rounded-xl bg-amber px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-amber/25 transition-all hover:bg-copper hover:shadow-xl hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Request My Free Quote"}
        </button>
      </div>
    </form>
  );
}
