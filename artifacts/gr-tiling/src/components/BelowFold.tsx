import { type ReactNode } from "react";

/**
 * Wrapper for below-the-fold page content.
 *
 * This MUST render its children synchronously so they are present in the
 * build-time prerendered HTML (scripts/prerender.tsx uses renderToString).
 * An earlier version deferred rendering until after mount via useEffect, which
 * returned null during SSR — that stripped every below-hero section (trust
 * strip, prose, process, reviews and the entire FAQ) out of dist/*.html, so
 * the richest unique copy on each page was invisible to crawlers. Rendering
 * children directly keeps the markup identical on server and first client
 * paint (clean hydration) while making all of it crawlable.
 */
export function BelowFold({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
