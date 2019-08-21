# @strv/eslint-config-node

> STRV's ESLint config for Node.js projects

These configuration files are suitable to lint code which will run on Node.js.

## Configurations

### `@strv/eslint-config-node/v10`

Suitable for projects running on Node.js v10.

### `@strv/eslint-config-node/v12`

Suitable for projects running on Node.js v12.

## Optional configurations

### `@strv/eslint-config-node/optional`

Use this ruleset in conjunction with any of the above version-specific rulesets. Provides additional insights into potential inconsistencies in the project.

> For new projects, it is recommended to enable this ruleset. For existing projects, it is only recommended for the brave.

## Coding styles

### `@strv/eslint-config-node/style`

This ruleset includes rules which deal with how the code looks like and not how it works. It helps keeping the code clean and consistent. 🎨

## Recommended ESLint config

.eslintrc.js

```js
module.exports = {
  extends: [
    '@strv/node/<v10 or v12>',
    '@strv/node/optional',
    '@strv/node/style',
    '@strv/mocha',
  ],
}
```

<!-- markdownlint-disable MD033 -->

<details>
<summary>.eslintrc or .eslintrc.json</summary>

```json
{
  "extends": [
    "@strv/node/<v10 or v12>",
    "@strv/node/optional",
    "@strv/node/style",
    "@strv/mocha"
  ]
}
```

</details>

<details>
<summary>package.json</summary>

```json
{
  "eslintConfig": {
    "extends": [
      "@strv/node/<v10 or v12>",
      "@strv/node/optional",
      "@strv/node/style",
      "@strv/mocha"
    ]
  }
}
```

</details>

## License

See the [LICENSE](LICENSE) file for information.
