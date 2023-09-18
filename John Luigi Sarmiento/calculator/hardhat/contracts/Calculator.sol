// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract Calculator {
   
    uint256 public result;
    address public user;


  

    // Function to perform addition and update state variables
   function solve(uint256 num1, uint256 num2) public returns (uint256) {
    result = num1 + num2;
    user = msg.sender;
    return result;
    }
}

// 0xF31d1661916C901651F6Bcc4d079807841f37b50

