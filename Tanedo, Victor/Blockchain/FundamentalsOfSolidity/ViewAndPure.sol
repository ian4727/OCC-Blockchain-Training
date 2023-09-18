// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ViewAndPureFunctions {
    // view functions are used when you want to read data from the blockchain state. 
    // They are considered read-only, meaning they do not modify the state in any way. 
    // View functions are also free to call because they do not consume gas.

    uint256 public storedValue;

    function retrieveValue() public view returns (uint256){
        return storedValue;
    }

    // pure functions are even more restrictive than view functions. 
    // They are used when you want to perform calculations or operations that do not require any access to the blockchain state or external contracts. 
    // Pure functions are also free to call and do not consume gas.

    function pureExample(uint256 a, uint256 b) public pure returns (uint256){
        return a * b;
    }
}