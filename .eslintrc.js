module.exports = {
  plugins: ['@typescript-eslint'],
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: {
    'no-console': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'off',
      {
        'ts-expect-error': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],
    '@next/next/no-server-import-in-page': 'off',
    'react/jsx-key': 'off',
  },
};
