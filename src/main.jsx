import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { FilmContextProvider } from "./contexts/FilmContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <FilmContextProvider>
        <App />
      </FilmContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
