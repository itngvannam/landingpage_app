/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sr: ["Sora"],
    },
    extend: {
      fontSize: {
        13: "13px", 
        14: "14px",
        20: "20px",
      },
    },
  },
  plugins: [],
}
