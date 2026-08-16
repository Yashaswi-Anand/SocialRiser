import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

export interface LegalSection {
  heading: string;
  /** Each string is one paragraph. Strings inside an array render as a bullet list. */
  body: (string | string[])[];
}

export function LegalLayout({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          ← Back to {site.name}
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-3 font-mono text-xs text-subtle">
          Last updated: {updated}
        </p>
        <p className="mt-6 text-pretty leading-relaxed text-muted">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <section key={section.heading}>
              <h2 className="text-lg font-semibold tracking-tight">
                {index + 1}. {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((block, blockIndex) =>
                  Array.isArray(block) ? (
                    <ul key={blockIndex} className="space-y-2 pl-1">
                      {block.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      key={blockIndex}
                      className="text-sm leading-relaxed text-muted"
                    >
                      {block}
                    </p>
                  ),
                )}
              </div>
            </section>
          ))}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
