import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initLeadAttribution, installContactClickTracking } from "@/lib/analytics";

initLeadAttribution();
installContactClickTracking();

const rootEl = document.getElementById("root")!;
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, <App />);
} else {
  createRoot(rootEl).render(<App />);
}
