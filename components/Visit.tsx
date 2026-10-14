import { SITE } from "@/lib/site";
import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="scroll-mt-20 overflow-hidden border-t border-ink/10 bg-ink text-cream" aria-labelledby="visit-h">
      <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-2">
        <Reveal>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-sage">Visit</p>
          <h2 id="visit-h" className="mt-3 max-w-[18ch] text-[clamp(2rem,4.5vw_+_0.5rem,3.4rem)]">
            Gulberg II, Lahore.
          </h2>
          <address className="mt-5 text-[1.05rem] not-italic leading-relaxed text-cream/85">
            {SITE.address}
          </address>
          <p className="mt-3 text-cream/70">
            Hours vary — please confirm on call. No hours published here until the house confirms them.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={SITE.directionsUrl} target="_blank" rel="noopener" className="btn btn-primary">
              Get Directions <span aria-hidden="true">→</span>
            </a>
            <a href={SITE.phoneHref} className="btn btn-glass-light tabular-nums">
              Call {SITE.phoneDisplay}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-cream/75">
            <a className="underline underline-offset-4" href={SITE.instagram} target="_blank" rel="noopener">Instagram</a>
            <a className="underline underline-offset-4" href={SITE.facebook} target="_blank" rel="noopener">Facebook</a>
            <a className="underline underline-offset-4" href={SITE.foodpanda} target="_blank" rel="noopener">Foodpanda</a>
          </div>
        </Reveal>
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/15">
            <div className="bg-cream/5 p-6">
              <p className="font-display text-xl text-cream">How enquiry works</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-cream/80">
                <li>Fill the table or event form with date, time and guests.</li>
                <li>WhatsApp opens with your enquiry drafted — you send it.</li>
                <li>Koru confirms availability by reply. Nothing auto-books.</li>
              </ol>
            </div>
            <a
              href={SITE.directionsUrl}
              target="_blank"
              rel="noopener"
              className="block bg-porcelain p-6 text-ink"
              aria-label="Open directions to Koru Restaurant in Google Maps"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.14em] text-pine">Map</span>
              <span className="mt-1 block font-display text-xl">22/B Zahoor Elahi Road →</span>
              <span className="mt-1 block text-sm text-ink/65">Opens Google Maps in a new tab. No embedded tracker on this page.</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
