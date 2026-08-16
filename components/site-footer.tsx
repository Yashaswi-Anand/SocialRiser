import Link from "next/link";
import { Logo } from "@/components/logo";
import { site, visibleProducts } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface/50 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}. Building focused products, one at a time.
            </p>
          </div>

          <FooterColumn title="Products">
            {visibleProducts.map((product) =>
              product.url ? (
                <FooterLink key={product.id} href={product.url}>
                  {product.name}
                </FooterLink>
              ) : (
                <li key={product.id} className="text-sm text-subtle/70">
                  {product.name} — soon
                </li>
              ),
            )}
          </FooterColumn>

          <FooterColumn title="Studio">
            <FooterLink href="/#studio">About</FooterLink>
            <FooterLink href="/#roadmap">Roadmap</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn title="Legal">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href={`mailto:${site.email}`}>{site.email}</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.founded} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-subtle">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted transition-colors hover:text-ink"
      >
        {children}
      </Link>
    </li>
  );
}
