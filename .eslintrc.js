module.exports = {
  parser: 'babel-eslint', // or your preferred parser
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'react',
    'jsx-a11y',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // Customize your rules as needed
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-is-valid': 'warn',
    // Add additional rule overrides here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
