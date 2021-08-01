module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['import', 'react', 'react-hooks'],
  rules: {
    'no-console': 0,
    'no-unused-vars': 1,
    'no-unexpected-multiline': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
