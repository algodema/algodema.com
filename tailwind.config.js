const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {
        primary: {
          50: "#4200b5",
          100: "#3b00a0",
          200: "#380099",
          300: "#380099",
          400: "#2b0076",
          500: "#2b0076",
          600: "#33008b",
          700: "#33008b",
          800: "#33008b",
          900: "#33008b",
        },
      },
    },
  },
  plugins: [],
};
