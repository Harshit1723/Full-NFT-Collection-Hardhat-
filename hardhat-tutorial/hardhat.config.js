require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://wiser-boldest-dinghy.ethereum-goerli.discover.quiknode.pro/3b4dad711e3622a1da2413c5c3a70ce0f5307972/",
      accounts: ["a66a54f885be5a49885f3f8a179f092f9d52e1018234b375fcfbf6cabbd37a05"],
    },
  },
};