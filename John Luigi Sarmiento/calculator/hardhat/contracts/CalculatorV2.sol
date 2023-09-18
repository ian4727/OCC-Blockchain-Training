// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract CalculatorV2  {
   
    uint256 public result;
    address public user;

    // Function to perform addition and update state variables
   function solve(uint256 num1, uint256 num2) public returns (uint256) {
        result = num1 - num2;
        user = msg.sender;
        return result;
    }
}

