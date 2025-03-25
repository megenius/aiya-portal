import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}",
    "node_modules/preline/dist/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',

        ],
      },
      colors: {
        primary: "#2563eb",
        primaryHover: "#b6554b",
        secondary: "#bfdbfe",
      },
    },
  },

  plugins: [
    // require("preline/plugin"),
    // require("tailwindcss-animate"),
    // require('@tailwindcss/typography'),
  ],
} satisfies Config;

