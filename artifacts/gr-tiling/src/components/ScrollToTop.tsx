import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { trackVirtualPageView } from "@/lib/analytics";

export function ScrollToTop() {
  const [pathname] = useLocation();
  const isFirstView = useRef(true);

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    } catch {
      window.scrollTo(0, 0);
    }

    if (isFirstView.current) {
      isFirstView.current = false;
      return;
    }

    trackVirtualPageView();
  }, [pathname]);

  return null;
}
