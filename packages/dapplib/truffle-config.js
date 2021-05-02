require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift remember noise history idea enter army general'; 
let testAccounts = [
"0xc27b08a110be02f098396a2088747e7bf737bd0d694f17ae8a2d4e4a0dad4f5c",
"0xb109a8a3eee468160c492db94405519a010fe8e11f24d5b6ddbe9c27ef725290",
"0x44f0a1b2a345958f5b590a689a6dfce1375a70f934d72b5311c9caf5997f6a27",
"0x235ae3bb2a919d178a7874885e8ca167a59dc2f94f30fef187459d5d0eba9b38",
"0x9a879e6b800e4f588cd41f47c1b1505cb399554c6b59d677220adcf2636d8fbd",
"0xc15de60f239dca0ad5c7376cf1ec42b0a7be81aed37379c50a2b1344bb34bab8",
"0xec1458da4604c7a1f78f24c37bc450f6e143bc976ca7a8bf0a37214238e329fd",
"0xf4fcd70f3b42e81cd29f3df9b325b412dd66edac52c606d19dab209adf6ce4b1",
"0xaa8b4377e382e5a172ab0934cac83e3f2f998d508284693f99fdc52ce5849ac3",
"0x192b289905f438f3e353161a12f78b3475fb0dfaa7ed4a8b3a2b3dc694425c0d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
