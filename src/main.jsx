import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import i18n from "./i18n/i18next";  // Only import i18n once in the entry point

createRoot(document.getElementById("root")).render(<App />);
