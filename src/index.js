import React from "react";
import ReactDOM from "react-dom";
import { AppProvider } from "./context";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  rootElement
);
