import React, { useState } from "react";
import "./CookiePopup.css";

const CookieSettingsModal = ({ onClose }) => {
  const [cookies, setCookies] = useState({
    strictlyNecessary: true,
    performance: false,
    functional: false,
    targeting: false,
    social: false,
  });

  const toggleCookie = (key) => {
    setCookies(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const confirmChoices = () => {
    localStorage.setItem("cookiesAccepted", JSON.stringify(cookies));
    onClose();
  };

  return (
    <div className="cookie-settings-modal">
      <div className="modal-header">
        <img src="/logo.png" alt="Company Logo" className="modal-logo"/>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>
      <h2>Privacy Preference Center</h2>
      <p>
        When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies...
      </p>
      <div className="cookie-category">
        <h3>Strictly Necessary Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.strictlyNecessary} disabled />
          <span className="slider"></span>
        </label>
      </div>
      <div className="cookie-category">
        <h3>Performance Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.performance} onChange={() => toggleCookie("performance")} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="cookie-category">
        <h3>Functional Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.functional} onChange={() => toggleCookie("functional")} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="cookie-category">
        <h3>Targeting Cookies</h3>
        <label className="toggle">
          <input type="checkbox" checked={cookies.targeting} onChange={() => toggleCookie("targeting")} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="cookie-category">
        <h3>Social Media Cookies</h3>
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
