const { ethers } = require("hardhat");

async function main() {
  const NFTContract = await ethers.getContractFactory("simpleNFT"); // Get the contract factory
  const nftInstance = await NFTContract.deploy(); // Deploy the contract without arguments

  await nftInstance.deployed();

  console.log(`Contract deployed to: ${nftInstance.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


  // 0x2846bcb740aB544e63299972F97b2f385975F49b
