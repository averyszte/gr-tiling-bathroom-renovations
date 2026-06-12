/**
 * Passes the submitted lead details to the thank-you page so the customer
 * can spot a mistyped phone number and correct it straight away.
 */

const LEAD_DETAILS_KEY = "gr_last_lead_details";

export type LeadDetails = {
  name: string;
  phone: string;
  email: string;
};

export function storeLeadDetails(details: LeadDetails) {
  try {
    window.sessionStorage.setItem(LEAD_DETAILS_KEY, JSON.stringify(details));
  } catch {
    // The thank-you page just falls back to its generic message.
  }
}

export function getStoredLeadDetails(): LeadDetails | null {
  try {
    const raw = window.sessionStorage.getItem(LEAD_DETAILS_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as Partial<LeadDetails>;
    if (typeof parsed.phone !== "string" || !parsed.phone) {
      return null;
    }
    return {
      name: typeof parsed.name === "string" ? parsed.name : "",
      phone: parsed.phone,
      email: typeof parsed.email === "string" ? parsed.email : "",
    };
  } catch {
    return null;
  }
}
