// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Expressions {
    uint256 public result;

    function calculateExpression(uint256 a, uint256 b) public {
        result = (a + b) * (a + b);
    }
}