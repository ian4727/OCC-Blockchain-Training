const { ethers } = require("hardhat"); //hardhat runtime environment
const { CALCULATOR_ADDRESS } = require("../constants");

async function main() {
  // Calculator ContractProxy
  const contractProxyContract = await ethers.deployContract("ContractProxy", [
    CALCULATOR_ADDRESS,
  ]);
  await contractProxyContract.waitForDeployment();
  console.log(
    `ContractProxy Contract deployed to: ${contractProxyContract.target}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// pnpm exec hardhat run scripts/deployProxy.js --network mumbai
// pnpm exec hardhat verify --network mumbai
