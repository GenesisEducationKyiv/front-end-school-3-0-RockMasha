import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App/App";
import Provider from "./components/Provider/Provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
