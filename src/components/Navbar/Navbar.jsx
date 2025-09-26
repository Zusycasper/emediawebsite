"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mb-20">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300  shadow-sm font-sans text-base backdrop-blur-md
          ${
    isScrolled
      ? "h-16 bg-[linear-gradient(to_right,#FFFFFF_20%,#C2E7EC_70%,#ECD4E6_90%)] shadow-md"
      : "h-[87px] bg-[linear-gradient(to_right,#FFFFFF_20%,#C2E7EC_50%,#ECD4E6_90%)]"
  } ${isHovered ? "bg-opacity-95" : "bg-opacity-80"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center">
              <div
                className={`flex-shrink-0 flex items-center p-1 transition-all duration-300 ${
                  isScrolled ? "scale-75" : "scale-100"
                }`}
              >
                <Link to="/home">
                  {/* Large screens - LogoHoverEffect */}
                  <div className="hidden lg:block w-100 h-20 mr-2">
                    <LogoHoverEffect />
                  </div>

                  {/* Small screens - static image */}
                  <div className="block lg:hidden w-50 h-20 mr-2">
                    <img
                      src="/media/logo_final.png"
                      alt="EMediabiz Logo"
                      className="w-full h-full"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
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
                <div className="relative group flex items-center">
                  <DropdownMenu>
                     <Link to="/services">
                      SERVICES
                     </Link>
                    <DropdownMenuTrigger className="flex items-center text-gray-900 hover:text-[#009BB1] px-3 py-2 font-medium">

                      <ChevronDown className="ml-1 w-4 h-4" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="mt-0.5 w-56 bg-white/95 shadow-lg rounded-md font-sans text-base">
                      <DropdownMenuItem className="hover:bg-teal-50 hover:shadow-lg mb-0.5">
                        <HashLink smooth to="/services#digital_marketing">
                          Digital Marketing
                        </HashLink>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="hover:bg-teal-50 hover:shadow-lg mb-0.5">
                        <HashLink smooth to="/services#web_development">
                          Web & App Development
                        </HashLink>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="hover:bg-teal-50 hover:shadow-lg mb-0.5">
                        <HashLink smooth to="/services#social_media">
                          Social Media Management
                        </HashLink>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="hover:bg-teal-50 hover:shadow-lg mb-0.5">
                        <HashLink smooth to="/services#cloud_infrastructure">
                          Cloud & IT Infrastructure
                        </HashLink>
                      </DropdownMenuItem>

                      <DropdownMenuItem className="hover:bg-teal-50 hover:shadow-lg mb-0.5">
                        <HashLink smooth to="/services#creative_design">
                          Creative Design
                        </HashLink>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
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

            {/* Contact Button (Desktop only) */}
            <div className="hidden md:flex items-center">
              <Link to="/contact">
                <Button className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-6 py-2 font-medium">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed top-[87px] right-0 bottom-0 left-0 bg-white/60 backdrop-blur-sm z-40 md:hidden"></div>
          )}

          {/* Mobile Menu */}
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
                  <HashLink
                    to="/services#digital_marketing"
                    className="text-gray-700 hover:text-[#009BB1] block px-3 py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Digital Marketing
                  </HashLink>
                  <HashLink
                    to="/services#web_development"
                    className="text-gray-700 hover:text-[#009BB1] block px-3 py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Web Development
                  </HashLink>
                  <HashLink
                    to="/services#social_media"
                    className="text-gray-700 hover:text-[#009BB1] block px-3 py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Social Media Management
                  </HashLink>
                  <HashLink
                    to="/services#cloud_infrastructure"
                    className="text-gray-700 hover:text-[#009BB1] block px-3 py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Cloud & IT Infrastructure Support
                  </HashLink>
                  <HashLink
                    to="/services#creative_design"
                    className="text-gray-700 hover:text-[#009BB1] block px-3 py-2 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Creative Design
                  </HashLink>
                </div>

                {/* Contact button in mobile menu */}
                <div className="pt-2">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
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
