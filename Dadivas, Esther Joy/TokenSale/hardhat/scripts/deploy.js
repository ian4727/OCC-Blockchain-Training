const { ethers } = require("hardhat"); //hardhat runtime environment
const { WHITELIST_ADDRESS } = require("../constants");

async function main() {
  const tokenSaleContract = await ethers.deployContract("TokenSale", [
    WHITELIST_ADDRESS,
  ]);

  await tokenSaleContract.waitForDeployment();

  console.log(`Contract deployed to: ${tokenSaleContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// 0x23f6466A667c96f2954CA5AaBADAC895cA6010e4
