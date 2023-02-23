/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans', sans-serif"],
      },
      colors: {
        'dark': '#193766',
        'muted': '#697B98',
        'primary': '#3B82F6',
        'primayLight': '#C6DBFF'
      },
    },
  },
  plugins: [],
}
