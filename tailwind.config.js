const colors = require('tailwindcss/colors');
module.exports = {
  purge: [
    './**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Kumbh Sans"'],
    },
    extend: {
      colors: {
        teal: colors.teal,
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',
      },
      fontSize: {
        xxs: '0.625rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
