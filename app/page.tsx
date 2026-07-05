"use client";

/*
 * Home — index-card / filing aesthetic on the black graph-paper canvas.
 * Dotted paper cards, mono labels, display headings. Gaffy Studios is the
 * parent studio: SHOTBYGAFAR and the Gafar Aleshe personal brand sit under it.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Code2,
  Film,
  Mail,
  Paperclip,
} from "lucide-react";
import { InstagramIcon } from "@/components/LinkIcons";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

const PROFILE_IMG = "/assets/gafar-profile.jpg";

const DOTTED = {
  backgroundImage: "radial-gradient(rgba(0,0,0,0.07) 1px, transparent 1px)",
  backgroundSize: "16px 16px",
} as const;

// ── Data ──
const roles = [
  "Creative Studio",
  "Video Production",
  "Photography",
  "Web Development",
  "Digital Products",
];

const brands = [
  {
    name: "SHOTBYGAFAR",
    subtitle: "Photography · Videography · Cinematography",
    description:
      "Professional photography and videography for brands, events, weddings, and businesses. Capturing moments that tell your story — 25+ clients across the UK.",
    href: "https://shotbygafar.com",
    tags: ["Portraits", "Weddings", "Events", "Brand Content"],
  },
  {
    name: "Gafar Aleshe",
    subtitle: "Personal Brand · Software Engineer",
    description:
      "Full-stack development portfolio and personal brand of the founder. Web apps built with React, Next.js and Node.js — 25+ live sites shipped.",
    href: "https://www.gafaraleshe.com",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
  },
];

const products = [
  {
    title: "InvoiceFlow",
    subtitle: "Freelance Billing Service",
    status: "Live",
    description:
      "RESTful API with 15+ endpoints for invoice generation, client management, PDF export, and automated VAT calculation. OAuth 2.0 auth, Zod validation, rate limiting, CI/CD, Dockerised.",
    tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
    href: "https://invoice-flow-teal.vercel.app/",
  },
  {
    title: "LinkVault",
    subtitle: "Affiliate Link Storefront",
    status: "In Progress",
    description:
      "The storefront for influencers — a kit.co alternative that gathers every affiliate link in one page. Smart geo-routing sends each visitor to the right regional link so creators earn commission worldwide, with per-country click analytics.",
    tags: ["Next.js 16", "Supabase", "PostgreSQL", "Drizzle"],
    href: null,
  },
];

const services = [
  {
    Icon: Film,
    title: "Video Production",
    description:
      "Brand films, weddings, events, and social content — shot and edited end to end.",
  },
  {
    Icon: Camera,
    title: "Photography",
    description:
      "Portraits, products, and events with a cinematic, story-first approach.",
  },
  {
    Icon: Code2,
    title: "Web Development",
    description:
      "Full-stack websites and e-commerce with React, Next.js, and Node.js.",
  },
];

// ── Typewriter ──
function TypewriterText({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    const current = words[wordIndex];
    if (!isDeleting) {
      if (text.length < current.length) {
        setText(current.slice(0, text.length + 1));
      } else {
        timerRef.current = window.setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
    } else if (text.length > 0) {
      setText(current.slice(0, text.length - 1));
    } else {
      setIsDeleting(false);
      setWordIndex(p => (p + 1) % words.length);
    }
  }, [text, isDeleting, wordIndex, words]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 70;
    timerRef.current = window.setTimeout(tick, speed);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [tick, isDeleting]);

  return (
    <span>
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[2px] bg-neutral-900"
      />
    </span>
  );
}

// ── Scroll reveal ──
function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CornerMarks() {
  const base = "pointer-events-none absolute h-4 w-4 border-neutral-900/40";
  return (
    <>
      <span className={`${base} left-3 top-3 border-l border-t`} />
      <span className={`${base} right-3 top-3 border-r border-t`} />
      <span className={`${base} bottom-3 left-3 border-b border-l`} />
      <span className={`${base} bottom-3 right-3 border-b border-r`} />
    </>
  );
}

function SectionCard({
  id,
  label,
  title,
  children,
}: {
  id?: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section
        id={id}
        className="relative mt-4 scroll-mt-6 rounded-md border border-neutral-900/10 bg-[#f4f3ec] px-6 py-7 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.45)] sm:px-8 sm:py-9"
        style={DOTTED}
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
          {label}
        </p>
        <h2 className="mb-6 mt-1 font-display text-2xl font-extrabold uppercase tracking-tight text-neutral-900 sm:text-3xl">
          {title}
        </h2>
        {children}
      </section>
    </Reveal>
  );
}

// ── Page ──
export default function Home() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-8 sm:py-8">
      <SiteHeader active="/" />

      <main className="mx-auto max-w-2xl pb-14">
        {/* ── Identity card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-md border border-neutral-900/10 bg-[#f4f3ec] px-6 py-8 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.55)] sm:px-10 sm:py-10"
          style={DOTTED}
        >
          <CornerMarks />
          <span className="pointer-events-none absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-3 bg-stone-300/50 shadow-sm" />
          <span className="pointer-events-none absolute -left-4 top-1/3 h-6 w-16 -rotate-12 bg-emerald-300/30 shadow-sm" />
          <span className="pointer-events-none absolute -right-3 bottom-12 h-6 w-16 rotate-6 bg-amber-200/40 shadow-sm" />

          <div className="flex items-start justify-between gap-4">
            <div className="pt-1">
              <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                Studio:
              </p>
              <h1 className="mt-1 font-display text-5xl font-extrabold uppercase leading-[0.9] tracking-tight text-neutral-900 sm:text-6xl">
                Gaffy
                <br />
                Studios
              </h1>
              <p className="mt-3 font-mono text-[13px] text-neutral-600">
                <TypewriterText words={roles} />
              </p>
            </div>

            <div className="relative w-28 shrink-0 sm:w-36">
              <Paperclip
                className="absolute -top-3 right-4 z-10 h-7 w-7 -rotate-[20deg] text-neutral-400"
                strokeWidth={1.5}
              />
              <div className="overflow-hidden rounded-sm border border-neutral-900/10 bg-white shadow-sm">
                <img
                  src={PROFILE_IMG}
                  alt="Gafar Aleshe — Founder of Gaffy Studios"
                  className="aspect-square w-full object-cover"
                />
                <div className="border-t border-neutral-900/10 px-2 py-1.5">
                  <p className="font-mono text-[9px] font-semibold uppercase leading-tight tracking-wide text-neutral-900">
                    Gafar Aleshe
                  </p>
                  <div className="mt-0.5 flex items-center justify-between gap-1">
                    <p className="font-mono text-[7.5px] uppercase leading-tight tracking-wide text-neutral-500">
                      Founder
                    </p>
                    <p className="font-mono text-[9px] text-neutral-400">
                      2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-md font-mono text-[13px] leading-relaxed text-neutral-700">
            The creative studio behind SHOTBYGAFAR and Gafar Aleshe. We produce
            cinematic video and photography, build full-stack web products, and
            ship digital tools — capturing moments that tell your story.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href="/portfolio"
              className="rounded-md bg-neutral-900 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              View Portfolio
            </a>
            <a
              href="mailto:contact@shotbygafar.com"
              className="rounded-md border border-neutral-900/20 bg-white px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              Hire Us
            </a>
            <a
              href="https://instagram.com/gaffystudios"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-neutral-900/20 bg-white px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              <InstagramIcon />
              @gaffystudios
            </a>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-dashed border-neutral-900/15 pt-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Booking now · Portsmouth, UK
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              Made with <span className="text-red-500">♥</span>
            </p>
          </div>
        </motion.div>

        {/* ── Brands ── */}
        <SectionCard id="brands" label="Brands:" title="Under the studio">
          <div className="space-y-3">
            {brands.map(b => (
              <a
                key={b.name}
                href={b.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-md border border-neutral-900/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                      Brand
                    </p>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-neutral-900">
                      {b.name}
                    </h3>
                    <p className="font-mono text-[11px] text-neutral-500">
                      {b.subtitle}
                    </p>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-900/20 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-3 font-mono text-[12px] leading-relaxed text-neutral-600">
                  {b.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {b.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded border border-neutral-900/15 px-2 py-0.5 font-mono text-[10px] text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </SectionCard>

        {/* ── Services ── */}
        <SectionCard id="services" label="Services:" title="What we do">
          <div className="space-y-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={
                  i > 0
                    ? "border-t border-dashed border-neutral-900/15 pt-6"
                    : ""
                }
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-neutral-900 text-white">
                    <s.Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-neutral-900">
                      {s.title}
                    </h3>
                    <p className="mt-1 font-mono text-[12px] leading-relaxed text-neutral-600">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* ── Tech products ── */}
        <SectionCard id="products" label="Products:" title="Tech we're building">
          <div className="space-y-3">
            {products.map(p => {
              const inner = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                        Product
                      </p>
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-neutral-900">
                        {p.title}
                      </h3>
                      <p className="font-mono text-[11px] text-neutral-500">
                        {p.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide ${
                          p.status === "Live"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {p.status}
                      </span>
                      {p.href && (
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-900/20 text-neutral-900 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="mt-3 font-mono text-[12px] leading-relaxed text-neutral-600">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tags.map(tag => (
                      <span
                        key={tag}
                        className="rounded border border-neutral-900/15 px-2 py-0.5 font-mono text-[10px] text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              );
              return p.href ? (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-md border border-neutral-900/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={p.title}
                  className="block rounded-md border border-neutral-900/10 bg-white p-5 shadow-sm"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </SectionCard>

        {/* ── Contact ── */}
        <SectionCard
          id="contact"
          label="Contact:"
          title="Let's create something"
        >
          <p className="font-mono text-[12px] leading-relaxed text-neutral-600">
            Booking shoots, taking on web projects, and open to collaborations.
            Reach out any time — we usually reply within a day.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href="mailto:contact@shotbygafar.com"
              className="flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
            <a
              href="https://wa.me/447882655541"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-neutral-900/20 bg-white px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/gaffystudios"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-neutral-900/20 bg-white px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-neutral-50"
            >
              <InstagramIcon />
              Instagram
            </a>
          </div>
        </SectionCard>

        <SiteFooter />
      </main>
    </div>
  );
}
