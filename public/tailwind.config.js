/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}", // Target all HTML and JS files in the public directory
    "!./node_modules/**/*",
  ],
  theme: {
    extend: {
      colors:{
        customDarkBlue: '#121c2d',
        customGray: 'rgb(66, 66, 65)',
      },
      fontFamily: {
        varela: ['Varela Round', 'sans-serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.indent-right': {
          'text-indent': '10px',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
