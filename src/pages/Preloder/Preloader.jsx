import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PreloaderBg from "./PreloaderBg";

function Preloader() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user already visited
    const hasVisited = localStorage.getItem("emedia_hasVisited");

    if (hasVisited) {
      // Skip preloader → go directly to home
      navigate("/home");
    } else {
      // First-time visitor → show preloader
      const timer = setTimeout(() => {
        localStorage.setItem("emedia_hasVisited", "true");
        navigate("/home");
      }, 6000); // 6 seconds

      return () => clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white">
      <PreloaderBg />
    </div>
  );
}

export default Preloader;
