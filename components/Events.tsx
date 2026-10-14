"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { EVENT_TYPES, SITE, whatsappLink } from "@/lib/site";
import Reveal from "./Reveal";

type Errors = Partial<Record<"name" | "phone" | "date" | "guests", string>>;

/**
 * Private events: compact card on the page; the full enquiry form
 * (occasion, date, guests, name, phone, notes + WhatsApp submit) lives
 * in a modal dialog. No fields lost, no inline form on the page.
 */
export default function Events() {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ occasion: "Birthday", date: "", guests: "8", name: "", phone: "", notes: "" });
  const [errs, setErrs] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open ]);

  function set<K extends keyof typeof f>(k: K, v: string) {
    setF((p) => ({ ...p, [k]: v }));
  }

  function validate(): boolean {
    const e: Errors = {};
    if (f.name.trim().length < 2) e.name = "Please add your name.";
    if (!/^\+?[0-9][0-9\s-]{6,15}$/.test(f.phone.trim())) e.phone = "Add a reachable phone number.";
    if (!f.date) e.date = "Pick a preferred date.";
    if (!/^\d+$/.test(f.guests) || Number(f.guests) < 1) e.guests = "Add a guest count.";
    setErrs(e);
    return Object.keys(e).length === 0;
  }

  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    const msg = `Hello Koru — private event enquiry:\nOccasion: ${f.occasion}\nDate: ${f.date}\nGuests: ${f.guests}\nName: ${f.name}\nPhone: ${f.phone}${f.notes ? `\nNotes: ${f.notes}` : ""}\n(Please confirm availability — enquiry only.)`;
    window.open(whatsappLink(msg), "_blank", "noopener");
    setSent(true);
    setOpen(false);
  }

  return (
    <section id="events" className="scroll-mt-20 bg-porcelain" aria-labelledby="events-h">
      <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-pine">Private events</p>
          <h2 id="events-h" className="mt-3 max-w-[20ch] text-[clamp(2rem,4.5vw_+_0.5rem,3.4rem)]">
            Birthdays, showers, small big days.
          </h2>
          <p className="mt-4 max-w-[58ch] text-ink/75">
            Public listings mention birthdays, bridal showers, engagements and intimate gatherings
            — pending owner confirmation. No promises here about private rooms, packages or pricing:
            tell us the occasion and we&apos;ll confirm what&apos;s possible.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3">
            {EVENT_TYPES.map((t) => (
              <li key={t.id} className="rounded-2xl border border-ink/12 bg-card p-4">
                <p className="font-display text-lg">{t.label}</p>
                <p className="text-sm text-ink/65">{t.blurb}</p>
              </li>
            ))}
          </ul>
          <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl">
            <Image src="/images/interior-2.jpg" alt="Warm restaurant interior set for a gathering" fill sizes="(max-width: 1024px) 100vw, 45vw" loading="lazy" style={{ objectFit: "cover" }} />
          </div>
        </Reveal>
        <Reveal>
          <div className="shell">
            <div className="shell-core p-6 md:p-8">
              <h3 className="font-display text-2xl">Plan a private event</h3>
              <p className="mt-2 text-ink/70">
                Tell us the occasion, date and guests — we confirm availability on WhatsApp.
              </p>
              <button type="button" onClick={() => setOpen(true)} className="btn btn-primary mt-6 w-full sm:w-auto">
                Plan an Event
                <span aria-hidden="true">→</span>
              </button>
              {sent && <p role="status" className="mt-3 text-sm text-ink/70">WhatsApp opened with your enquiry. Prefer to talk? Call <a className="font-semibold underline" href={SITE.phoneHref}>{SITE.phoneDisplay}</a>.</p>}
            </div>
          </div>
        </Reveal>
      </div>

      {open && (
        <div role="dialog" aria-modal="true" aria-labelledby="event-dialog-h" className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-4 sm:items-center" onClick={() => setOpen(false)}>
          <form onSubmit={submit} noValidate onClick={(e) => e.stopPropagation()} className="max-h-[92dvh] w-full max-w-lg overflow-y-auto rounded-3xl bg-card shadow-2xl" aria-label="Private event enquiry">
            <div className="flex items-center justify-between bg-ink p-5 text-cream">
              <h3 id="event-dialog-h" className="font-display text-2xl">Event enquiry</h3>
              <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close event enquiry form" className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10">Close</button>
            </div>
            <div className="grid gap-4 p-5 md:p-6">
              <p className="text-sm text-ink/70">
                Opens WhatsApp with your details drafted. The restaurant confirms availability — nothing is booked automatically.
              </p>
              <div>
                <label htmlFor="ev-occasion" className="text-sm font-semibold">Occasion</label>
                <select id="ev-occasion" className="field mt-1" value={f.occasion} onChange={(e) => set("occasion", e.target.value)}>
                  <option>Birthday</option>
                  <option>Bridal shower</option>
                  <option>Engagement</option>
                  <option>Intimate gathering</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ev-date" className="text-sm font-semibold">Preferred date</label>
                  <input id="ev-date" type="date" className="field mt-1" value={f.date} onChange={(e) => set("date", e.target.value)} aria-invalid={!!errs.date} />
                  {errs.date && <p role="alert" className="mt-1 text-sm text-red-800">{errs.date}</p>}
                </div>
                <div>
                  <label htmlFor="ev-guests" className="text-sm font-semibold">Guests</label>
                  <input id="ev-guests" type="number" min={1} inputMode="numeric" className="field mt-1" value={f.guests} onChange={(e) => set("guests", e.target.value)} aria-invalid={!!errs.guests} />
                  {errs.guests && <p role="alert" className="mt-1 text-sm text-red-800">{errs.guests}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="ev-name" className="text-sm font-semibold">Your name</label>
                <input id="ev-name" className="field mt-1" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errs.name} />
                {errs.name && <p role="alert" className="mt-1 text-sm text-red-800">{errs.name}</p>}
              </div>
              <div>
                <label htmlFor="ev-phone" className="text-sm font-semibold">Phone</label>
                <input id="ev-phone" className="field mt-1 tabular-nums" autoComplete="tel" inputMode="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errs.phone} />
                {errs.phone && <p role="alert" className="mt-1 text-sm text-red-800">{errs.phone}</p>}
              </div>
              <div>
                <label htmlFor="ev-notes" className="text-sm font-semibold">Notes <span className="font-normal text-ink/55">(optional)</span></label>
                <textarea id="ev-notes" rows={3} className="field mt-1" value={f.notes} onChange={(e) => set("notes", e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary w-full">Draft enquiry on WhatsApp</button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
}
