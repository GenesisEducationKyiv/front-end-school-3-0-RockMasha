import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./page/App";
import GeneralProvider from "./context/GeneralProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralProvider>
      <App />
    </GeneralProvider>
  </StrictMode>
);
