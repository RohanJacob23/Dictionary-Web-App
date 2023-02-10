import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'tw-elements';
import { DictProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DictProvider>
    <App />
  </DictProvider>
);
