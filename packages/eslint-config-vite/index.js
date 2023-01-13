module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:import/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "plugin:import/typescript",
    "eslint-config-prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    indent: 0,
    "max-len": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "object-curly-newline": "off",
    "arrow-parens": "off",
    "implicit-arrow-linebreak": "off",
    "no-nested-ternary": "off",
    "nonblock-statement-body-position": ["error", "any"],
    "no-underscore-dangle": "off",
    camelcase: "error",
    "consistent-return": 0,
    "no-restricted-syntax": "off",
    "func-names": "off",
    "no-console": 2,
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "no-shadow": "error",
    "@typescript-eslint/no-shadow": ["error"],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".tsx"],
      },
    ],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  },
};
