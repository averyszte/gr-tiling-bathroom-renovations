import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initLeadAttribution, installContactClickTracking } from "@/lib/analytics";

initLeadAttribution();
installContactClickTracking();
createRoot(document.getElementById("root")!).render(<App />);
