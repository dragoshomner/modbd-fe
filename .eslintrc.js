module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  "parser": "babel-eslint",
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
    'ecmaVersion': 8,
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'no-multi-spaces': ['error'],
    "react/prop-types": "off",
    "no-console": "off",
  }
};
