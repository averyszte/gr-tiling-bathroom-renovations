import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { installContactClickTracking } from "@/lib/analytics";

installContactClickTracking();
createRoot(document.getElementById("root")!).render(<App />);
