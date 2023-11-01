// trigger release
module.exports = {
    extends: [
        'plugin:prettier/recommended',
    ],
    plugins: [
        'prettier',
    ],
    rules: {
        "prettier/prettier": [
            "error",
            {
                "quoteProps": "as-needed",
                "useTabs": true,
                "tabWidth": 2,
            }
        ]
    }
};
