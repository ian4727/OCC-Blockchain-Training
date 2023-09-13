const { ethers } = require("hardhat"); //hardhat runtime environment
// const { WHITELIST_ADDRESS } = require("../constants");

async function main() {
  const simpleNFTContract = await ethers.deployContract("SimpleNFT");

  await simpleNFTContract.waitForDeployment();

  console.log(`Contract deployed to: ${simpleNFTContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
