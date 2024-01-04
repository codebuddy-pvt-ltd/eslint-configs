module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    '@codebuddy/eslint-config-react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        'storybook/hierarchy-separator': 'error',
        'storybook/default-exports': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['**/mocks/*.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.@(queries|requests).ts'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['**/utils/*.*'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-empty-interface': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.stories.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        '': 'never',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['vite.config.ts'] }],
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx'],
      },
      'typescript': {},
    },
  },
};
