import React, { useState, useEffect } from "react";
import "./CookiePopup.css";
import { getOrCreateSessionUuid, sendConsentToServer } from "../../utils/consentClient";

const CookieSettingsModal = ({ onClose, onConfirm }) => {
  const [cookies, setCookies] = useState({
    strictlyNecessary: true,
    performance: false,
    functional: false,
    targeting: false,
    social: false,
  });

  // Load previous choices
  useEffect(() => {
    const saved = localStorage.getItem("cookiesAccepted");
    if (saved && saved !== "true" && saved !== "false") {
      try {
        setCookies(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const toggleCookie = (key) => setCookies(prev => ({ ...prev, [key]: !prev[key] }));

  const confirmChoices = async () => {
    localStorage.setItem("cookiesAccepted", JSON.stringify(cookies));
    const sessionUuid = getOrCreateSessionUuid();

    try {
      await sendConsentToServer({
        sessionUuid,
        userId: null,
        choices: cookies,
        status: Object.values(cookies).every(Boolean) ? "accepted" : "custom",
      });

      if (cookies.performance) loadGoogleAnalytics();
    } catch (err) {
      console.error("Consent save failed", err);
    }

    onClose();      // closes modal
    if (onConfirm) onConfirm(); // closes banner/drawer
  };

  function loadGoogleAnalytics() {
    if (window.gtag) return;
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-F55WZFHG20";
    script.async = true;
    document.head.appendChild(script);
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-F55WZFHG20");
    };
  }

  return (
    <div className="cookie-settings-modal">
      <div className="modal-header">
        <img src="/media/logo_final.png" alt="Company Logo" className="modal-logo p-1 h-14" />
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <h2 className="pb-2 font-bold">Privacy Preference Center</h2>
      <p>
        When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies...
      </p>

      {["strictlyNecessary", "performance", "functional", "targeting", "social"].map(key => (
        <div key={key} className="cookie-category">
          <h3 className="text-gray-600">
            {key === "strictlyNecessary" ? "Strictly Necessary Cookies" :
             key === "performance" ? "Performance Cookies" :
             key === "functional" ? "Functional Cookies" :
             key === "targeting" ? "Targeting Cookies" :
             "Social Media Cookies"}
          </h3>
          <label className="toggle">
            <input
              type="checkbox"
              checked={cookies[key]}
              disabled={key === "strictlyNecessary"}
              onChange={() => toggleCookie(key)}
            />
            <span className="slider"></span>
          </label>
        </div>
      ))}

      <button className="confirm-btn" onClick={confirmChoices}>Confirm My Choices</button>
    </div>
  );
};

export default CookieSettingsModal;
