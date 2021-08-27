import { defineConfig } from 'windicss/helpers';
import defaultTheme from 'windicss/defaultTheme';

export default defineConfig({
  darkMode: 'class', // or 'media' or 'class'
  //   attributify: true,
  theme: {
    minHeight: {
      0: '0',
      20: '20rem',
      full: '100%',
      screen: '100vh',
    },
    extend: {
      gridTemplateColumns: {
        layout: 'repeat(auto-fill, minmax(15rem,1fr))',
      },
      gridTemplateRows: {
        card: '45% minmax(min-content,1fr) max-content',
      },
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],

      serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
    },
    screens: {
      md: '48em',
      // => @media (min-width: 768px) {  }

      lg: '64em',
      // => @media (min-width: 1024px) {  }

      xl: '80em',
      // => @media (min-width: 1280px) {  }
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
  },
  plugins: [],
});
