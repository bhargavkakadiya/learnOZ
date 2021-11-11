// hardhat.config.js
const { kovanApiKey, mnemonic } = require('./secrets.json');
require('@nomiclabs/hardhat-ethers');
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
         kovan: {
           url: `https://eth-kovan.alchemyapi.io/v2/${kovanApiKey}`,
           accounts: { mnemonic: mnemonic },
         },
       },
};
