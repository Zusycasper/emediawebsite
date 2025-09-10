import React from 'react'
import PreloaderBg from './PreloaderBg'
import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Preloader() {
      const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home"); // redirect to home
    }, 6000); // 0.6 sec

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);
  return (
    <div className="min-h-screen bg-white">
        <PreloaderBg/>
    </div>
  )
}

export default Preloader