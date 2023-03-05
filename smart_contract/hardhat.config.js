require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 5777,
    },
    ganache: {
      url: "http://127.0.0.1:8545",
      accounts: [
        `c28353fd976e84d5950a9d9124aa22c891779b012ed3c0cfb6cbfd3f687e454d`,
      ],
    }

  },
  paths: {
    artifacts: "./src/artifacts",
  }
};