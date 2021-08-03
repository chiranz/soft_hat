const hre = require("hardhat");

async function main() {
  const Storage = await hre.ethers.getContractFactory("Storage");
  const storage = await Storage.deploy();

  const reciept = await storage.deployed();
  console.log(reciept.gasUsed.toNumber());

  console.log("Storage deployed to:", storage.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
