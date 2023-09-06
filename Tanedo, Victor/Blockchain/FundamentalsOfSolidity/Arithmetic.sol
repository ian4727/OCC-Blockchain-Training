// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Arithmetic {
    uint256 public result;

    function performCalculations(uint256 a, uint256 b) public {
        result = a + b;
        result = a - b;
        result = a * b;
        result = a / b;
        result = a % b;
    }
}