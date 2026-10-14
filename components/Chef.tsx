import Image from "next/image";
import { MENU_CATEGORIES } from "@/lib/site";
import Reveal from "./Reveal";

/** Signature preview: editorial varying-scale trio leading into the full menu. */
export default function Chef() {
  const picks = [MENU_CATEGORIES[0], MENU_CATEGORIES[6], MENU_CATEGORIES[3]];
  return (
    <section id="signatures" className="scroll-mt-20 bg-porcelain" aria-labelledby="sig-h">
      <div className="container py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-pine">Signatures</p>
              <h2 id="sig-h" className="mt-3 max-w-[20ch] text-[clamp(2rem,4.5vw_+_0.5rem,3.4rem)]">
                Start with these three.
              </h2>
            </div>
            <a href="/menu" className="btn btn-ink">Full menu <span aria-hidden="true">→</span></a>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="shell h-full">
              <div className="shell-core h-full">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={picks[0].img} alt={picks[0].alt} fill sizes="(max-width: 1024px) 100vw, 60vw" loading="lazy" style={{ objectFit: "cover" }} />
                </div>
                <figcaption className="flex items-baseline justify-between gap-4 p-5">
                  <span className="font-display text-2xl">{picks[0].label}</span>
                  <span className="text-sm text-ink/65">{picks[0].blurb}</span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
          <div className="grid gap-5 lg:col-span-5">
            {[picks[1], picks[2]].map((p) => (
              <Reveal key={p.id}>
                <figure className="shell">
                  <div className="shell-core">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image src={p.img} alt={p.alt} fill sizes="(max-width: 1024px) 100vw, 35vw" loading="lazy" style={{ objectFit: "cover" }} />
                    </div>
                    <figcaption className="flex items-baseline justify-between gap-4 p-5">
                      <span className="font-display text-xl">{p.label}</span>
                      <span className="text-sm text-ink/65">{p.blurb}</span>
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
