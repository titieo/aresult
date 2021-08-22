module.exports = {
  plugins: ['stylelint-a11y'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  //   extends: ['stylelint-config-sass-guidelines']
  ignoreFiles: ['*.min.css'],
  rules: {
    'no-duplicate-selectors': true,
    'declaration-no-important': true,
    'no-duplicate-selectors': true,
    'at-rule-no-unknown': [true, { ignoreAtRules: ['include', 'layer'] }],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
      },
    ],
    'max-nesting-depth': [2, { ignore: ['pseudo-classes'] }],
    'a11y/media-prefers-reduced-motion': true,
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': true,
  },
};
