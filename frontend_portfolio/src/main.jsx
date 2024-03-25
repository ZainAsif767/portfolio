import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Use createRoot to manage the root of your app
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
