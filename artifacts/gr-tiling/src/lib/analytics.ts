type DataLayerPayload = {
  event: string;
  [key: string]: unknown;
};

const ATTRIBUTION_STORAGE_KEY = "gr_lead_attribution";
const TRACKING_PARAM_NAMES = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "gbraid",
  "wbraid",
  "msclkid",
  "fbclid",
];

declare global {
  interface Window {
    dataLayer?: DataLayerPayload[];
    __grAnalyticsContactTrackingInstalled?: boolean;
  }
}

function currentPageContext() {
  if (typeof window === "undefined") {
    return {};
  }

  return {
    page_path: window.location.pathname,
    page_location: window.location.href,
    page_title: document.title,
  };
}

export function pushDataLayer(payload: DataLayerPayload) {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...currentPageContext(),
    ...payload,
  });
}

function getTrackingParams() {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  return TRACKING_PARAM_NAMES.reduce<Record<string, string>>((acc, name) => {
    const value = params.get(name);
    if (value) {
      acc[name] = value;
    }
    return acc;
  }, {});
}

function getStoredAttribution() {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

function removeTrackingParamsFromUrl() {
  if (typeof window === "undefined") {
    return;
  }

  const url = new URL(window.location.href);
  let hasTrackingParams = false;

  TRACKING_PARAM_NAMES.forEach((name) => {
    if (url.searchParams.has(name)) {
      url.searchParams.delete(name);
      hasTrackingParams = true;
    }
  });

  if (!hasTrackingParams) {
    return;
  }

  window.history.replaceState(
    window.history.state,
    document.title,
    `${url.pathname}${url.search}${url.hash}`,
  );
}

export function initLeadAttribution() {
  if (typeof window === "undefined") {
    return;
  }

  if (window.sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY)) {
    removeTrackingParamsFromUrl();
    return;
  }

  const attribution = {
    landing_page_path: window.location.pathname,
    landing_page_url: window.location.href,
    referrer: document.referrer,
    ...getTrackingParams(),
  };

  try {
    window.sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Attribution is helpful, but it should never block the site or form.
  }

  removeTrackingParamsFromUrl();
}

export function getLeadAttribution(formName: "contact_page" | "quote_modal") {
  if (typeof window === "undefined") {
    return {};
  }

  initLeadAttribution();

  return {
    form_name: formName,
    submitted_from_path: window.location.pathname,
    submitted_from_url: window.location.href,
    submitted_from_title: document.title,
    ...getStoredAttribution(),
    ...getTrackingParams(),
  };
}

export function trackGenerateLead({
  formName,
  service,
}: {
  formName: "contact_page" | "quote_modal";
  service: string;
}) {
  pushDataLayer({
    event: "generate_lead",
    form_name: formName,
    lead_source: "website",
    service,
  });
}

export function trackQuoteOpen() {
  pushDataLayer({
    event: "quote_form_open",
  });
}

export function trackVirtualPageView() {
  window.setTimeout(() => {
    pushDataLayer({
      event: "virtual_page_view",
    });
  }, 0);
}

export function installContactClickTracking() {
  if (typeof document === "undefined") {
    return;
  }

  if (window.__grAnalyticsContactTrackingInstalled) {
    return;
  }
  window.__grAnalyticsContactTrackingInstalled = true;

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const link = target.closest<HTMLAnchorElement>("a[href]");
    const href = link?.getAttribute("href");
    if (!href) {
      return;
    }

    if (href.startsWith("tel:")) {
      pushDataLayer({
        event: "contact_click",
        contact_method: "phone",
        contact_value: href.replace("tel:", ""),
      });
    }

    if (href.startsWith("mailto:")) {
      pushDataLayer({
        event: "contact_click",
        contact_method: "email",
        contact_value: href.replace("mailto:", ""),
      });
    }
  });
}
