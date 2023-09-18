// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CalculatorV2 {
    uint256 public result;
    address public user;

    function solve(uint256 a, uint256 b) public returns (uint256) {
        result = a - b;
        user = msg.sender;

        return result;
    }
}
