const { ethers } = require("hardhat");
require("dotenv").config();

async function main(){
  const NekoLootContract = await ethers.deployContract("NekoLoot");

  await NekoLootContract.waitForDeployment();

  console.log(`Contract deployed to: ${NekoLootContract.target}`);

  //0xDA2CeDc4A38f4d06D25Fbb8E389bc519d9F56A44
  //0xc8097aF5D4f912CD0550727072F4F5f464cc9e8a
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });