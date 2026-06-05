type DataLayerPayload = {
  event: string;
  [key: string]: unknown;
};

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
