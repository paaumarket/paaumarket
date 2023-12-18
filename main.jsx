import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./src/App";
import "./index.css";
import "@fontsource-variable/mulish";
// import "@fontsource-variable/mulish/800.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const container = document.getElementById("root");

const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
