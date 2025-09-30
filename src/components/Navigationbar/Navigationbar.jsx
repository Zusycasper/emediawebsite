"use client";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import LogoHoverEffect from "../LogoHoverEffect/LogoHoverEffect"; // Make sure path is correct

export default function Navigationbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // handle scroll for logo animation & navbar height
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { id: "digital_marketing", label: "Digital Marketing" },
    { id: "web_development", label: "Web & App Development" },
    { id: "social_media", label: "Social Media Management" },
    { id: "cloud_infrastructure", label: "Cloud & IT Infrastructure" },
    { id: "creative_design", label: "Creative Design" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 shadow-sm backdrop-blur-md ${
        isScrolled
          ? "h-16 bg-[linear-gradient(to_right,#FFFFFF_20%,#C2E7EC_70%,#ECD4E6_90%)] shadow-md"
          : "h-[87px] bg-[linear-gradient(to_right,#FFFFFF_20%,#C2E7EC_50%,#ECD4E6_90%)]"
      } ${isHovered ? "bg-opacity-95" : "bg-opacity-80"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        {/* Logo */}
        <Link to="/home" className="flex items-center">
          <div className="relative">
            {/* Animated logo for desktop */}
            <div
              className={`hidden lg:block transition-transform duration-300 ${
                isScrolled ? "scale-75" : "scale-100"
              }`}
            >
              <LogoHoverEffect />
            </div>

            {/* Animated logo for mobile */}
            <div
              className={`block lg:hidden transition-transform duration-300 ${
                isScrolled ? "scale-75" : "scale-100"
              }`}
            >
              <img
                src="/media/logo_final.png"
                alt="EMediabiz Logo"
                className="w-28 h-20 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </Link>

        {/* Menu */}
        <div className="flex gap-6 items-center relative">
          <Link to="/home" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About Us
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            {/* Services main link */}
            <Link
              to="/services"
              className="hover:text-blue-600 flex items-center"
            >
              Services
            </Link>

            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-0 w-64 bg-white rounded-md shadow-lg border z-50"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <ul className="flex flex-col p-2">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <HashLink
    smooth
  to="/services#creative_design"
  scroll={el => {
    setTimeout(() => {
      const yOffset = -87; // navbar height
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }, 50); // tiny delay to wait for render
  }}
  className="block w-full"
                      >
                        {service.label}
                      </HashLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
