"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react"; // Added Menu and X icons for hamburger menu
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import LogoHoverEffect from "../LogoHoverEffect/LogoHoverEffect";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="h-[87px] bg-[linear-gradient(to_right,_rgba(255,255,255,0.25)_5%,_rgba(255,255,255,0.25)_25%,_rgba(0,155,177,0.25)_60%,_rgba(178,81,154,0.25)_80%)] shadow-sm font-sans text-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center p-1 mt-2">
                <Link to="/home">
                  {/* Large screens - LogoHoverEffect */}
                  <div className="hidden lg:block w-100 h-20 mr-2">
                    <LogoHoverEffect />
                  </div>

                  {/* Small screens - static image */}
                  <div className="block lg:hidden w-50 h-20 mr-2">
                    <img
                      src="/media/logo_final.png"
                      alt="Mediabiz Logo"
                      className="w-full h-full"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden justify-end md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/home"
                  className="text-gray-900 hover:text-[#009BB1] px-3 py-2 font-medium"
                >
                  HOME
                </Link>

                <Link
                  to="/about"
                  className="text-gray-900 hover:text-[#009BB1] px-3 py-2 font-medium"
                >
                  ABOUT US
                </Link>

                {/* Services Dropdown */}
                <div className="relative group flex align-items: flex-start">
                  <DropdownMenu>
                    <Link
                      to="/services"
                      className="text-gray-900 hover:text-[#009BB1] px-3 py-2 font-medium"
                    >
                      SERVICES
                    </Link>

                    <DropdownMenuTrigger className="flex items-center text-gray-700 px-3 py-2 font-medium">
                      <ChevronDown className="ml-1 w-4 h-4 hover:text-[#009BB1]" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="mt-2 w-36 bg-white/50 shadow-lg rounded-md font-sans text-base">
                      <DropdownMenuItem>
                        <Link
                          to="/digital_marketing"
                          className="hover:text-[#009BB1] w-full block"
                        >
                          Digital Marketing
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-[#111111] opacity-20 w-[144px]  align-center" />
                      <DropdownMenuItem>
                        <Link
                          to="/web_development"
                          className="hover:text-[#009BB1] w-full block"
                        >
                          Web Development
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-900 hover:text-[#009BB1] p-2"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Contact Button - hidden on mobile to save space */}
            <div className="hidden md:flex items-center">
              <Link to="/contact">
                <Button className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-6 py-2 font-medium">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="fixed top-[87px] right-0 bottom-0 left-0 bg-white/60 backdrop-blur-sm z-40 md:hidden"></div>
          )}

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200 absolute top-20 left-0 w-full z-50">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/home"
                  className="text-gray-900 hover:text-[#009BB1] block px-3 py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>

                <Link
                  to="/about"
                  className="text-gray-900 hover:text-[#009BB1] block px-3 py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT US
                </Link>

                <Link
                  to="/services"
                  className="text-gray-900 hover:text-[#009BB1] block px-3 py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SERVICES
                </Link>

                {/* Mobile Services Submenu */}
                <div className="pl-4 space-y-1">
                  <Link
                    to="/digital_marketing"
                    className="text-gray-700 hover:text-[#009BB1] block px-3 py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/web_development"
                    className="text-gray-700 hover:text-[#009BB1] block px-3 py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                </div>

                {/* Contact button in mobile menu */}
                <div className="pt-2">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-6 py-2 font-medium w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
