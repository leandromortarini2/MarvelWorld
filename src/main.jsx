import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
