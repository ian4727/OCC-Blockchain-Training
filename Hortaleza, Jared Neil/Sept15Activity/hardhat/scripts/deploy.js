const hre = require("hardhat");

async function main() {
  const ExerciseContract = await hre.ethers.deployContract("Exercise5");
  await ExerciseContract.waitForDeployment();
  console.log(`Contract deployed to: ${ExerciseContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

/* 
  Exercise 1: 0x83993C850ff39B2B460e6117Ffc864783456504F
  Exercise 2: 0x1F2F14FF2F64F7e868C4090d794829F99d84fBfF
  Exercise 3: 0x5Bca438f49e13CA73D5452F9C6DBa26451Eb4582
  Exercise 4: 0x326c7624526F90d90a6701fE77F32D6a9478196a
  Exercise 5: 0x6dBC13B21E0E0DD024D8bABa176a4c314c47741c
*/
