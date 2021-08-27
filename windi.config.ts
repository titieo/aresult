import { defineConfig } from 'windicss/helpers';
export default defineConfig({
  darkMode: 'class', // or 'media' or 'class'
  //   attributify: true,
  extract: {
    include: ['src/**/*.{html,js}'],
    exclude: ['node_modules', '.git'],
  },
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
