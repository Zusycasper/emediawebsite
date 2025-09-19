import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import NewsletterForm from "../NewsletterForm/NewsletterForm";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Follow us on our social media channels for updates, tips, and
              exclusive offers you won't want to miss.
            </p>

            <div className="h-24">
              <Link to="/home">
                <img
                  src="/media/mediabiz_logo_transparent.png"
                  alt="EMedia Biz Logo"
                  className="h-24"
                  onClick={(handleClick) => {
                          window.scrollTo(0, 0);
                          handleClick();
                        }}
                />
              </Link>
            </div>

            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full justify-center items-center flex">
                <Link
                  to="https://www.facebook.com/profile.php?id=61579092162068"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-facebook-icon lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full justify-center items-center flex">
                <Link
                  to="https://www.instagram.com/emediabizltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram-icon lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full justify-center items-center flex">
               <Link to="https://www.tiktok.com/@emediabiz?lang=en" target="_blank" rel="noopener noreferrer">
                <img className="h-[24px]" src="/media/footer/tiktok.png"  alt="Tiktok Logo"/>
                </Link>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full justify-center items-center flex">
               <Link to="https://x.com/emediabiz" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-twitter-icon lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Insert your email address here
              </h3>
              <NewsletterForm />
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Help</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>FAQ</li>
                  <li>Terms of service</li>
                  <li>Contact us</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Others</h4>
                <ul className="space-y-1 text-gray-400">
                  <li>Privacy Policy</li>
                  <li><a href="/sitemap.xml" className="text-blue-600 hover:underline">Sitemap</a>
</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
