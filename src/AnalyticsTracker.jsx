// App.js
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "./analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);

  return null;
}

export default AnalyticsTracker;
