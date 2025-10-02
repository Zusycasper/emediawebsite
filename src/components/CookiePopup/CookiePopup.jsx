import React, { useState, useEffect } from "react";
import CookieSettingsModal from "./CookieSettingsModal";
import "./CookiePopup.css";
import { getOrCreateSessionUuid, sendConsentToServer } from '../../utils/consentClient';


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

const handleAcceptAll = async () => {
  setClosing(true);
  setTimeout(async () => {
    // build the choices object when user accepts all
    const choices = {
      strictlyNecessary: true,
      performance: true,
      functional: true,
      targeting: true,
      social: true
    };
    const sessionUuid = getOrCreateSessionUuid();

    try {
      const result = await sendConsentToServer({
        sessionUuid,
        userId: null, // set if user is logged in
        choices,
        status: 'accepted'
      });
      // server returns { success: true, session_uuid: '...' }
      // now load analytics
      loadGoogleAnalytics(); // implementation below
      setShowPopup(false);
    } catch (err) {
      // still close, but log error
      console.error('Consent save failed', err);
      setShowPopup(false);
    }
  }, 400); // match CSS animation
};

function loadGoogleAnalytics() {
  if (window.gtag) return;
  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
  script.async = true;
  document.head.appendChild(script);
  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXX');
  };
}

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
