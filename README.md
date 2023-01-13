<h1 align="center">Welcome to eslint-configs 👋</h1>

> Common eslint rules for different projects used within Codebuddy

### 🏠 [Homepage](https://github.com/codebuddy-pvt-ltd/eslint-configs.git#README)

## Prerequisites

- node >=16

## Usage

Each config is defined in packages directory. Installation and usage instructions can be found in the README of each package

## Development

This is a monorepo set up using [pnpm](https://pnpm.io/). To contribute your own rule-set create a folder with the config name you want and follow [this guide](https://eslint.org/docs/latest/developer-guide/shareable-configs) or you can take a look at one of the already implemented packages on how to add structure your code.

Once the `peerDependencies` are added, go to the root of the directory and run

```bash
pnpm --filter your_folder_name i
```

to install the added dependencies.

**⚠️ Do not install the dependencies from within the folder. Install from the root with the above command.**

## Author

👤 **Codebuddy**

- Website: https://codebuddy.co/
- Github: [@codebuddy-pvt-ltd](https://github.com/codebuddy-pvt-ltd)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/codebuddy-pvt-ltd/eslint-configs.git/issues). You can also take a look at the [contributing guide](https://github.com/codebuddy-pvt-ltd/eslint-configs/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Codebuddy](https://github.com/codebuddy-pvt-ltd).<br />
This project is [MIT](https://github.com/codebuddy-pvt-ltd/eslint-configs/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
