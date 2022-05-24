# Boilerplate

```
  React
  Hardhat
  Solidity
  Styled-components
  Alchemy
  Metamask
  Ethers.js
  Web3.js
  Rinkeby
```

### 1) Create Alchemy account and Create App(Name: any-name; Description: -; env: Staging; Network: Rinkeby)

### 2) CREATE AN ETHEREUM ACCOUNT ON METAMASK and INCLUDE Rinkeby Test Network and Send Test Money From for example(https://faucet.rinkeby.io/)

### 3) Create .env file and add:

- Export Private Key -> https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key

```
  API_URL = "https://eth-rinkeby.alchemyapi.io/v2/your-api-alchemy-key"
  PRIVATE_KEY = "your-private-metamask-key"
```

### 4) Compile our contract

```
  npx hardhat compile
```

### 5) Write deploy script or you can use script by default

### 6) Deploy our contract

```
  npx hardhat run scripts/deploy.js --network rinkeby
```

### and you will get:

```
  Contract deployed to address: 0x380def90af6F4Ea193173C2be498438740dC1Bbb
```

### and you find contract on 

```
  https://rinkeby.etherscan.io/
```

# THE END!
