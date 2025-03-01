import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import StarshipDetail from "./pages/StarshipDetail";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/starship/:id" element={<StarshipDetail />} />
    </Routes>
  </Router>
);
