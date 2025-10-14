import React, { useState, useEffect } from "react";
import CookieSettingsModal from "./CookieSettingsModal";
import "./CookiePopup.css";
import { getOrCreateSessionUuid, sendConsentToServer } from "../../utils/consentClient";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [closing, setClosing] = useState(false);

  // New: log user visit on load
  useEffect(() => {
    const sessionUuid = getOrCreateSessionUuid();

    // Log page visit to backend (log_visit.php)
    fetch("https://www.e-mediabiz.com/api/log_visit.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionUuid,
        pageUrl: window.location.href,
        referrer: document.referrer || null,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.logId) {
          // Save the log ID to localStorage for session end update
          localStorage.setItem("visitLogId", data.logId); // corresponds to visitor_logs.id
        }
      })
      .catch((err) => console.error("Visit log failed:", err));

    // When the user leaves the page, mark session end
    const handleBeforeUnload = () => {
      const logId = localStorage.getItem("visitLogId");
      if (logId) {
        navigator.sendBeacon(
          "https://www.e-mediabiz.com/api/update_session_end.php",
          JSON.stringify({ logId: parseInt(logId, 10) }) // use visitor_logs.id
        );
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    if (window.location.hostname === "localhost") {
      localStorage.removeItem("cookiesAccepted");
    }

    const accepted = localStorage.getItem("cookiesAccepted");
    if (!accepted) setShowPopup(true);

    const handleOpenCookies = () => {
      const accepted = localStorage.getItem("cookiesAccepted");
      if (!accepted) setShowPopup(true);
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
          status: "accepted", // matches ENUM('accepted','rejected','custom') in cookie_consents
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
          status: "rejected", // matches ENUM in cookie_consents
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
      {(showPopup || showSettings) && <div className="cookie-overlay"></div>}

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
