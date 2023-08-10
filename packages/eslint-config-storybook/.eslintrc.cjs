// trigger release
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    extends: [
        'plugin:storybook/recommended'
    ],
    overrides: [
        {
            files: ['*.stories.tsx'],
            rules: {
                'no-restricted-exports': 0,
            },
        },
    ],
};
