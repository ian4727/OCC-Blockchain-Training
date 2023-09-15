const { ethers } = require("hardhat");
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

// 0x9F5b5cEFA908F3c855d46e03D6D29F42ee296B29
