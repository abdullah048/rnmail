module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['prettier'],
  rules: {
    'no-unused-vars': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    semi: false,
  },
  parserOptions: {
    requireConfigFile: false,
  },
}
