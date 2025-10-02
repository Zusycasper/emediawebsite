import React, { useState, useEffect } from "react";
import CookieSettingsModal from "./CookieSettingsModal";
import "./CookiePopup.css";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // DEV: reset cookiesAccepted on localhost for testing
    if (window.location.hostname === "localhost") {
      localStorage.removeItem("cookiesAccepted");
    }

    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setShowPopup(true);
  }, []);

  const handleAcceptAll = () => {
    setClosing(true); // trigger CSS slideDown
    setTimeout(() => {
      localStorage.setItem("cookiesAccepted", "true");
      setShowPopup(false); // remove banner after animation
    }, 400); // match the CSS animation duration
  };

  const handleRejectAll = () => {
    setClosing(true);
    setTimeout(() => {
      localStorage.setItem("cookiesAccepted", "false");
      setShowPopup(false);
    }, 400);
  };

  const openSettings = () => setShowSettings(true);
  const closeSettings = () => setShowSettings(false);

  if (!showPopup) return null;

  return (
    <>
      {/* Overlay */}
      <div className="cookie-overlay"></div>

      {/* Banner */}
      <div className={`cookie-banner ${closing ? "slideDown" : ""}`}>
        <p>
          To enhance your browsing experience and provide personalized content,
          we use cookies. By clicking "Accept," you agree to our use of cookies.
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            Privacy, Cookies & GDPR
          </a>
        </p>
        <div className="cookie-buttons">
          <button className="accept" onClick={handleAcceptAll}>
            Accept All Cookies
          </button>
          <button className="reject" onClick={handleRejectAll}>
            Reject All Cookies
          </button>
          <button className="settings" onClick={openSettings}>
            Cookie Settings
          </button>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && <CookieSettingsModal onClose={closeSettings} />}
    </>
  );
};

export default CookiePopup;
