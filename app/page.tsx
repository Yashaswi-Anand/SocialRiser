import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { principles, site, visibleProducts, visibleRoadmap } from "@/lib/site";

export default function HomePage() {
  const liveCount = visibleProducts.filter((p) => p.status === "live").length;
  const buildingCount = visibleProducts.filter((p) => p.status === "building").length;

  // Only mention counts that are non-zero, so the line never reads "0 in development".
  const stats = [
    liveCount > 0 && `${liveCount} live`,
    buildingCount > 0 && `${buildingCount} in development`,
    "more on the way",
  ].filter(Boolean);

  // Keep the grid balanced no matter how many products are currently visible.
  const gridColumns =
    visibleProducts.length >= 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : visibleProducts.length === 2
        ? "sm:grid-cols-2 lg:max-w-4xl"
        : "max-w-md";

  return (
    <>
      <SiteHeader />

      <main>
        {/* ---------------------------------------------------------- Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="aura absolute inset-x-0 top-0 h-[560px]" />

          <div className="relative mx-auto max-w-3xl px-6 pb-24 pt-24 text-center sm:pt-32">
            <span
              className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3.5 py-1.5 text-xs text-muted shadow-sm backdrop-blur"
              style={{ animationDelay: "60ms" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {site.tagline}
            </span>

            <h1
              className="animate-fade-up mt-7 text-balance text-5xl font-semibold leading-[1.03] tracking-tight sm:text-7xl"
              style={{ animationDelay: "140ms" }}
            >
              One studio.
              <br />
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-300 dark:to-sky-400">
                Many products.
              </span>
            </h1>

            <p
              className="animate-fade-up mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
              style={{ animationDelay: "220ms" }}
            >
              {site.description}
            </p>

            <div
              className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                href="#products"
                className="w-full rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas shadow-lg shadow-brand/10 transition-transform hover:-translate-y-0.5 hover:opacity-90 sm:w-auto"
              >
                Explore the products
              </Link>
              <Link
                href="#contact"
                className="w-full rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-brand/50 hover:bg-surface-2 sm:w-auto"
              >
                Get in touch
              </Link>
            </div>

            {/* <p
              className="animate-fade-up mt-12 font-mono text-xs text-subtle"
              style={{ animationDelay: "380ms" }}
            >
              {stats.join(" · ")}
            </p> */}
          </div>
        </section>

        {/* ------------------------------------------------------ Products */}
        <Section
          id="products"
          eyebrow="Products"
          title="Everything we've built, in one place"
          intro="Each product is independent and lives on its own subdomain — separate app, separate users, same studio behind it."
        >
          <div className={`grid gap-5 ${gridColumns}`}>
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Section>

        {/* -------------------------------------------------------- Studio */}
        <Section
          id="studio"
          eyebrow="The studio"
          title="Small on purpose"
          intro={`${site.name} is an independent studio. No investors, no committee deciding the roadmap — products get built because they should exist, and they get maintained because someone actually uses them.`}
        >
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div key={principle.title} className="card rounded-2xl p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 font-mono text-xs font-semibold text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {principle.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------- Roadmap */}
        <Section
          id="roadmap"
          eyebrow="Roadmap"
          title="What's next"
          intro="Shipped, in progress, and being scoped. Updated as things actually move — not as they're announced."
        >
          <ol className="relative space-y-8 pl-8">
            {/* Timeline spine. */}
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-line via-line to-transparent"
            />

            {visibleRoadmap.map((item) => (
              <li key={item.title} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-8 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-canvas ${
                    item.status === "shipped"
                      ? "bg-emerald-500"
                      : item.status === "active"
                        ? "bg-amber-500 ring-4 ring-amber-500/20"
                        : "bg-line"
                  }`}
                />
                <h3 className="text-sm font-semibold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* ------------------------------------------------------- Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-28 pt-8">
          <div className="gradient-ring reveal relative overflow-hidden rounded-3xl bg-surface p-10 text-center shadow-[var(--shadow-card)] sm:p-16">
            <div
              aria-hidden="true"
              className="aura pointer-events-none absolute inset-x-0 top-0 h-64"
            />
            <div className="relative">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Want to hear about the next one?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-pretty leading-relaxed text-muted">
                Questions, partnerships, bug reports, or an early look at what&apos;s
                being built — one inbox handles all of it.
              </p>

              {/* Swap this for a real form once an email service is wired up. */}
              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-block rounded-full bg-ink px-7 py-3 text-sm font-medium text-canvas transition-transform hover:-translate-y-0.5 hover:opacity-90"
              >
                {site.email}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="reveal mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-brand">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted">{intro}</p>
      </div>
      {children}
    </section>
  );
}
