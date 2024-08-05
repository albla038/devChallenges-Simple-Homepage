/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        secondary: "#2A4DD0",
        primary: "#4CA154",
        black: "#111729",
        "dark-gray": "#223344",
        "medium-gray": "#223344",
        "light-gray": "#F2F9FE",
      },
    },
  },
  plugins: [],
};
