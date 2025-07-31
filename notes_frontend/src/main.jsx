import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

const rootElem = document.getElementById("app");
if (rootElem) {
  createRoot(rootElem).render(<App />);
}
