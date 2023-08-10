# @abusix/eslint-config-base

This package contains the base eslint configuration for typescript projects.

## Installation

```sh
npm add -D @abusix/eslint-config-base
```

## Usage

Add the following to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@abusix/eslint-config-base'],
};
```

### Problems with Custom Import Paths?

If you have problems with custom import paths, you can add the following to your `.eslintrc.js` to the project where you want to use this eslint config:

```js
{
    // ...
    settings: {
        "import/resolver": {
            typescript: {}
        }
    },
    // ...
}
```

Also make sure to install the following package to add typescript import resolver support:

```sh
npm add -D eslint-import-resolver-typescript
```
