module.exports = {
  mode: 'jit',
  purge: ['src/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: ['hover'],
    },
    screens: {
      md: '48em',
      // => @media (min-width: 768px) { ... }

      lg: '64em',
      // => @media (min-width: 1024px) { ... }

      xl: '80em',
      // => @media (min-width: 1280px) { ... }
    },
    zIndex: {
      0: 0,
      5: 5,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      auto: 'auto',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '100%',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',

      '-45': '-45deg',
      0: '0',
      45: '45deg',
      90: '90deg',
      180: '180deg',
      360: '360deg',
      '-360': '-360deg',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
