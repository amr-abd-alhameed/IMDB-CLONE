import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Store } from "./Redux Toolkit/Store/Store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
