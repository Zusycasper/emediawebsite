import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <div>
      <nav className="bg-[linear-gradient(to_right,_rgba(255,255,255,0.25)_5%,_rgba(255,255,255,0.25)_25%,_rgba(0,155,177,0.25)_60%,_rgba(178,81,154,0.25)_80%)] shadow-sm font-sans text-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                <img
                  src="/media/logo_final.png"
                  alt="Mediabiz Logo"
                  className="w-50 h-20 mr-2"
                />
                </Link>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden justify-end md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
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
                <div className="relative group flex align-items: flex-start" >
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

            {/* Contact Button */}
            <div className="flex items-center">
              <Link to="/contact">
                <Button className="bg-[#009BB1] hover:bg-[#B2519A] text-white px-6 py-2 font-medium">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
