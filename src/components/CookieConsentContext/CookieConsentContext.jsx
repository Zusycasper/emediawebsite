"use client"
import { createContext, useContext, useState, useEffect } from "react"

const CookieConsentContext = createContext()

export function CookieConsentProvider({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  })

  // Show drawer on first visit if no consent
  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent")
    if (!saved) {
      setTimeout(() => setDrawerOpen(true), 1000)
    } else {
      setPreferences(JSON.parse(saved))
    }
  }, [])

  // Save consent
  const saveConsent = (prefs) => {
    localStorage.setItem("cookie_consent", JSON.stringify(prefs))
    setPreferences(prefs)
    setDrawerOpen(false)
    setDialogOpen(false)
  }

  const resetConsent = () => {
    setDialogOpen(true) // directly open dialog
  }

  return (
    <CookieConsentContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        dialogOpen,
        setDialogOpen,
        preferences,
        setPreferences,
        saveConsent,
        resetConsent,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsent = () => useContext(CookieConsentContext)
export default CookieConsentContext