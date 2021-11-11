const ethers = require('ethers');
const {mnemonic } = require('./secrets.json');
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log(mnemonicWallet.privateKey); // login to metamask
// > npx hardhat getPrivateKey.js