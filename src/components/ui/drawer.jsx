import { Drawer as DrawerPrimitive } from "vaul"
import { cn } from "@/lib/utils"

function Drawer({ ...props }) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({ ...props }) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({ ...props }) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({ ...props }) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({ className, ...props }) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed left-0 right-0 bottom-0 top-0 z-40 bg-black/60 backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  )
}

function DrawerContent({ className, children, ...props }) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          "group/drawer-content fixed z-50 flex flex-col border shadow-2xl",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[90vh] data-[vaul-drawer-direction=top]:rounded-b-2xl data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[90vh] data-[vaul-drawer-direction=bottom]:rounded-t-2xl data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:top-0 data-[vaul-drawer-direction=right]:bottom-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:max-w-lg data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:rounded-l-2xl",
          "data-[vaul-drawer-direction=left]:top-0 data-[vaul-drawer-direction=left]:bottom-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:max-w-lg data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:rounded-r-2xl",
          "bg-white border-gray-200",
          className,
        )}
        {...props}
      >
        <div className="bg-gradient-to-r from-[#009BB1] to-[#B2519A] mx-auto mt-4 hidden h-1.5 w-16 shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-[#009BB1] via-[#009BB1] to-[#B2519A] text-white",
        "flex flex-col gap-2 p-8 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:text-left",
        className,
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-3 p-6 bg-gray-50 border-t border-gray-100", className)}
      {...props}
    />
  )
}

function DrawerTitle({ className, ...props }) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-2xl font-bold text-white leading-tight", className)}
      {...props}
    />
  )
}

function DrawerDescription({ className, ...props }) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-white/90 text-base leading-relaxed font-medium", className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
