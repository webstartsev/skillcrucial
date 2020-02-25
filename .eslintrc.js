module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'eslint:recommended',
  rules: {
    indent: ['warn', 2],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'always'],
    'no-console': 'off',
    'no-unused-vars': 'off'
  }
};
