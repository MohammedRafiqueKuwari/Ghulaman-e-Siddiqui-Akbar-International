// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A3C34",         // Dark Green
        secondary: "#2E5A50",       // Lighter Green
        accent: "#D4AF37",          // Gold
        accentHover: "#B89729",     // Darker Gold
        text: "#FFFFFF",            // White
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};

