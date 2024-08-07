/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#2A4DD0",
        secondary: "#4CA154",
        black: "#111729",
        "dark-gray": "#223344",
        "medium-gray": "#68748A",
        "light-blue": "#F2F9FE",
      },
    },
  },
  plugins: [],
};
