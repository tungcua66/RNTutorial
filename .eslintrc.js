module.exports = {
  extends: 'airbnb',
  plugins: [
    'react',
    'react-native',
    'react-hooks'
  ],
  parser: '@babel/eslint-parser',
  env: {
    jest: true,
    'react-native/react-native': true,
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'arrow-body-style': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react/style-prop-object': 0,
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 0,
    'no-nested-ternary': 0,
  },
  globals: {
    fetch: false
  }
};
