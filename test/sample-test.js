const { assert } = require("chai");

describe("Storage", function () {
  it("Should double the value of x", async function () {
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();
    await storage.deployed();

    const contractReciept = await storage.deployTransaction.wait();
    console.log(contractReciept.gasUsed.toNumber());

    // Using Add Operator
    const addOperator = await storage.doubleXWithAdd();
    const recieptAdd = await addOperator.wait();
    console.log("Add");
    console.log(recieptAdd.gasUsed.toNumber());
    const val2 = await storage.x();
    assert.equal(val2.toNumber(), 4);

    // Using Mul Operator
    console.log("Mul");
    const mulOperator = await storage.doubleXWithMul();
    const recieptMul = await mulOperator.wait();
    console.log(recieptMul.gasUsed.toNumber());
    const val3 = await storage.x();
    assert.equal(val3.toNumber(), 8);
  });
});
