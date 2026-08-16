import { site } from "@/lib/site";

/**
 * Brand mark: two stacked chevrons rising in the same direction — a lead form
 * with a wider one trailing behind it, so the pair reads as ascent with depth.
 * It doubles as the studio idea: separate products, one direction.
 *
 * The gradient lives on the tile (a CSS background) rather than inside the SVG,
 * so the mark can render many times per page without duplicating any element ids.
 */

const sizes = {
  sm: { tile: "h-7 w-7 rounded-[8px]", text: "text-sm" },
  md: { tile: "h-8 w-8 rounded-[10px]", text: "text-[15px]" },
  lg: { tile: "h-12 w-12 rounded-[14px]", text: "text-xl" },
} as const;

export function Logo({
  withWordmark = true,
  size = "md",
}: {
  withWordmark?: boolean;
  size?: keyof typeof sizes;
}) {
  const scale = sizes[size];

  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`relative grid place-items-center overflow-hidden bg-gradient-to-br from-violet-500 via-violet-500 to-sky-400 shadow-md shadow-violet-500/25 ring-1 ring-inset ring-white/20 ${scale.tile}`}
      >
        {/* Top gloss, keeps the tile from reading as flat colour. */}
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-white/25 to-transparent"
        />

        <svg
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative h-full w-full text-white"
          aria-hidden="true"
        >
          {/* Lead chevron. */}
          <path d="M10.5 14 L16 8.5 L21.5 14" />
          {/* Trailing chevron — wider and dimmer, for perspective. */}
          <path d="M8 23.5 L16 15.5 L24 23.5" opacity="0.55" />
        </svg>
      </span>

      {withWordmark && (
        <span
          className={`font-semibold tracking-[-0.02em] text-ink ${scale.text}`}
        >
          {site.name}
        </span>
      )}
    </span>
  );
}
