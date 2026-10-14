import Link from "next/link";
import { SITE } from "@/lib/site";
import ReserveButton from "./ReserveButton";

/** Mobile sticky bar: Home | Menu | Call | Enquire on one row, safe-area aware, hidden in print. */
export default function StickyBar() {
  const barBtn = "!min-h-[2.5rem] !px-2 !py-2 text-[0.8rem] min-w-0 flex-1 whitespace-nowrap";
  return (
    <div className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-ink/80 backdrop-blur-xl lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex flex-nowrap gap-2 p-2">
        <Link href="/" className={`btn btn-glass-frost !text-ink ${barBtn}`} aria-label="Koru home">
          Home
        </Link>
        <Link href="/menu" className={`btn btn-glass-frost !text-ink ${barBtn}`} aria-label="Koru full menu">
          Menu
        </Link>
        <a href={SITE.phoneHref} className={`btn btn-glass-light tabular-nums ${barBtn}`} aria-label={`Call Koru at ${SITE.phoneDisplay}`}>
          Call
        </a>
        <ReserveButton className={`btn btn-primary ${barBtn}`} label="Enquire" />
      </div>
    </div>
  );
}
