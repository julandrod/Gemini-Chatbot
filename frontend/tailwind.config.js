/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-button": "#282B2D",
        "hover-button": "#36383B",
        "main-bg": "#131215",
        "sidebar-item": "#1E1F21"
      },
    },
  },
  plugins: [],
};
