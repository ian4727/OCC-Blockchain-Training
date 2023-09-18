const { ethers} = require("hardhat");
const { WHITELIST_ADDRESS } = require("../constant");

async function main() {
  const tokenSaleContract = await hre.ethers.deployContract(
     "TokenSale",
     [WHITELIST_ADDRESS]
  );

  await tokenSaleContract.waitForDeployment();

  console.log(`Contract deployed to: ${tokenSaleContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  })


  // 0xEfEacf62F94beceE78E6958e3b0EE2c83FCAc201

