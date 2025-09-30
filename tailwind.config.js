/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
  keyframes: {
    marquee: {
      "0%": { transform: "translateX(100%)" },
      "100%": { transform: "translateX(-100%)" },
    },
  },
  scrollbarGutter: {
        stable: "stable",
        "stable-both": "stable both-edges",
  },
  animation: {
    marquee: "marquee 20s linear infinite",
  },
}

  },
  plugins: [
        function ({ addUtilities, theme }) {
      const gutter = theme("scrollbarGutter");
      const utilities = {};
      for (const key in gutter) {
        utilities[`.scrollbar-gutter-${key}`] = { "scrollbar-gutter": gutter[key] };
      }
      addUtilities(utilities, ["responsive"]);
    },
  ],
}
