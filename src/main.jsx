import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { initTheme } from "./theme";
import { ThemeProvider } from "./context/ThemeContext";

// apply stored or system theme before app mounts to avoid flash
if (typeof window !== "undefined") {
  initTheme();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
