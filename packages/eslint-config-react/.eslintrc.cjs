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
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    plugins: [
        'react',
        'react-hooks'
    ],
    rules: {
        'react/jsx-curly-brace-presence': [
            'error',
            {
                props: 'never',
            }
        ],
        'react/react-in-jsx-scope': 0,
        'react/require-default-props': 0,
        'react/function-component-definition': [
            2,
            {
                namedComponents: ['arrow-function'],
                unnamedComponents: ['arrow-function'],
            },
        ],
        'react/display-name': 0,
    }
};
