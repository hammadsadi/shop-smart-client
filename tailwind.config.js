/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color-primary": "#8364e2",
        "color-secondary": "#403f83",
        "color-overly": "#505050",
      },
    },
    fontFamily: {
      ibm: "'IBM Plex Sans', sans-serif",
    },
  },
  plugins: [require("daisyui")],
};
