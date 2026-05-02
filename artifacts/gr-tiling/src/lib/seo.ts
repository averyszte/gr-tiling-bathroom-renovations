/**
 * Shared per-page SEO helper.
 *
 * Sets <title>, meta description, Open Graph + Twitter tags, and a
 * canonical link tag. Returns a cleanup function that restores the
 * previous values, suitable for direct use as a React useEffect return.
 *
 * NOTE: SITE_URL is a placeholder. Update it to the production domain
 * before launch (or wire it through an env var).
 */

export const SITE_URL = "https://www.grtilingdublin.ie";

export type PageSeo = {
  title: string;
  description: string;
  /** Path beginning with a leading slash, e.g. "/services/bathroom-renovations". */
  path: string;
};

function setMetaTag(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Injects (or updates) a single JSON-LD <script> tag identified by `id`.
 * Returns a cleanup function that removes the tag, suitable for useEffect.
 */
export function applyJsonLd(id: string, schema: object): () => void {
  const attr = "data-schema-id";
  let el = document.head.querySelector<HTMLScriptElement>(
    `script[${attr}="${id}"]`,
  );
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute(attr, id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(schema);
  return () => {
    el?.remove();
  };
}

export function applyPageSeo({ title, description, path }: PageSeo): () => void {
  const previousTitle = document.title;
  const previousDescription =
    document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.content ?? "";
  const previousCanonical =
    document.head
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.getAttribute("href") ?? "";

  const url = `${SITE_URL}${path}`;

  document.title = title;
  setMetaTag("name", "description", description);
  setMetaTag("property", "og:type", "website");
  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:url", url);
  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
  setLinkTag("canonical", url);

  return () => {
    document.title = previousTitle;
    if (previousDescription) {
      setMetaTag("name", "description", previousDescription);
    }
    if (previousCanonical) {
      setLinkTag("canonical", previousCanonical);
    }
  };
}
