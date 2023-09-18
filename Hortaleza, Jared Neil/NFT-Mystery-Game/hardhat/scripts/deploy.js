const { ethers } = require("hardhat");
// const { TOKEN_ADDRESS } = require("../constants");

async function main() {
  const LootboxContract = await ethers.deployContract("Lootbox");

  await LootboxContract.waitForDeployment();

  console.log(`Contract deployed to: ${LootboxContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// 0xfF089ea6c39403134B6Ad4aDD5087d9c3aa38350
