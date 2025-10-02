import { useCookieConsent } from "@/context/useCookieConsent"

export default function Footer() {
  const { resetConsent } = useCookieConsent()
  return <button onClick={resetConsent}>Manage Cookies</button>
}
