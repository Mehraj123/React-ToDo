import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App.js";
import "./src/index.css";
import { Provider } from "./src/contexts/books.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider value={5}>
    <App></App>
  </Provider>
);
