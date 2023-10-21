const { ethers } = require("hardhat");
// const { TOKEN_ADDRESS } = require("../constants");

async function main() {
  const SimpleNFTContract = await ethers.deployContract("SimpleNFT");

  await SimpleNFTContract.waitForDeployment();

  console.log(`Contract deployed to: ${SimpleNFTContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
