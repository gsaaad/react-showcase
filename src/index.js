import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-gradient-to-b from-amber-400 to-orange-700 rounded-xl">
      <App />
    </div>
  </React.StrictMode>
);
