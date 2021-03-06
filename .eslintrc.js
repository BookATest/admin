module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 'off',
    'prefer-destructuring': 'off',
    'max-len': 'off',
    'no-await-in-loop': 'off',
    'no-bitwise': 'off',
    'no-mixed-operators': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
