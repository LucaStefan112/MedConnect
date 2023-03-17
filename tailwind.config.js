/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{jsx,js,ts,tsx}', './components/**/*.{jsx,js,ts,tsx}'],
  theme: {
    extend:
    {
      colors:
      {
        blue_0: '#eff6ff',
        blue_1: '#dbeafe',
        blue_2: '#bfdbfe',
        blue_3: '#93c5fd',
        blue_4: '#60a5fa',
        blue_5: '#3b82f6',
        blue_6: '#2563eb',
        blue_7: '#1d4ed8',
        blue_8: '#1e40af',
        blue_9: '##1e3a8a',
      },

      fontSize:
      {
        side_menu_font_size: 18
      }
    },
  },
  plugins: [],
}
