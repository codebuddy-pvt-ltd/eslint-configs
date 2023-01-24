module.exports = {
  extends: [
    "@codebuddy/eslint-config-base",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": 0,
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["vite.config.js"] },
    ],
  },
};
