/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#193766',
        'muted': '#697B98',
        'primary': '#3B82F6'
      },
    },
  },
  plugins: [],
}
