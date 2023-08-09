# Abusix Code Conventions

Code conventions for Abusix repos and projects. 


## Available Eslint Packages

This repo includes these eslint packages:

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

### eslint-config-react

This package contains the base eslint configuration for react + typescript projects.

#### Installation

```sh
npm add -D @abusix/eslint-config-react
```

#### Usage

Add the following to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@abusix/eslint-config-react'],
};
```

### eslint-config-prettier

This package contains a prettier config used by eslint.  

#### Installation

```sh
npm add -D @abusix/eslint-config-prettier
```

#### Usage

Add the following to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@abusix/eslint-config-prettier'],
};
```

### eslint-config-storybook

This package contains the base eslint configuration for storybook + typescript projects.

#### Installation

```sh
npm add -D @abusix/eslint-config-storybook
```

#### Usage

Add the following to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@abusix/eslint-config-storybook'],
};
```