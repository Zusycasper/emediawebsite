"use client"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { useCookieConsent } from "../Context/CookieConsentContext/CookieConsentContext"

export default function CookieConsentDrawer() {
  const {
    drawerOpen,
    dialogOpen,
    setDialogOpen,
    preferences,
    setPreferences,
    saveConsent,
  } = useCookieConsent()

  // Overlay to dim background
  const Overlay = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
  )

  return (
    <>
      {drawerOpen && <Overlay />}
      {dialogOpen && <Overlay />}

      {/* Drawer Banner */}
      <Drawer open={drawerOpen}>
        <DrawerContent className="p-6 max-w-md mx-auto mt-24 bg-white rounded-lg shadow-lg z-50 relative">
          <DrawerHeader>
            <DrawerTitle className="text-xl font-bold">We value your privacy</DrawerTitle>
            <DrawerDescription>
              To enhance your browsing experience and provide personalized content, we use cookies.
              By clicking "Accept All Cookies," you agree to our use as outlined in our privacy statement.
              You can manage your preferences at any time.
            </DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col gap-3 mt-6">
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
        </DrawerContent>
      </Drawer>

      {/* Preferences Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg z-50 relative">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Privacy Preference Center</DialogTitle>
            <DialogDescription>
              You can choose which types of cookies you allow. Blocking some cookies may impact your experience.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Strictly Necessary Cookies */}
            <div className="flex items-center justify-between">
              <span>Strictly Necessary Cookies</span>
              <span className="text-sm text-gray-500">Always Active</span>
            </div>

            {["performance", "functional", "targeting", "social"].map((type) => (
              <div key={type} className="flex items-center justify-between">
                <span className={type[0].toUpperCase() + type.slice(1) + " Cookies"}>{type[0].toUpperCase() + type.slice(1)} Cookies</span>
                <Switch
                  checked={preferences[type]}
                  onCheckedChange={(checked) =>
                    setPreferences({ ...preferences, [type]: checked })
                  }
                />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => saveConsent(preferences)}>Confirm My Choices</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
