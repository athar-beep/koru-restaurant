"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "date" | "time" | "guests", string>>;

/**
 * Reservation enquiry dialog (id="reserve"): validated WhatsApp hand-off.
 * Nothing books automatically; the house confirms every table.
 */
export default function ReserveForm() {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ name: "", phone: "", date: "", time: "19:30", guests: "2", notes: "" });
  const [errs, setErrs] = useState<Errors>({});
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("koru:reserve", onOpen);
    return () => window.removeEventListener("koru:reserve", onOpen);
  }, []);

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
    if (!f.time) e.time = "Pick a preferred time.";
    if (!/^\d+$/.test(f.guests) || Number(f.guests) < 1) e.guests = "Add a guest count.";
    setErrs(e);
    return Object.keys(e).length === 0;
  }

  const submit = useCallback((ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    const msg = `Hello Koru — table enquiry:\nName: ${f.name}\nPhone: ${f.phone}\nDate: ${f.date}\nTime: ${f.time}\nGuests: ${f.guests}${f.notes ? `\nNotes: ${f.notes}` : ""}\n(Please confirm availability — enquiry only.)`;
    window.open(whatsappLink(msg), "_blank", "noopener");
    setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [f]);

  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="reserve-h" className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-4 sm:items-center" onClick={() => setOpen(false)}>
      <form onSubmit={submit} noValidate onClick={(e) => e.stopPropagation()} className="w-full max-w-lg overflow-hidden rounded-3xl bg-card shadow-2xl" aria-label="Table enquiry">
        <div className="flex items-center justify-between bg-ink p-5 text-cream">
          <h2 id="reserve-h" className="font-display text-2xl">Enquire for a table</h2>
          <button ref={closeRef} type="button" onClick={() => setOpen(false)} aria-label="Close enquiry form" className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10">Close</button>
        </div>
        <div className="grid gap-4 p-5 md:p-6">
          <p className="text-sm text-ink/70">
            Opens WhatsApp with your enquiry drafted to <span className="font-semibold tabular-nums">{SITE.phoneDisplay}</span>. The restaurant confirms — nothing is booked automatically.
          </p>
          <div>
            <label htmlFor="rs-name" className="text-sm font-semibold">Name</label>
            <input id="rs-name" className="field mt-1" autoComplete="name" value={f.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errs.name} />
            {errs.name && <p role="alert" className="mt-1 text-sm text-red-800">{errs.name}</p>}
          </div>
          <div>
            <label htmlFor="rs-phone" className="text-sm font-semibold">Phone</label>
            <input id="rs-phone" className="field mt-1 tabular-nums" autoComplete="tel" inputMode="tel" value={f.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errs.phone} />
            {errs.phone && <p role="alert" className="mt-1 text-sm text-red-800">{errs.phone}</p>}
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label htmlFor="rs-date" className="text-sm font-semibold">Date</label>
              <input id="rs-date" type="date" className="field mt-1" value={f.date} onChange={(e) => set("date", e.target.value)} aria-invalid={!!errs.date} />
              {errs.date && <p role="alert" className="mt-1 text-sm text-red-800">{errs.date}</p>}
            </div>
            <div>
              <label htmlFor="rs-time" className="text-sm font-semibold">Time</label>
              <input id="rs-time" type="time" className="field mt-1" value={f.time} onChange={(e) => set("time", e.target.value)} aria-invalid={!!errs.time} />
              {errs.time && <p role="alert" className="mt-1 text-sm text-red-800">{errs.time}</p>}
            </div>
            <div>
              <label htmlFor="rs-guests" className="text-sm font-semibold">Guests</label>
              <input id="rs-guests" type="number" min={1} inputMode="numeric" className="field mt-1" value={f.guests} onChange={(e) => set("guests", e.target.value)} aria-invalid={!!errs.guests} />
              {errs.guests && <p role="alert" className="mt-1 text-sm text-red-800">{errs.guests}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="rs-notes" className="text-sm font-semibold">Occasion / notes <span className="font-normal text-ink/55">(optional)</span></label>
            <textarea id="rs-notes" rows={2} className="field mt-1" value={f.notes} onChange={(e) => set("notes", e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-full">Continue on WhatsApp</button>
          <a href={SITE.phoneHref} className="text-center text-sm font-semibold underline underline-offset-4">Or call {SITE.phoneDisplay}</a>
        </div>
      </form>
    </div>
  );
}
