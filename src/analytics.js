// analytics.js
export const pageview = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-F55WZFHG20", {
      page_path: url,
    });
  }
};
