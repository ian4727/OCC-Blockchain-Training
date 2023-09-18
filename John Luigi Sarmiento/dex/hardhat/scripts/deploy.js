const { ethers} = require("hardhat");
const { WHITELIST_ADDRESS } = require("../constants");

async function main() {
  const exchangeContract = await ethers.deployContract(
     "Exchange",
     [WHITELIST_ADDRESS]
  );

  await exchangeContract.waitForDeployment();

  console.log(`Contract deployed to: ${exchangeContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err);
    process.exit(1);
  })


  // 0xEfEacf62F94beceE78E6958e3b0EE2c83FCAc201

