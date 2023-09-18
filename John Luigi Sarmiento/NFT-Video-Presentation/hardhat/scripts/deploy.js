

// const { ethers} = require("hardhat");
// const { ipfs_ADDRESS } = require("../constant");

// async function main() {
//   const VideoNFTContract = await hre.ethers.deployContract(
//      "VideoNFT",
//      [ipfs_ADDRESS]
//   );

//   await VideoNFTContract.waitForDeployment();

//   console.log(`Contract deployed to: ${VideoNFTContract.target}`);
// }

// main()
//   .then(() => process.exit(0))
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
  // })
const { ethers, network } = require("hardhat");
const { ipfs_ADDRESS } = require("../constant");

async function main() {
  const VideoNFTFactory = await ethers.getContractFactory("VideoNFT");
  const VideoNFTContract = await VideoNFTFactory.deploy(ipfs_ADDRESS);
  await VideoNFTContract.deployed();

  console.log(`Contract deployed to: ${VideoNFTContract.address}`);
  console.log(`Deployed on network: ${network.name}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });


  // 0x4778E0816d787d32a2A128a9a42EA00aF4514665