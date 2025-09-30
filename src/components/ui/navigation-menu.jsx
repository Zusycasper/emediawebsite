// src/components/ui/navigation-menu.jsx
"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
      ref={ref}
      className={cn(
        "relative z-10 flex max-w-max flex-1 items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  )
);
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn(
        "group flex flex-1 list-none items-center justify-center space-x-1",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const NavigationMenuTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      className={cn(
        "group inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="ml-1 h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
);
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={cn(
        "absolute left-0 top-0 w-full md:absolute md:w-auto",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef(
  ({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        "absolute left-0 top-full flex w-full justify-center",
        "transition-[width,height] duration-300",
        className
      )}
      {...props}
    />
  )
);
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
};
