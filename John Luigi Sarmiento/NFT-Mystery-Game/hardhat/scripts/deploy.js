// const hre = require("hardhat");
// require("dotenv").config()

// async function main() {
//    const lootboxContract = await hre.ethers.deployContract("Lootbox");

   
//    await lootboxContract.waitForDeployment();
//    console.log(`Contract deployed to: ${lootboxContract.target}`);
//   }

// main()
//   .then(() => process.exit(0))
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });


const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const DexLoot = await hre.ethers.getContractFactory("DexLoot");
  const DexLootContract = await DexLoot.deploy();

  await DexLootContract.deployed(); 

  console.log(`Contract deployed to: ${lootboxContract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
