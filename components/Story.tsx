import Image from "next/image";
import Reveal from "./Reveal";

export default function Story() {
  return (
    <section id="experience" className="scroll-mt-20 overflow-hidden border-t border-ink/10 bg-ink text-cream" aria-labelledby="story-h">
      <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-sage">The experience</p>
          <h2 id="story-h" className="mt-3 max-w-[18ch] text-[clamp(2rem,4.5vw_+_0.5rem,3.4rem)]">
            Mediterranean warmth, sushi precision.
          </h2>
          <p className="mt-5 max-w-[58ch] text-[1.05rem] leading-relaxed text-cream/80">
            Koru is built for groups that can&apos;t agree — and shouldn&apos;t have to. A warm dining
            room inside, a relaxed courtyard outside, and a menu that runs from sushi to wood-fired
            pizza to steaks. No invented history here: what we can verify is the address, the phone,
            and the breadth of the menu. Everything else we&apos;ll confirm with the house.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#gallery" className="btn btn-glass-light">See the room</a>
            <a href="#visit" className="btn btn-primary">Plan your visit</a>
          </div>
        </Reveal>
        <Reveal>
          <div className="shell !bg-cream/5">
            <div className="shell-core !bg-transparent">
              <div className="grid grid-cols-2 gap-2 p-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem]">
                  <Image src="/images/hero-interior.jpg" alt="Warm restaurant dining room with set tables" fill sizes="(max-width: 1024px) 100vw, 40vw" loading="lazy" style={{ objectFit: "cover" }} />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.2rem]">
                  <Image src="/images/sushi-platter.jpg" alt="Sushi platter with nigiri and maki rolls" fill sizes="(max-width: 1024px) 100vw, 40vw" loading="lazy" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
