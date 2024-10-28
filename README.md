<p align="center">
 <img src="[https://res.cloudinary.com/matthieudev/image/upload/v1730132947/create-web3mobile-logo_bppnio.png]" width="130" alt="Logo for Web3Mobil">
</p>

<h1 align="center">
 create-web3mobile
</h1>

<p align="center">
 Interactive CLI to bootstrap a Web3-ready React Native app with a complete, typesafe stack.
</p>

<p align="center">
 Get started with your Web3 Mobile project by running <code>npm create web3mobile@latest</code>
</p>

<div align="center">

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][npm-url]
[![PRs Welcome][prs-image]][prs-url]

</div>

## Table of contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)

## About

Web3Mobile is an opinionated framework for building mobile Web3 applications. It provides a carefully curated stack of modern tools and libraries, focusing on **developer experience**, **typesafety**, and **Web3 integration**.

This CLI helps you start new projects with our recommended stack without spending hours on setup and configuration.

## Tech Stack

The core stack includes:

- [React Native](https://reactnative.dev) - Mobile development framework
- [Expo](https://expo.dev) - React Native tooling
- [TypeScript](https://typescriptlang.org) - Type safety
- [NativeWind](https://nativewind.dev) - Tailwind CSS for React Native
- [Gluestack](https://gluestack.io/) - UI components
- [WalletConnect](https://walletconnect.com) - Wallet integration
- [wagmi](https://wagmi.sh) - React Hooks for Ethereum
- [ethers.js](https://docs.ethers.org/) - Ethereum library

## Getting Started

To create a new app, run one of the following commands:

### npm

```bash
npm create web3mobile@latest
```

### yarn

```bash
yarn create web3mobile
```

### pnpm

```bash
pnpm create web3mobile@latest
```

Follow the CLI prompts to configure your project.

## Features

Web3Mobile comes with:

### 🔗 Web3 Integration

- Wallet connection out of the box
- Multiple chain support
- Transaction management
- Contract interactions
- NFT support

### 📱 Mobile-First

- Native UI components
- Deep linking
- Biometric authentication
- Push notifications
- QR code scanning

### 🛠 Developer Experience

- Type safety throughout
- Hot reloading
- Built-in debugging tools
- Automated testing setup
- CI/CD configuration

### 🎨 Styling & UI

- NativeWind for Tailwind CSS styling
- Gluestack UI components
- Dark mode support
- Customizable themes

## Configuration

### Environment Variables

Create a .env file in your project root:

WALLET_CONNECT_PROJECT_ID=your_project_id
INFURA_ID=your_infura_id

### Network Configuration

// config/networks.ts
export const networks = {
mainnet: {
// ...
},
polygon: {
// ...
}
}

See the [documentation](your-docs-link) for complete configuration options.

## Contributing

We love contributors! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting any Pull Requests.

### Development

1. Fork the repository
2. Create your feature branch: git checkout -b feature/AmazingFeature
3. Commit your changes: git commit -m 'Add some AmazingFeature'
4. Push to the branch: git push origin feature/AmazingFeature
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

[npm-image]: https://img.shields.io/npm/v/create-web3mobile?color=0b7285&logoColor=0b7285
[npm-url]: https://www.npmjs.com/package/create-web3mobile
[downloads-image]: https://img.shields.io/npm/dm/create-web3mobile?color=364fc7&logoColor=364fc7
[prs-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs-url]: http://makeapullrequest.com
