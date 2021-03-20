require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grid arena other seed dance cruise million pull install brass foster slender'; 
let testAccounts = [
"0xc3109c7535df1102035f2a46d5d5b3ea8aaa584ee9d2ab72c3c946b98e9079e2",
"0x5daea4c7c72e356865c34ccd5420030ceee355033c335255daa2c3001e72082d",
"0x771cf43728f4052c03738fd1a59ed868c6c8ef529cb6e99476a4d39005c68b2b",
"0xca7962fd50ec24e48926661c89e50dcccd412c19e05876a945a84c303d24823f",
"0x325a3fd4b056546e9d800254c5dc48c3464521a33831d4a4cc8f9a3bfb5fd425",
"0x3a6667b953281d0ba457a25a5e2416df76cc2860256c710fccafa2647dd8fdbc",
"0x718f5d2397ee0d4771d83d3911f7f4e609c71f88eaf1e77500767b6782d92386",
"0x76b73ddbfc457446a56ebe317eea24f8962f03112266436a96aa4d3ff24b89c6",
"0x73fcb05481910ae52bd75633d471c4307eb6768311388951a3d4036e87680288",
"0x425f0e7cb0e76c73b23cdd3c57e5eaa9add764b1406c7a13018103faa0de5457"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

