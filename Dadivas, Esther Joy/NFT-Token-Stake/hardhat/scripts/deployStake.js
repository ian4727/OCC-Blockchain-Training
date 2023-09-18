const { ethers } = require("hardhat"); //hardhat runtime environment
require("dotenv").config();

async function main() {
  const myTokenContract = await ethers.deployContract("MyToken", [
    process.env.LOOTBOX_KEY,
  ]);
  await myTokenContract.waitForDeployment();
  console.log(`Contract deployed to: ${myTokenContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// pnpm exec hardhat run scripts/deployStake.js --network mumbai
// pnpm exec hardhat verify --network mumbai 0xFd6589d3a05905908DfCa64B72957897F7119432 0xCE6cB2a4507e341889a641f942598429CaefFc65
// https://mumbai.polygonscan.com/address/0xFd6589d3a05905908DfCa64B72957897F7119432#code
