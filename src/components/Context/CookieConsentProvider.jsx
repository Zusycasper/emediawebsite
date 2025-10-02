"use client"
import { createContext, useState, useEffect } from "react"

const CookieConsentContext = createContext()

export function CookieConsentProvider({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: false,
    functional: false,
    targeting: false,
    social: false,
  })

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent")
    if (!saved) {
      setDrawerOpen(true)
      document.body.style.overflow = "hidden" // block scrolling
    } else {
      setPreferences(JSON.parse(saved))
    }
  }, [])

  const saveConsent = (prefs) => {
    localStorage.setItem("cookie_consent", JSON.stringify(prefs))
    setPreferences(prefs)
    setDrawerOpen(false)
    setDialogOpen(false)
    document.body.style.overflow = "auto" // unblock scrolling
  }

  const resetConsent = () => setDialogOpen(true)

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

export { CookieConsentContext }
