import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import "./index.css";

import { BrowserRouter } from "react-router-dom";

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 3000,
  transition: transitions.SCALE,
  type: 'error'
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
