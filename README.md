## Ethereum and Smart Contracts
### Project SetUp
- Hardhat is the backbone of any project:`compiling, testing and deployment`.
- Create an empty configuration file for building and deploying contracts`npx hardhat`.
- How to compile contracts `npx hardhat compile`.
- Add a license identifier for the contracts. 
- Add dependencies `yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`.
- Typescript dependencies `yarn add -D ts-node typescript`.
- Testing types `yarn add -D chai @types/node @types/mocha @types/chai` then run your tests with `npx hardhat test`
- Deploy on local network: `npx hardhat run scripts/deploy.ts --network localhost`.
- YOU HAVE to create a local ethereum network node`npx hardhat node`
### MetaMask Connection
- Web3 means blockchain tech with some purpose.
- MetaMask is a browser plugin for wallets.
- Add MetaMask to your extension on chrome, Android or IoS.
- Set up a webpack.config.js file
- Add dependencies for webpack with a python server `yarn add -D webpack webpack-cli ts-loader html-webpack-plugin dotenv`.
- Create a tsconfig.json for your project.
- Pointing to a contract MUST HAVE:`Address or name, contractInterface and signer or Provider`.
- Testing by running webpack `npx webpack` and then run the dev server `cd dist: run -- python3 -m http.server 6969`
