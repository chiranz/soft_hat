const { expect } = require("chai");

describe("Greeter", function () {
  it("Should deploy the contract", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed();
    const reciept = await storage.deployTransaction.wait();
    console.log(reciept.gasUsed.toNumber());
  });
});
