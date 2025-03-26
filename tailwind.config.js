/** @type {import('tailwindcss').Config} */
const {heroui} = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#D29A5A",
        secondary:"#D1C8BB",
      },

      screens:{
        
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

