//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Storage {
    uint256 public x = 2;

    function doubleXWithAdd() external {
        x = x + x;
    }

    function doubleXWithMul() external {
        x = x * 2;
    }
}
