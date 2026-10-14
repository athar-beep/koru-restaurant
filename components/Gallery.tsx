"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GALLERY, SITE } from "@/lib/site";
import Reveal from "./Reveal";

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openAt = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setIdx(null);
    openAt.current?.focus();
  }, []);

  useEffect(() => {
    if (idx === null) return;
    openAt.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setIdx((v) => (v === null ? v : (v + 1) % GALLERY.length));
      if (e.key === "ArrowLeft") setIdx((v) => (v === null ? v : (v - 1 + GALLERY.length) % GALLERY.length));
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close]);

  return (
    <section id="gallery" className="scroll-mt-20 border-t border-ink/10 bg-card/60" aria-labelledby="gallery-h">
      <div className="container py-16 md:py-24">
        <Reveal>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-pine">Gallery</p>
          <h2 id="gallery-h" className="mt-3 max-w-[20ch] text-[clamp(2rem,4.5vw_+_0.5rem,3.4rem)]">
            Plates and the room.
          </h2>
          <p className="mt-4 max-w-[62ch] text-ink/75">{SITE.photoNote}</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src + i} className={g.large ? "col-span-2 row-span-2" : ""}>
              <button
                onClick={() => setIdx(i)}
                className="group relative block w-full overflow-hidden rounded-2xl text-left"
                aria-label={`Open photo: ${g.caption}`}
              >
                <span className={`relative block w-full ${g.large ? "aspect-[16/11]" : "aspect-square"}`}>
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes={g.large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                    className="transition duration-500 group-hover:scale-[1.04]"
                  />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-10 text-sm font-medium text-white">
                  {g.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {idx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${GALLERY[idx].caption}`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4"
          onClick={close}
        >
          <div className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-2xl bg-black" onClick={(e) => e.stopPropagation()}>
            <span className="relative block aspect-[16/10] w-full">
              <Image
                src={GALLERY[idx].src}
                alt={GALLERY[idx].alt}
                fill
                sizes="100vw"
                style={{ objectFit: "contain" }}
                className="bg-black"
              />
            </span>
            <div className="flex items-center justify-between gap-3 bg-black p-4 text-white">
              <p className="text-sm text-white/85">{GALLERY[idx].caption} · {idx + 1} / {GALLERY.length}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIdx((idx - 1 + GALLERY.length) % GALLERY.length)}
                  className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
                  aria-label="Previous photo"
                >
                  ←
                </button>
                <button
                  onClick={() => setIdx((idx + 1) % GALLERY.length)}
                  className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10"
                  aria-label="Next photo"
                >
                  →
                </button>
                <button
                  ref={closeRef}
                  onClick={close}
                  className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
                  aria-label="Close photo viewer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
