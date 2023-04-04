module.exports = {
  extends: ['@react-native-community', '@codebuddy/eslint-config-react-ts'],
  plugins: ['react-native'],
  rules: {
    'react-native/no-unused-styles': 0,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 'off',
    'react-native/no-single-element-style-arrays': 2,
    'react-hooks/exhaustive-deps': 'off',
  },
};
