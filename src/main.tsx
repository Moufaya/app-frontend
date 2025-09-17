import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
// import ConsentBanner from "./components/ConsentBanner"; //

const rootEl = document.getElementById("root")!;
createRoot(rootEl).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {/* <Route path="*" element={<div style={{padding:24}}>Page introuvable</div>} /> */}
      </Routes>
      {/* <ConsentBanner /> */}
    </BrowserRouter>
  </React.StrictMode>
);