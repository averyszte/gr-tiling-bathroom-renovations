/**
 * Formspree submission utility.
 *
 * Set VITE_FORMSPREE_ID in your environment (Cloudflare Pages → Settings → 
 * Environment Variables, or a local .env.local file) to the form ID from
 * your Formspree dashboard (e.g. "xrgvkpbq").
 *
 * To receive submissions on both emails, open your Formspree form →
 * Settings → Email Notifications → add sztejnmileravery@gmail.com as a
 * second recipient (requires Formspree Gold/Plus, or set up Gmail forwarding
 * as a free alternative).
 */

const FORM_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

export const FORMSPREE_ENDPOINT = FORM_ID
  ? `https://formspree.io/f/${FORM_ID}`
  : "";

export async function submitToFormspree(
  data: Record<string, string>,
): Promise<void> {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error("Form endpoint not configured. Please set VITE_FORMSPREE_ID.");
  }
  const res = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const json = await res.json().catch(() => ({}));
    throw new Error(
      (json as { error?: string }).error ??
        "Something went wrong. Please try again or call us directly.",
    );
  }
}
