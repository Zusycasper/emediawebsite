import React, { useState } from "react";
import "./CookiePopup.css";

// helper function to ensure we have a persistent UUID
function getOrCreateSessionUuid() {
  let uuid = localStorage.getItem("sessionUuid");
  if (!uuid) {
    uuid = crypto.randomUUID(); // modern browsers
    localStorage.setItem("sessionUuid", uuid);
  }
  return uuid;
}

// send consent to backend
async function sendConsentToServer(consent) {
  const response = await fetch("/api/consent.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(consent),
  });
  return await response.json();
}

// conditional script loader
function loadGoogleAnalytics() {
  if (window.gtag) return;
  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"; // replace with your GA ID
  script.async = true;
  document.head.appendChild(script);
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-XXXXXXX");
  };
}

const CookieSettingsModal = ({ onClose }) => {
  const [cookies, setCookies] = useState({
    strictlyNecessary: true,
    performance: false,
    functional: false,
    targeting: false,
    social: false,
  });

  const toggleCookie = (key) => {
    setCookies((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const confirmChoices = async () => {
    // Save locally
    localStorage.setItem("cookiesAccepted", JSON.stringify(cookies));

    // Send to backend
    const sessionUuid = getOrCreateSessionUuid();
    try {
      await sendConsentToServer({
        sessionUuid,
        userId: null, // or logged-in user id if available
        choices: cookies,
        status: "custom", // means not full accept/reject, but custom
      });

      // Conditionally load scripts
      if (cookies.performance) {
        loadGoogleAnalytics();
      }

    } catch (err) {
      console.error("Consent save failed", err);
    }

    onClose();
  };

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

      <div className="cookie-category">
        <h3 className="text-gray-600">Strictly Necessary Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.strictlyNecessary} disabled />
          <span className="slider"></span>
        </label>
      </div>

      <div className="cookie-category">
        <h3 className="text-gray-600">Performance Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.performance} onChange={() => toggleCookie("performance")} />
          <span className="slider"></span>
        </label>
      </div>

      <div className="cookie-category">
        <h3 className="text-gray-600">Functional Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.functional} onChange={() => toggleCookie("functional")} />
          <span className="slider"></span>
        </label>
      </div>

      <div className="cookie-category">
        <h3 className="text-gray-600">Targeting Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.targeting} onChange={() => toggleCookie("targeting")} />
          <span className="slider"></span>
        </label>
      </div>

      <div className="cookie-category">
        <h3 className="text-gray-600">Social Media Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.social} onChange={() => toggleCookie("social")} />
          <span className="slider"></span>
        </label>
      </div>

      <button className="confirm-btn" onClick={confirmChoices}>Confirm My Choices</button>
    </div>
  );
};

export default CookieSettingsModal;
