import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    } catch {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
