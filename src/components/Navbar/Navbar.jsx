// not in use

"use client";

import React, { useState, useEffect, useCallback, useTransition } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HashLink } from "react-router-hash-link";
import LogoHoverEffect from "../LogoHoverEffect/LogoHoverEffect";

const services = [
  { id: "digital_marketing", label: "Digital Marketing" },
  { id: "web_development", label: "Web & App Development" },
  { id: "social_media", label: "Social Media Management" },
  { id: "cloud_infrastructure", label: "Cloud & IT Infrastructure" },
  { id: "creative_design", label: "Creative Design" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const [isPending, startTransition] = useTransition();
  const location = useLocation();

  useEffect(() => {
    let rafId = null;
    const onScroll = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 50);
        rafId = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    startTransition(() => setServicesOpen(false));

    if (window.innerWidth >= 768) {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }));
      } else {
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 150);
      }
    }
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        startTransition(() => {
          setIsMobileMenuOpen(false);
          setServicesOpen(false);
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((s) => !s);
  }, []);

  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  const handleSubserviceClick = useCallback(() => {
    startTransition(() => {
      setServicesOpen(false);
      setIsMobileMenuOpen(false);
    });
  }, []);

  const handleServicesOpenChange = useCallback((open) => {
    startTransition(() => setServicesOpen(open));
  }, []);

  return (
    <div className="mb-20">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-sm font-sans text-base backdrop-blur-md
          ${isScrolled
            ? "h-16 bg-[linear-gradient(to_right,#FFFFFF_20%,#C2E7EC_70%,#ECD4E6_90%)] shadow-md"
            : "h-[87px] bg-[linear-gradient(to_right,#FFFFFF_20%,#C2E7EC_50%,#ECD4E6_90%)]"
          }
          ${isHovered ? "bg-opacity-95" : "bg-opacity-80"}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/home" className="flex items-center" onClick={() => {}}>
            <div className={`transition-transform duration-300 ${isScrolled ? "scale-75" : "scale-100"}`}>
              <div className="hidden lg:block w-100 h-20 mr-2">
                <LogoHoverEffect />
              </div>
              <div className="block lg:hidden w-50 h-20 mr-2">
                <img src="/media/logo_final.png" alt="EMediabiz Logo" className="w-full h-full" />
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/home" className="text-gray-900 hover:text-[#009BB1] px-3 py-2 font-medium">
              HOME
            </Link>
            <Link to="/about" className="text-gray-900 hover:text-[#009BB1] px-3 py-2 font-medium">
              ABOUT US
            </Link>

            <DropdownMenu open={servicesOpen}>
  <div
    onMouseEnter={() => setServicesOpen(true)}
    onMouseLeave={() => setServicesOpen(false)}
  >
    <DropdownMenuTrigger asChild>
      <button
        className="flex items-center text-gray-900 hover:text-[#009BB1] px-3 py-2 font-medium"
      >
        SERVICES <ChevronDown className="ml-1 w-4 h-4" />
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
      className="mt-0.5 w-56 bg-white/95 shadow-lg rounded-md font-sans text-base will-change-transform"
      disablescrolllock="true"
    >
      {services.map((service) => (
        <DropdownMenuItem
          key={service.id}
          className="hover:bg-teal-50 hover:shadow-lg mb-0.5"
        >
          <HashLink
            smooth
            to={`/services#${service.id}`}
            onClick={handleSubserviceClick}
          >
            {service.label}
          </HashLink>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </div>
</DropdownMenu>

          </div>

          <div className="hidden md:flex">
            <Link to="/contact">
              <Button className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-6 py-2 font-medium">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-900 hover:text-[#009BB1] p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed top-[87px] right-0 bottom-0 left-0 bg-white/60 z-40 md:hidden"
            role="presentation"
          />
        )}

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 border-t border-gray-200 absolute left-0 top-[87px] w-full z-50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/home" className="block px-3 py-2 text-gray-900 hover:text-[#009BB1]" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-900 hover:text-[#009BB1]" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
              <Link to="/services" className="block px-3 py-2 text-gray-900 hover:text-[#009BB1]" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</Link>
              <div className="pl-4 space-y-1">
                {services.map((service) => (
                  <HashLink
                    key={service.id}
                    smooth
                    to={`/services#${service.id}`}
                    className="block px-3 py-2 text-gray-700 hover:text-[#009BB1] text-sm"
                    onClick={handleSubserviceClick}
                  >
                    {service.label}
                  </HashLink>
                ))}
              </div>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-6 py-2 font-medium w-full mt-2">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default React.memo(Navbar);
