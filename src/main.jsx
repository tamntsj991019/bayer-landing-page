import React from "react";
import { createRoot } from "react-dom/client";
import App from "./layout/index.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
);
