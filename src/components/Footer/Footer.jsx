import React from "react";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Stay in the loop, follow us for the latest updates, tips, and
              exclusive offers
            </p>

            <div className="h-24">
              <a href="/home" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="media/finalized Emediabiz logo transperant.png"
                  alt="EMedia Biz Logo"
                  className="h-20"
                />
              </a>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579092162068"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook-icon lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/emediabizltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.tiktok.com/@emediabiz?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"
              >
                <img
                  className="h-[24px]"
                  src="/media/footer/tiktok.png"
                  alt="Tiktok Logo"
                />
              </a>

              <a
                href="https://x.com/emediabiz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter-icon lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
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
                  <Link to="/FAQ-emedia" className="hover:underline">
                    <li>FAQ</li>
                  </Link>
                  <Link to="/Terms-of-service" className="hover:underline">
                    <li>Terms of service</li>
                  </Link>
                  <Link to="https://www.linkedin.com/company/e-mediabiz" className="hover:underline">
                    <li>Contact us</li>
                  </Link>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Others</h4>
                <ul className="space-y-1 text-gray-400">
                  <Link to="/privacy" className="hover:underline">
                    <li>Privacy Policy</li>
                  </Link>
                  <li>
                    <a
                      href="/sitemap.xml"
                      className="text-gray-400 hover:underline"
                    >
                      Sitemap
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-400 hover:underline cursor-pointer"
                      onClick={() => {
                        const event = new Event("openCookieManager");
                        window.dispatchEvent(event);
                      }}
                    >
                      Manage Cookies
                    </a>
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
