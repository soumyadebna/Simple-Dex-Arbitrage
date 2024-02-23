require("@nomiclabs/hardhat-waffle");
require("dotenv").config(); // Load environment variables from a .env file

// Destructure environment variables for clarity
const {
  PRIVATE_KEY,
  AURORA_RPC_URL,
  FANTOM_RPC_URL
} = process.env;

module.exports = {
  networks: {
    aurora: {
      url: AURORA_RPC_URL || "https://mainnet.aurora.dev", // Default fallback if AURORA_RPC_URL is not set
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [], // Use the private key if available
    },
    fantom: {
      url: FANTOM_RPC_URL || "https://rpc.ftm.tools/", // Default fallback if FANTOM_RPC_URL is not set
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [], // Use the private key if available
    },
    hardhat: {
      // Configuration for local development and testing
      // No need to specify `url` or `accounts` for the default Hardhat network
    },
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.7.6" },
      { version: "0.6.6" },
    ],
  },
  // Adding any plugins configurations if necessary
};

