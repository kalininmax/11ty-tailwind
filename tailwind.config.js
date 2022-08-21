const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: '30px',
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#fff',
        'white-1': '#fcfcfc',
        'black-1': '#303333',
        'purple-1': '#f4edff',
        'grey-1': '#979999',
        'grey-2': '#888a8a',
        'grey-3': '#b4bfbf',
        'grey-5': '#ececec',
        'aqua-4': '#b3f6f3',
        'yellow-3': '#fef4db'
      },
      boxShadow: {
        'dropdown': '0px 25px 70px -25px rgba(46, 50, 50, 0.15)',
      },
      spacing: {
        0.75: '0.19rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/**/*.njk', './src/**/*.svg'],
};
