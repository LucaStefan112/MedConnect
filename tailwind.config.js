/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{jsx,js,ts,tsx}', './components/**/*.{jsx,js,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        side_menu_font_size: 18
      }
    },
  },
  plugins: [],
}
