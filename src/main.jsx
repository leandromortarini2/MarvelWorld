import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css"; // Asegúrate de que el archivo CSS compilado es importado
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
