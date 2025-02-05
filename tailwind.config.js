/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{pug,js}'],
  theme: {
    extend: {
      spacing: {
        7.5: '1.875rem',
        9.5: '2.375rem',
        11.5: '2.875rem',
        14.25: '3.63rem',
        15: '3.75rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      height: {
        'height_bg-mob': '15.625rem',
        height_bg: '46.6rem',
        'height_bg-sect': '56.25rem',
      },
    },
    fontFamily: {
      cerapro: 'CeraPro',
    },
    colors: {
      green: '#61E354',
      orange: '#FF5A02',
      blue: '#263472',
      red: '#FF2222',
      yellow: '#FDD300',
      'blue-light': '#00BEFA',
      white: '#ffffff',
      white_darken: '#E1E1E1',
      transparent: 'transparent',
      pickup: '#E1EEFC',
      gray: '#E1EEFC99',
    },

    screens: {
      lg: '769px',
      lg2: '1024px',
      xl: '1660px',
      xl2: '1920px',
    },
    container: {
      center: true,
    },
    fontSize: {
      h1: ['7.5rem', '7.5rem'],
      h2: ['5.625rem', '5.625rem'],
      h2_2: ['5rem', '5.625rem'],
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
      d13_1: ['1.5rem', 'normal'],
      d14: ['1.25rem', ' normal'],
      d15: ['1.125rem', ' 1.875rem'],
      d16: ['1.125rem', ' normal'],
      d17: ['1rem', ' 1.5rem'],
      d18: ['1rem', ' normal'],
      d19: ['0.875rem', ' 1.5rem'],
      d20: ['0.875rem', 'normal'],
      d21: ['0.75rem', 'normal'],
      d22: ['1.75rem', 'normal'],
      d23: ['1.25rem', '1.875rem'],
      d24: ['3.3125rem', '2.875rem'],
      d25: ['5rem', '4.375rem'],
      d26: ['1.6875rem', '1.75rem'],
      d27: ['2.5rem', 'normal'],
      d28: ['2.375rem', '2.5rem'],
      d29: ['2rem', '2.25rem'],
      d30: ['0.875rem', ' 1.3125rem'],
      d31: ['0.75rem', '0.875rem'],
      d32: ['1.375rem', '1.75rem'],
      d33: ['0.625rem', 'normal'],
      d34: ['1.88rem', '2.25rem'],
      base_m: ['1.125rem', '1.4375rem'],
      base: ['1.875rem', '2.8125rem'],
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1440px',
          padding: '0 40px',
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen xl': {
            maxWidth: '1920px',
            padding: '0 195px',
          },
        },
        '.container2': {
          maxWidth: '1440px',
          padding: '0 20px',
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen xl': {
            maxWidth: '1920px',
            padding: '0 195px',
          },
        },
        '.trans-300': {
          transition: 'all 0.3s ease',
        },
      });
    },
  ],
};
