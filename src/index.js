import React from "react";import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Store, persistor } from "./Redux Toolkit/Store/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
