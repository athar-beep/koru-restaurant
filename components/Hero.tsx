import Image from "next/image";
import { HERO_SLIDES, SITE } from "@/lib/site";
import ReserveButton from "./ReserveButton";

/**
 * KORU cinematic hero: four photographic layers in a continuous 40s crossfade,
 * each drifting at its own rate (transform/opacity only). Reduced-motion
 * visitors get the single opening frame, static. First paint already has imagery.
 */
export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-ink" aria-labelledby="hero-h">
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, i) => (
          <div key={s.src} className="hero-slide" data-i={i} aria-hidden={i === 0 ? undefined : true}>
            <Image
              src={s.src}
              alt={s.alt}
              width={s.width}
              height={s.height}
              style={{ objectPosition: s.position }}
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/30" aria-hidden="true" />
      </div>

      <div className="container relative pb-16 pt-24 md:py-24">
        <p className="hero-enter text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-cream/85">
          Koru · Lahore
        </p>
        <h1
          id="hero-h"
          className="hero-enter-2 mt-4 max-w-[14ch] font-display text-[clamp(2.6rem,7vw_+_1rem,5.2rem)] leading-[1.02]"
        >
          <span className="text-[#F7F3EA]">Good taste takes</span>{" "}
          <span className="font-semibold text-[#A8C3A0]">many forms.</span>
        </h1>
        <p className="hero-enter-3 mt-5 max-w-[54ch] text-lg text-cream/85">{SITE.heroSub}</p>
        <div className="hero-enter-3 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href="#menu" className="btn btn-primary">
            Explore the Menu
            <span aria-hidden="true">→</span>
          </a>
          <ReserveButton className="btn btn-glass-frost" label="Enquire for a Table" />
        </div>
      </div>
    </section>
  );
}
