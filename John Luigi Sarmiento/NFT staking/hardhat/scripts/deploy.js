const { ethers } = require("hardhat");

async function main() {
  const baseURI = "ipfs/QmdK3RMPhy8iWQqyvQ3HPkwB2ZuZNVCMka1mNwL6JAbRxW"; // Replace with the correct IPFS URL
  const NFTColl = await ethers.getContractFactory("NFTColl"); // Get the contract factory
  const NFTcoll = await NFTColl.deploy(baseURI); // Deploy the contract with the baseURI argument

  await NFTcoll.deployed();

  console.log(`Contract deployed to: ${NFTcoll.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });