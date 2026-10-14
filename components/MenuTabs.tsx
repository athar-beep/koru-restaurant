"use client";
import { useMemo, useState } from "react";
import Image from "next/image";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/site";
import Reveal from "./Reveal";

/**
 * Koru menu explorer: category navigation (mouse/touch/keyboard) + text search,
 * clear-search, empty state. Data-driven; images lazy below fold.
 */
export default function MenuTabs({ compact = false }: { compact?: boolean }) {
  const [cat, setCat] = useState<string>("sushi");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return MENU_ITEMS.filter(
      (m) =>
        (cat === "all" || m.category === cat) &&
        (!needle || m.name.toLowerCase().includes(needle))
    );
  }, [cat, q]);

  const cats = useMemo(
    () => [{ id: "all", label: "Everything", blurb: "", img: "", alt: "" }, ...MENU_CATEGORIES],
    []
  );

  return (
    <section id="menu" className="scroll-mt-20 bg-porcelain" aria-labelledby="menu-h">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-pine">The menu</p>
          <h2 id="menu-h" className="mt-3 max-w-[20ch] text-[clamp(2rem,4.5vw_+_0.5rem,3.4rem)]">
            One room, many cravings.
          </h2>
          <p className="mt-4 max-w-[62ch] text-[1.05rem] text-ink/80">
            Sushi and Mediterranean plates, wood-fired pizza, steaks and seafood. Dish names below
            come from public listings and need owner confirmation — prices and availability on enquiry.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Menu categories">
            {cats.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={cat === c.id}
                onClick={() => setCat(c.id)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                  cat === c.id
                    ? "bg-ink text-cream"
                    : "border border-ink/20 text-ink hover:border-ink"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <label htmlFor="menu-search" className="sr-only">Search dishes</label>
            <input
              id="menu-search"
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes…"
              className="field max-w-[16rem]"
            />
            {q && (
              <button onClick={() => setQ("")} className="btn btn-ghost !min-h-0 !py-2 !px-4 text-sm">
                Clear
              </button>
            )}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-ink/15 bg-card p-10 text-center">
            <p className="font-display text-2xl">Nothing matches “{q}”.</p>
            <p className="mt-2 text-ink/70">Try a shorter word — “roll”, “pizza”, “steak” — or browse everything.</p>
            <button onClick={() => { setQ(""); setCat("all"); }} className="btn btn-ink mt-6">
              Show everything
            </button>
          </div>
        ) : (
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => (
              <li key={m.name} className="shell">
                <div className="shell-core">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={m.img}
                      alt={m.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-leaf-deep">
                      {MENU_CATEGORIES.find((c) => c.id === m.category)?.label ?? m.category}
                    </p>
                    <h3 className="mt-1 text-xl">{m.name}</h3>
                    {m.note && <p className="mt-1 text-sm text-ink/65">{m.note}</p>}
                    <p className="mt-2 text-xs uppercase tracking-[0.1em] text-ink/50">
                      Owner confirmation required
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {!compact && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/menu" className="btn btn-ink">Open the full menu <span aria-hidden="true">→</span></a>
            <a href="#reserve" className="btn btn-ghost">Ask about a dish</a>
          </div>
        )}
      </div>
    </section>
  );
}
