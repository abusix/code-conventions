# Abusix Code Conventions

Code conventions for Abusix repos and projects. 


## Available Eslint Packages

This repo includes the eslint packages:

### eslint-config-base

This package contains the base eslint configuration for typescript projects.

#### Installation

```sh
npm add -D @abusix/eslint-config-base
```

#### Usage

Add the following to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@abusix/eslint-config-base'],
};
```