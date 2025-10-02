import React from "react";
import { Button } from "../ui/button";
import { useCookieConsent } from "../Context/useCookieConsent";

export default function CookieConsentDrawer() {
  const { drawerOpen, saveConsent, setDialogOpen } = useCookieConsent();

  if (!drawerOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white/95 flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-4">We value your privacy</h2>
      <p className="mb-6 text-center">
        To enhance your browsing experience, we use cookies. You can accept all or manage
        preferences.
      </p>
      <div className="flex flex-col gap-3 w-full max-w-xs">
        <Button
          onClick={() =>
            saveConsent({
              essential: true,
              performance: true,
              functional: true,
              targeting: true,
              social: true,
            })
          }
        >
          Accept All Cookies
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            saveConsent({
              essential: true,
              performance: false,
              functional: false,
              targeting: false,
              social: false,
            })
          }
        >
          Reject All Cookies
        </Button>
        <Button variant="secondary" onClick={() => setDialogOpen(true)}>
          Cookie Settings
        </Button>
      </div>
    </div>
  );
}
