//  2.]
//     > Create an external, pure function called sumAndAverage that has four uint parameters.
//     > Find both the sum and the average of the four numbers. 
// Return these two values in this order as unsigned integers.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Activity2 {
    function sumAndAverage(
        uint256 a, 
        uint256 b, 
        uint256 c, 
        uint256 d
    ) external pure returns (uint256, uint256) {
        uint256 sum = a + b + c + d;
        uint256 average = sum / 4;
        return (sum, average);
    }
}