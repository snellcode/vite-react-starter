import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LayoutApp } from "src/layout/app";
import "src/style/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LayoutApp />
  </StrictMode>
);
