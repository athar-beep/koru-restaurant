import { NAV, SITE } from "@/lib/site";
import ReserveButton from "./ReserveButton";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0E1F1B] text-cream" aria-label="Footer">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl font-bold tracking-[0.08em]">KORU</p>
          <p className="mt-2 max-w-[42ch] text-cream/70">{SITE.tagline}</p>
          <p className="mt-4 text-sm text-cream/60">{SITE.photoNote}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">Explore</p>
          <ul className="mt-3 space-y-2">
            {NAV.map((n) => (
              <li key={n.href}><a className="text-cream/85 hover:text-cream hover:underline underline-offset-4" href={n.href}>{n.label}</a></li>
            ))}
            <li><a className="text-cream/85 hover:text-cream hover:underline underline-offset-4" href="/menu">Full menu</a></li>
          </ul>
        </nav>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">Contact</p>
          <address className="mt-3 space-y-2 not-italic text-cream/85">
            <p>{SITE.address}</p>
            <p><a className="font-semibold tabular-nums underline underline-offset-4" href={SITE.phoneHref}>{SITE.phoneDisplay}</a></p>
          </address>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <a className="underline underline-offset-4" href={SITE.instagram} target="_blank" rel="noopener">Instagram</a>
            <a className="underline underline-offset-4" href={SITE.facebook} target="_blank" rel="noopener">Facebook</a>
          </div>
          <ReserveButton className="btn btn-primary mt-5" label="Enquire for a Table" />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col gap-2 py-5 text-sm text-cream/55 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Koru Restaurant, Lahore. Demo site — facts pending owner confirmation.</p>
          <p>Sources in content-sources.md</p>
        </div>
      </div>
    </footer>
  );
}
