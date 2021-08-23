/* eslint-disable import/no-extraneous-dependencies, global-require */
const plugins = [
  require('autoprefixer'),
  require('tailwindcss/nesting'),
  require('tailwindcss'),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push();
}

module.exports = { plugins };
