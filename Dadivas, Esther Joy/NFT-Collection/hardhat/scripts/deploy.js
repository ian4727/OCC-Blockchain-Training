const { ethers } = require("hardhat"); //hardhat runtime environment
const { IPFS } = require("../constants");

async function main() {
  const NFTCollContract = await ethers.deployContract("NFTColl", [IPFS]);

  await NFTCollContract.waitForDeployment();

  console.log(`Contract deployed to: ${NFTCollContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// pnpm exec hardhat run scripts/deploy.js --network mumbai
// pnpm exec hardhat verify --network mumbai
// ipfs://QmNx3d7wYMZhJCG2r7YuZrU9aE63dS6zcmpsUgPtS3vUsk/

// https://testnets.opensea.io/account
