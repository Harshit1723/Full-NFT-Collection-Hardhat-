require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://wiser-boldest-dinghy.ethereum-goerli.discover.quiknode.pro/3b4dad711e3622a1da2413c5c3a70ce0f5307972/",
      accounts: ["b4965a347e4e3fd9b05a53a638613979ec61b83183ad6ef688b88f4016769962"],
    },
  },
};