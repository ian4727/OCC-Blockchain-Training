const { ethers } = require("hardhat");
const { TOKEN_ADDRESS } = require("../constants");

async function main() {
  const ExchangeContract = await ethers.deployContract("Exchange", [
    TOKEN_ADDRESS,
  ]);

  await ExchangeContract.waitForDeployment();

  console.log(`Contract deployed to: ${ExchangeContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// 0xC99510E2388F9781374C359FE4B1cdcB699d6177
