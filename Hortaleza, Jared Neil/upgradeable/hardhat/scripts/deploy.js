const { ethers } = require("hardhat");

async function main() {
  // const AvatarContract = await ethers.deployContract("AvatarMaker");
  // await AvatarContract.waitForDeployment();

  // console.log(`Contract deployed to: ${AvatarContract.target}`);
  // 0xD878386D10Ed3dD0497DD86aF41fe95b855F35Ce

  // const AvatarV2Contract = await ethers.deployContract("AvatarMakerV2");
  // await AvatarV2Contract.waitForDeployment();

  // console.log(`Contract deployed to: ${AvatarV2Contract.target}`);
  // 0x93a6CF8CCCE4901fD03FaA5F8aF2371bCe6C7128

  const AvatarProxyContract = await ethers.deployContract("AvatarProxy", ["0xD878386D10Ed3dD0497DD86aF41fe95b855F35Ce"]);
  await AvatarProxyContract.waitForDeployment();

  console.log(`Contract deployed to: ${AvatarProxyContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
