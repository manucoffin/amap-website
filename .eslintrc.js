module.exports = {
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['codegen-node-fetch'],
  rules: {
    'no-console': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['index', 'sibling', 'parent', 'object']],
        pathGroupsExcludedImportTypes: ['builtin'],
        pathGroups: [
          { pattern: 'next/**', group: 'external', position: 'after' },
          { pattern: 'react**', group: 'external', position: 'before' },
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    '@typescript-eslint/ban-ts-comment': [
      2,
      {
        'ts-expect-error': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],
    '@next/next/no-server-import-in-page': 'off',
    //   "no-restricted-imports": [
    //     "error",
    //     {
    //       name: "next/image",
    //       message: "Please use `import { Image } from 'components';` instead.",
    //     },
    //     {
    //       name: "next-seo",
    //       message: "Please use `import { Seo } from 'components';` instead.",
    //     },
    //     {
    //       name: "@testing-library/react",
    //       message: "Please use `import { render, screen } from 'test';` instead.",
    //     },
    //   ],
  },
};
