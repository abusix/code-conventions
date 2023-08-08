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
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': 'off',
        'no-restricted-exports': ['error', {restrictDefaultExports: {direct: true}}],
        'no-alert': 'error',
    }
};
