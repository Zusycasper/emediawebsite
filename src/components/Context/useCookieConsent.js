import { useContext } from "react"
import { CookieConsentContext } from "./CookieConsentProvider"

export const useCookieConsent = () => useContext(CookieConsentContext)
