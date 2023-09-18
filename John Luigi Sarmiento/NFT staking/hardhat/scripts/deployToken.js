const { ethers } = require("hardhat");
const { NFT_ADDRESS } = require("../constant");

async function main() {
 
  const MyTokenContract = await hre.ethers.deployContract(
    "MyToken",

   [NFT_ADDRESS]
  );

  await MyTokenContract.deployTransaction.wait();

  console.log(`MyToken Contract deployed to: ${MyTokenContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });