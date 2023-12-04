require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/pYi4hHeQRjqzOXZuNGTz_x3ThgKOv6PV',
      accounts: ['0caa6481adb25be73b3a78713946136c726dc1bd73232b878a9f1f32b7041d11'],
    },
  },
};