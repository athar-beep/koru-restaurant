"use client";
import { useEffect, useRef, useState } from "react";
import { NAV, SITE } from "@/lib/site";
import ReserveButton from "./ReserveButton";

export default function Header() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-ink/45 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-display text-[1.45rem] font-bold tracking-[0.08em] text-cream" aria-label="Koru Restaurant — home">
          KORU
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.95rem] text-cream/80 hover:text-cream hover:underline underline-offset-4">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={SITE.phoneHref} className="text-[0.95rem] font-semibold tabular-nums text-cream/90">
            {SITE.phoneDisplay}
          </a>
          <ReserveButton className="btn btn-primary !min-h-0 !py-2.5 !px-5 text-sm" label="Reserve" />
        </div>
        <button
          ref={btnRef}
          className="btn btn-glass-light no-print !min-h-0 !px-4 !py-2 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <div ref={panelRef} id="mobile-nav" className="border-t border-white/15 bg-ink/80 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav aria-label="Mobile" className="grid gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-lg text-cream hover:bg-cream/10">
                {n.label}
              </a>
            ))}
            <ReserveButton onClick={() => setOpen(false)} className="btn btn-primary mt-3" label="Enquire for a Table" />
            <a href={SITE.phoneHref} className="mt-2 text-center font-semibold tabular-nums text-cream">
              Call {SITE.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
