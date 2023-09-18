// 5.]
//     > Create a pure, external function `sum` which takes a fixed size array of 
//      **five unsigned integers**.
//     > Find the sum of the unsigned integers and return it as a `uint`.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Activity5 {

    function sum(uint[5] memory numbers) external pure returns(uint256){
        uint256 total = 0;
        for (uint i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }
        return total;
    }
}