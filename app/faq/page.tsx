import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "FAQ — Gaffy Studios",
  description:
    "Frequently asked questions about bookings, deposits, delivery, digital downloads, and policies at Gaffy Studios.",
};

const DOTTED = {
  backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
} as const;

const faqs = [
  {
    q: "How do I book a shoot?",
    a: "Email contact@shotbygafar.com or message us on WhatsApp (+44 788 265 5541) or Instagram (@gaffystudios) with your date, location, and what you have in mind. A non-refundable deposit secures your date; the remaining balance is due on or before the shoot date unless we agree otherwise in writing.",
  },
  {
    q: "What happens if I need to cancel or reschedule?",
    a: "With more than 48 hours' notice, your deposit is kept as credit toward a rescheduled date within 90 days. With less than 48 hours' notice, the deposit is forfeited. If we ever have to cancel due to circumstances beyond our control, we'll offer a reschedule or refund.",
  },
  {
    q: "How do I pay?",
    a: "All payments are processed securely through Stripe. We accept major credit and debit cards, Apple Pay, and Google Pay. Prices are in GBP — if you pay in another currency, your bank sets the exchange rate. We never store your card details.",
  },
  {
    q: "How long until I get my photos or video?",
    a: "Turnaround depends on the project and is confirmed when you book — highlight edits and portrait galleries are typically quicker, full wedding films and event edits take longer. We'll always give you a delivery date up front.",
  },
  {
    q: "Who owns the photos and videos?",
    a: "Gaffy Studios retains the intellectual property in all photography and video content. You receive a personal-use licence for your deliverables. We may feature work in our portfolio and on social media unless you ask us not to in writing before the session.",
  },
  {
    q: "How are digital products (LUTs & presets) delivered?",
    a: "Automatically — a download link is emailed within 24 hours of purchase (usually instantly). Links stay valid for 365 days from purchase.",
  },
  {
    q: "Can I get a refund on LUTs or presets?",
    a: "All sales on digital products are final once download access is granted, and you waive any cooling-off period for digital content. Exceptions: duplicate charges and permanently broken download links — contact us within 7 days and we'll put it right.",
  },
  {
    q: "Do the presets work with my software?",
    a: "LUTs ship as .cube files for Premiere Pro, DaVinci Resolve, and Final Cut. Presets ship as .dng (Lightroom Mobile) and .xmp (Lightroom desktop). Results vary with your footage and settings — that's part of the craft — and we can't guarantee compatibility with every software version.",
  },
  {
    q: "Do you travel for shoots?",
    a: "We're based in Portsmouth, UK and shoot across the UK. Travel outside the local area may carry a fee — tell us your location when you enquire and we'll include it in your quote.",
  },
  {
    q: "What's the difference between Gaffy Studios, SHOTBYGAFAR, and Gafar Aleshe?",
    a: "Gaffy Studios Ltd is the parent studio. SHOTBYGAFAR is our photography, videography, and cinematography brand. Gafar Aleshe is the founder's personal brand and software engineering portfolio. Tech products like InvoiceFlow and LinkVault are built under Gaffy Studios.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 sm:py-8">
      <SiteHeader />

      <main className="mx-auto max-w-2xl pb-14">
        {/* Intro card */}
        <section
          className="relative rounded-md border border-neutral-900/10 bg-[#f4f3ec] px-6 py-8 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.55)] sm:px-10 sm:py-10"
          style={DOTTED}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
            FAQ:
          </p>
          <h1 className="mt-1 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-neutral-900 sm:text-5xl">
            Questions,
            <br />
            Answered
          </h1>
          <p className="mt-4 max-w-md font-mono text-[13px] leading-relaxed text-neutral-700">
            Bookings, payments, delivery, and digital downloads. Anything else —{" "}
            <a
              href="mailto:contact@shotbygafar.com"
              className="underline decoration-neutral-400 underline-offset-2 hover:decoration-neutral-900"
            >
              email us
            </a>
            .
          </p>
        </section>

        {/* FAQ cards */}
        <div className="mt-4 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group rounded-md border border-neutral-900/10 bg-[#f4f3ec] shadow-sm transition-shadow hover:shadow-md"
              style={DOTTED}
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    Q{String(i + 1).padStart(2, "0")}:
                  </p>
                  <h2 className="mt-0.5 font-display text-base font-bold uppercase tracking-tight text-neutral-900">
                    {f.q}
                  </h2>
                </div>
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-900/20 font-mono text-sm text-neutral-900 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="border-t border-dashed border-neutral-900/15 px-5 py-4 font-mono text-[12px] leading-relaxed text-neutral-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <SiteFooter />
      </main>
    </div>
  );
}
