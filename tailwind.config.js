module.exports = {
  mode: 'jit',
  purge: {
    mode: 'all',
    preserveHtmlElements: false,
    content: ['src/index.html', './src/**/*.js'],
    options: {
      keyframes: true,
    },
  },
  darkMode: 'media', // or 'media' or 'class'
  corePlugins: {
    float: false,
    clear: false,
  },
  theme: {
    minHeight: {
      0: '0',
      20: '20rem',
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      0: '0rem',
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      full: '100%',
      min: 'min-content',
      max: 'max-content',
      prose: '65ch',
      '8xl': '90rem',
    },
    extend: {
      borderRadius: ['hover'],
      gridTemplateColumns: {
        // Simple 16 column grid
        layout: 'repeat(auto-fill, minmax(15rem,1fr))',
      },
      gridTemplateRows: {
        card: '45% minmax(min-content,1fr) max-content',
      },
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
      img: '1 1 45%',
    },
    fontFamily: {
      sans: [
        '"Open Sans"',
        'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],

      serif: [
        'Merriweather',
        'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      ],

      //   mono: [
      //     'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      //   ],
    },
    screens: {
      md: '48em',
      // => @media (min-width: 768px) {  }

      lg: '64em',
      // => @media (min-width: 1024px) {  }

      xl: '80em',
      // => @media (min-width: 1280px) {  }
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
