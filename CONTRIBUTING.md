## Contributing

This is a monorepo set up using [pnpm](https://pnpm.io/). To contribute your own rule-set, follow the below steps

1. Fork the repo and create a new branch from `main`
   - feat/feature-name: If a new feature is being added
   - fix/fix-name: Bug fix
2. Create a folder with the config name you want.
3. Add `package.json`:

```json
{
  "name": "@codebuddy/eslint-config-<your-config-name>",
  "version": "1.0.0",
  "description": "<your-description>",
  "license": "MIT",
  "main": "index.js",
  "author": {
    "email": "developer@codebuddy.co",
    "name": "Codebuddy"
  },
  "keywords": ["eslint", "eslint-config"],
  "peerDependencies": {
    "eslint": ">=8"
    // other eslint configs, plugins
  },
  "engines": {
    "node": ">=16"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/codebuddy-pvt-ltd/eslint-configs.git"
  },
  "bugs": {
    "url": "https://github.com/codebuddy-pvt-ltd/eslint-configs.git/issues"
  },
  "homepage": "https://github.com/codebuddy-pvt-ltd/eslint-configs.git#README"
}
```

4. If you're basing your config on top of JS add the base config by running `pnpm add -D @codebuddy/eslint-config-base --workspace`. Similarly, if you want to base it on other config modify the earlier command. This will ensure that the eslint config from the monorepo is added instead of adding it from npm.
5. Once added follow [this ESLint guide](https://eslint.org/docs/latest/developer-guide/shareable-configs) on how to add rules, other eslint peer dependencies or you can take a look at one of the already implemented packages on how to add structure your code.
6. After you're done adding your config, push the branch to your repo and create a PR against main
