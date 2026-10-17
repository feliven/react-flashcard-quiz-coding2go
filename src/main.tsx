// import React from "react";
import ReactDOM from "react-dom/client";

const rootEl = document.getElementById("root");
const html = <h1>Hello</h1>;

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(html);
}
