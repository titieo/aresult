module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['standard', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {'import/no-duplicates':0,},
};
