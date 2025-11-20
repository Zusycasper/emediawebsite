import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import ScrollToTop from "./components/ScrollTTop/ScrollToTop";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import ContactUs from "./pages/ContactUs/ContactUs";
import Preloader from "./pages/Preloder/Preloader";
import Privacy from "./pages/Privacy/Privacy";
import Faq from "./pages/Faq/Faq";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import AnalyticsTracker from "./AnalyticsTracker";

function App() {
  // Fixes scroll-lock issues
  useEffect(() => {
    const body = document.body;
    const observer = new MutationObserver(() => {
      if (body.hasAttribute("data-scroll-locked")) {
        body.style.overflow = "auto";
        body.style.pointerEvents = "auto";
        body.style.position = "static";
        body.style.paddingRight = "0px";
      }
    });
    observer.observe(body, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const schemaMarkup = {
     "@context": "https://schema.org",
    "@type": "Professional service",
    "@id": "",
    "name": "emedia biz",
    "image": "https://www.facebook.com/photo/?fbid=122126065640969738&set=a.122103984902969738",
    "url": "https://www.e-mediabiz.com",
    "email": "info@e-mediabiz.com",
    "telephone": "+447944139954",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 The Gossamers, Watford,Hertsfordshire",
      "addressLocality": "United Kingdom",
      "postalCode": "WD25 9AJ"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday"
        ],
        "opens": "09:00:00",
        "closes": "17:00:00"
      }
    ]
  };

  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <AnalyticsTracker />
      <ConditionalScrollToTop />

      <Routes>
        <Route path="/" element={<Preloader />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/FAQ-emedia" element={<Faq />} />
        <Route path="/Terms-of-service" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

// ScrollToTop conditional
function ConditionalScrollToTop() {
  const location = useLocation();
  const excludedPaths = ["/services"]; 
  if (excludedPaths.includes(location.pathname)) return null;
  return <ScrollToTop />;
}

export default App;
