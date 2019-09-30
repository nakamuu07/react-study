module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/strict',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint'],
  rules: {
    'import/no-unresolved': 'off',
    'no-restricted-globals': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'react/default-props-match-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-boolean-value': ['error', 'always', { never: ['personal'] }],
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.ts', '.tsx'] }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { args: 'none', ignoreRestSiblings: true }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        paths: ['./src']
      }
    },
    react: {
      version: '16.8.6'
    }
  }
};
