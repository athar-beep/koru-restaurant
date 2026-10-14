"use client";

/** Fires the global reservation-dialog open event. */
export function openReserve() {
  window.dispatchEvent(new CustomEvent("koru:reserve"));
}

export default function ReserveButton({
  className = "btn btn-primary",
  label = "Reserve a Table",
  onClick,
}: {
  className?: string;
  label?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        openReserve();
      }}
    >
      {label}
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-sm leading-none"
      >
        ↗
      </span>
    </button>
  );
}
