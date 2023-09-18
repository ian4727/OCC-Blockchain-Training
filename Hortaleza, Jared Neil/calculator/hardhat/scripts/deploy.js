const { ethers } = require("hardhat");
// const { TOKEN_ADDRESS } = require("../constants");

async function main() {
  const CalculatorContract = await ethers.deployContract("Calculator");

  await CalculatorContract.waitForDeployment();

  console.log(`Contract deployed to: ${CalculatorContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
