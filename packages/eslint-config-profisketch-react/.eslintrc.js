module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'profisketch',
  ],
  rules: {
    'tailwindcss/no-arbitrary-value': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'off',
  },
}
