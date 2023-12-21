/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{pug,js}'],
  theme: {
    extend: {
      spacing: {},
      fontFamily: {},
    },
    colors: {
      green: '#61E354',
      orange: '#FF5A02',
      blue: '#263472',
      red: '#FF2222',
      yellow: '#FDD300',
      'blue-light': '#00BEFA',
      white: '#ffffff',
    },
    screens: {
      lg: '769px',
      lg2: '1024px',
      xl: '1660px',
    },
    container: {
      center: true,
    },
  },

  fontSize: {
    h1: ['7.5rem', '7.5rem'],
    h2: ['5.625rem', '5.625rem'],
    h3: ['5rem', 'normal'],
    d00: ['4.375rem', ' 5rem '],
    d01: ['4.375rem', ' 4.375rem'],
    d02: ['3.125rem', ' 3.75rem'],
    d04: ['3.125rem', ' 3.125rem'],
    d05: ['2.875rem', ' 3.5rem'],
    d06: ['2.5rem', ' 3.4375rem'],
    d07: ['2.5rem', ' 2.25rem'],
    d08: ['1.875rem', ' 150%'],
    d09: ['1.875rem', ' normal'],
    d10: ['1.625rem', ' 2.25rem'],
    d11: ['1.5rem', ' 2.25rem'],
    d12: ['1.5rem', ' 2.125rem'],
    d13: ['1.5rem', ' 1.875rem'],
    d14: ['1.25rem', ' normal'],
    d15: ['1.125rem', ' 1.875rem'],
    d16: ['1.125rem', ' normal'],
    d17: ['1rem', ' 1.5rem'],
    d18: ['1rem', ' normal'],
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1530px',
          padding: '0 195px',
          marginRight: 'auto',
          marginLeft: 'auto',
        },
      });
    },
  ],
};
