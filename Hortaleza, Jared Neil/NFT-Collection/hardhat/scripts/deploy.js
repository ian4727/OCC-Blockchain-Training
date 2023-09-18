const { ethers } = require("hardhat");
// const { TOKEN_ADDRESS } = require("../constants");

async function main() {
  const NFTCollectionContract = await ethers.deployContract("NFTCollection", ["ipfs://QmSEoM93a7GLgWkXD3yVzMQJGwSYhvtgzv4MWvaoAY8ATy/"]);

  await NFTCollectionContract.waitForDeployment();

  console.log(`Contract deployed to: ${NFTCollectionContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
