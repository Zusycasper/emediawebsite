// components/ui/dropdown-menu.jsx
import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, Circle as CircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/* Simple re-exports where forwarding/ref not needed */
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

/* Trigger (forward ref) */
export const DropdownMenuTrigger = React.forwardRef(({ children, ...props }, ref) => (
  <DropdownMenuPrimitive.Trigger ref={ref} {...props}>
    {children}
  </DropdownMenuPrimitive.Trigger>
));
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

/* Content (Portal + safe z-index + corrected Tailwind syntax) */
export const DropdownMenuContent = React.forwardRef(
  ({ className, sideOffset = 6, align = "start", ...props }, ref) => {
    return (
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          ref={ref}
          sideOffset={sideOffset}
          align={align}
          collisionPadding={6}
          {...props}
          className={cn(
            "z-[9999] min-w-[8rem] max-h-[var(--radix-dropdown-menu-content-available-height)]",
            "bg-white/95 text-black rounded-md border p-1 shadow-lg overflow-y-auto",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
            "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            "origin-[var(--radix-dropdown-menu-content-transform-origin)]",
            className
          )}
        />
      </DropdownMenuPrimitive.Portal>
    );
  }
);
DropdownMenuContent.displayName = "DropdownMenuContent";

/* Item */
export const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    data-inset={inset}
    {...props}
    className={cn(
      "relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none",
      "focus:bg-slate-100 hover:bg-slate-50 data-[disabled]:opacity-50",
      "data-[inset]:pl-8",
      className
    )}
  />
));
DropdownMenuItem.displayName = "DropdownMenuItem";

/* Checkbox item */
export const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    checked={checked}
    {...props}
    className={cn(
      "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none",
      "focus:bg-slate-100 hover:bg-slate-50 data-[disabled]:opacity-50",
      className
    )}
  >
    <span className="absolute left-2 flex h-6 w-6 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

/* Radio group and item */
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    {...props}
    className={cn(
      "relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none",
      "focus:bg-slate-100 hover:bg-slate-50 data-[disabled]:opacity-50",
      className
    )}
  >
    <span className="absolute left-2 flex h-6 w-6 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <CircleIcon className="h-3 w-3" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

/* Label */
export const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    data-inset={inset}
    {...props}
    className={cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)}
  />
));
DropdownMenuLabel.displayName = "DropdownMenuLabel";

/* Separator */
export const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    {...props}
    className={cn("bg-border -mx-1 my-1 h-px", className)}
  />
));
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

/* Shortcut (right-side small text) */
export const DropdownMenuShortcut = ({ className, ...props }) => (
  <span className={cn("text-muted-foreground ml-auto text-xs tracking-widest", className)} {...props} />
);

/* Sub (submenu) */
export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

export const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    data-inset={inset}
    {...props}
    className={cn(
      "flex items-center w-full cursor-default rounded-sm px-2 py-1.5 text-sm outline-none select-none",
      "focus:bg-slate-100 hover:bg-slate-50 data-[state=open]:bg-slate-100",
      "data-[inset]:pl-8",
      className
    )}
  >
    {children}
    <ChevronRightIcon className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";

export const DropdownMenuSubContent = React.forwardRef(({ className, sideOffset = 6, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    sideOffset={sideOffset}
    {...props}
    className={cn(
      "z-[9999] min-w-[8rem] bg-white/95 text-black rounded-md border p-1 shadow-lg overflow-hidden",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      className
    )}
  />
));
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
