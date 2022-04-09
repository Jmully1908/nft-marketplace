require("@nomiclabs/hardhat-waffle");
const projectId = '5ef61ee6447a410489aa8830a7bc50de'
const fs = require('fs')
const keyData = fs.readFileSync('./test.env', {
  encoding:'utf8', flag:'r'
});

module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337 
    },
    mumbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[keyData]
    },
    mainnet: {
      url:`https://mainnet.infura.io/v3/${projectId}`,
      accounts:[keyData]
    }
   
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
