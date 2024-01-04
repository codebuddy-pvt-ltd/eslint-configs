module.exports = {
  env: {
    es2021: true,
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'max-len': 'off',
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'object-curly-newline': 'off',
    'arrow-parens': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-nested-ternary': 'off',
    'nonblock-statement-body-position': ['error', 'any'],
    camelcase: 'error',
    'consistent-return': 0,
    'no-restricted-syntax': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    'no-shadow': 'error',
    'no-underscore-dangle': 'off',
  },
};
