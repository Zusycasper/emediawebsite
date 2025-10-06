import React, { useState, useEffect } from "react";
import CookieSettingsModal from "./CookieSettingsModal";
import "./CookiePopup.css";
import { getOrCreateSessionUuid, sendConsentToServer } from "../../utils/consentClient";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false); // banner
  const [showSettings, setShowSettings] = useState(false); // modal
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // DEV: reset cookiesAccepted on localhost for testing
    if (window.location.hostname === "localhost") {
      localStorage.removeItem("cookiesAccepted");
    }

    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setShowPopup(true);

    // Listen for "Manage Cookies" click event
    const handleOpenCookies = () => {
      const accepted = localStorage.getItem("cookiesAccepted");
      if (!accepted) setShowPopup(true); // show banner if first time
      setShowSettings(true);
    };

    window.addEventListener("openCookieManager", handleOpenCookies);
    return () => window.removeEventListener("openCookieManager", handleOpenCookies);
  }, []);

  const handleAcceptAll = async () => {
    setClosing(true);
    setTimeout(async () => {
      const choices = {
        strictlyNecessary: true,
        performance: true,
        functional: true,
        targeting: true,
        social: true,
      };
      const sessionUuid = getOrCreateSessionUuid();

      try {
        await sendConsentToServer({
          sessionUuid,
          userId: null,
          choices,
          status: "accepted",
        });
        loadGoogleAnalytics();
        localStorage.setItem("cookiesAccepted", "true");
        setShowSettings(false);
        setShowPopup(false);
      } catch (err) {
        console.error("Consent save failed", err);
        setShowSettings(false);
        setShowPopup(false);
      }
    }, 400);
  };

  const handleRejectAll = async () => {
    setClosing(true);
    setTimeout(async () => {
      const choices = {
        strictlyNecessary: true,
        performance: false,
        functional: false,
        targeting: false,
        social: false,
      };
      const sessionUuid = getOrCreateSessionUuid();

      try {
        await sendConsentToServer({
          sessionUuid,
          userId: null,
          choices,
          status: "rejected",
        });
        localStorage.setItem("cookiesAccepted", "false");
        setShowSettings(false);
        setShowPopup(false);
      } catch (err) {
        console.error("Consent save failed", err);
        setShowSettings(false);
        setShowPopup(false);
      }
    }, 400);
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

  const openSettings = () => setShowSettings(true);
  const closeSettings = () => setShowSettings(false);

  if (!showPopup && !showSettings) return null;

  return (
    <>
      {/* Overlay */}
      {(showPopup || showSettings) && <div className="cookie-overlay"></div>}

      {/* Banner */}
      {showPopup && (
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
      )}

      {/* Settings Modal */}
      {showSettings && (
        <CookieSettingsModal
          onClose={closeSettings}
          onConfirm={() => {
            setClosing(true);
            setTimeout(() => {
              setShowPopup(false);
            }, 400);
          }}
        />
      )}
    </>
  );
};

export default CookiePopup;
