const hre = require("hardhat");

async function main() {
  const MusicMysteryContract = await hre.ethers.deployContract("MusicMysteryNFT");
  await MusicMysteryContract.waitForDeployment();
  console.log(`Contract deployed to: ${MusicMysteryContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// 0x7Bd405b37EB761E0AB5d9cf79972D1a9704e9CBa
