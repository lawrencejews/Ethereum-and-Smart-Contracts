## Ethereum and Smart Contracts
### Project SetUp
- Create an empty configuration file for building and deploying contracts`npx hardhat`.
- How to compile contracts `npx hardhat compile`.
- Add a license identifier for the contracts. 
- Add dependencies `yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai`.
- Typescript dependencies `yarn add -D ts-node typescript`.
- Testing types `yarn add -D chai @types/node @types/mocha @types/chai` then run your tests with `npx hardhat test`
- Deploy on local network: `npx hardhat run scripts/deploy.ts --network localhost`.
- YOU HAVE to create a local ethereum network node`npx hardhat node`
