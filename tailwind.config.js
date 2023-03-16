/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend:
    {
      colors:
      {
        side_menu_darker_blue: '#3B82F6',
        side_menu_lighter_blue: '#60A5FA'
      },

      fontSize:
      {
        side_menu_font_size: 18
      }
    },
  },
  plugins: [],
}
