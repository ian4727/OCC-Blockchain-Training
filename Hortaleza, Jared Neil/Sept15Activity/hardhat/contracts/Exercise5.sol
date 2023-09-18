// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

/**
5.]
    > Create a pure, external function `sum` which takes a fixed size array of **five unsigned integers**.
    > Find the sum of the unsigned integers and return it as a `uint`.
 */

contract Exercise5 {
    function sum(uint256[5] memory numbers) external pure returns (uint256) {
        uint256 result;
        for (uint i = 0; i < numbers.length; i++) {
            result += numbers[i];
        }
        return result;
    }
}
