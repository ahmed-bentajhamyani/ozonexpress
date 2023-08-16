/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'ozon-red': '#CB0130',
        'ozon-red-tone': '#BF163D',
        'ozon-red-tint': '#FEC2D0',
        'ozon-yellow': '#FCE79E',
        'ozon-yellow-tone': '#FBE185',
        'ozon-gray': '#F2F2F2',
        'ozon-dark-gray': '#1e1e1e',
      },
      dropShadow: {
        'black': '0 0 12px rgba(0, 0, 0, 0.3)',
        'yellow': '0 0 12px rgba(252, 231, 158, 0.4)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("daisyui"),
  ],
}

