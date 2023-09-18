const { ethers } = require("hardhat"); //hardhat runtime environment
const { TOKEN_ADDRESS } = require("../constants");

async function main() {
  const exchangeContract = await ethers.deployContract("Exchange", [
    TOKEN_ADDRESS,
  ]);

  await exchangeContract.waitForDeployment();

  console.log(`Contract deployed to: ${exchangeContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

//0xaDcb90C58Da1441432F2Dbd7228F3b17f46eC746
