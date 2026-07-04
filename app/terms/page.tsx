import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Terms & Conditions — Gaffy Studios",
  description:
    "Terms and conditions for Gaffy Studios Ltd — photography and videography services, and digital product sales.",
};

const DOTTED = {
  backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
} as const;

const sections = [
  {
    title: "1. Who we are",
    body: [
      "Gaffy Studios Ltd (“Gaffy Studios”, “we”, “us”) is the parent company of SHOTBYGAFAR and operates this website. These terms cover our photography and videography services and the digital products sold in our shop. By booking a shoot or making a purchase, you agree to them.",
    ],
  },
  {
    title: "2. Bookings & deposits",
    body: [
      "A non-refundable deposit is required to secure your shoot date. Your date is not reserved until the deposit is received.",
      "The remaining balance is due on or before the shoot date unless otherwise agreed in writing.",
    ],
  },
  {
    title: "3. Cancellations & rescheduling",
    body: [
      "Cancellations with less than 48 hours' notice: the full deposit is forfeited.",
      "Cancellations with more than 48 hours' notice: the deposit is retained as credit toward a rescheduled session within 90 days.",
      "If we must cancel due to circumstances beyond our control (force majeure), we will offer a reschedule or a refund at our discretion.",
    ],
  },
  {
    title: "4. Payments",
    body: [
      "All payments are processed through Stripe. We accept major credit and debit cards, Apple Pay, and Google Pay.",
      "Prices are displayed in GBP. If you pay in another currency, the exchange rate is determined by your bank or card issuer.",
      "We do not store your card details.",
    ],
  },
  {
    title: "5. Digital products & delivery",
    body: [
      "Digital products (LUTs, presets, and similar downloads) are delivered by an automatic email link, normally within 24 hours of purchase.",
      "Download links remain valid for 365 days from the date of purchase.",
    ],
  },
  {
    title: "6. Refunds on digital products",
    body: [
      "All sales are final. No refunds are given on digital products once download access has been granted, and by purchasing you waive any statutory cooling-off period for digital content.",
      "Limited exceptions apply for duplicate charges and permanently broken download links — you must contact us within 7 days of purchase.",
    ],
  },
  {
    title: "7. Image rights & usage",
    body: [
      "Gaffy Studios retains the intellectual property rights in all photography and video content we produce.",
      "Clients receive a licence for personal use of their deliverables.",
      "We reserve the right to use work in our portfolio and on social media, unless you request otherwise in writing before your session.",
    ],
  },
  {
    title: "8. Liability",
    body: [
      "Results from LUTs and presets vary with your footage, camera, and settings; we are not responsible for variability of results or for software compatibility issues.",
      "Our total liability for any claim is capped at the price you paid.",
    ],
  },
  {
    title: "9. Contact",
    body: [
      "Questions about these terms: contact@shotbygafar.com or +44 788 265 5541.",
    ],
  },
];

export default function TermsPage() {
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
            Legal:
          </p>
          <h1 className="mt-1 font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-neutral-900 sm:text-5xl">
            Terms &amp;
            <br />
            Conditions
          </h1>
          <p className="mt-4 max-w-md font-mono text-[13px] leading-relaxed text-neutral-700">
            Gaffy Studios Ltd — services and shop. Last updated{" "}
            {new Date().getFullYear()}.
          </p>
        </section>

        {/* Sections */}
        <section
          className="mt-4 rounded-md border border-neutral-900/10 bg-[#f4f3ec] px-6 py-7 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.45)] sm:px-8 sm:py-9"
          style={DOTTED}
        >
          <div className="space-y-7">
            {sections.map(s => (
              <div key={s.title}>
                <h2 className="font-display text-lg font-bold uppercase tracking-tight text-neutral-900">
                  {s.title}
                </h2>
                <ul className="mt-2 space-y-1.5">
                  {s.body.map((line, i) => (
                    <li
                      key={i}
                      className="relative pl-4 font-mono text-[12px] leading-relaxed text-neutral-600 before:absolute before:left-0 before:text-neutral-400 before:content-['·']"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
