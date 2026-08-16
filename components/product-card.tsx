import Link from "next/link";
import { statusLabels, type Product } from "@/lib/site";

const statusStyles: Record<Product["status"], string> = {
  live: "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  building: "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  planned: "border-line bg-surface-2 text-subtle",
};

const dotStyles: Record<Product["status"], string> = {
  live: "bg-emerald-500",
  building: "bg-amber-500",
  planned: "bg-subtle",
};

export function ProductCard({ product }: { product: Product }) {
  const host = product.url?.replace(/^https?:\/\//, "");

  return (
    <article className="card card-interactive group relative flex flex-col overflow-hidden rounded-2xl p-6">
      {/* Accent glow, brightens on hover. */}
      <div
        aria-hidden="true"
        className={`card-glow pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br blur-2xl ${product.accent}`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold tracking-tight">{product.name}</h3>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[product.status]}`}
        >
          <span className={`relative flex h-1.5 w-1.5`}>
            {product.status === "live" && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            )}
            <span
              className={`relative inline-flex h-1.5 w-1.5 rounded-full ${dotStyles[product.status]}`}
            />
          </span>
          {statusLabels[product.status]}
        </span>
      </div>

      {host && (
        <p className="relative mt-1.5 font-mono text-xs text-subtle">{host}</p>
      )}

      <p className="relative mt-4 text-sm leading-relaxed text-muted">
        {product.tagline}
      </p>

      <ul className="relative mt-5 space-y-2.5">
        {product.highlights.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/80">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-brand" />
            {item}
          </li>
        ))}
      </ul>

      {/* mt-auto pins the CTA to the bottom so it lines up across cards of
          differing height, instead of floating mid-card. */}
      <div className="relative mt-auto pt-7">
        {product.url ? (
          <a
            href={product.url}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-brand"
          >
            Visit {product.name}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        ) : (
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            Get notified
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
