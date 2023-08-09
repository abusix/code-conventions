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
                "tabWidth": 4,
                "quoteProps": "as-needed"
            }
        ]
    }
};
