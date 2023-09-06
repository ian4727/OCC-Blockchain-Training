// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ArraySample{
    uint[5] public fixedArray;

    uint256[] public dynamicArray;

    constructor() {
        fixedArray[2] = 23;
    }

    function showArray() public view returns(uint256) {
        return fixedArray[2];
    }

    function addArray() public {
        dynamicArray.push(12);
    }

    function ArrayLength() public view returns(uint256) {
        return fixedArray.length;
    }

    function showDynamicArray() public view returns(uint256) {
        return dynamicArray[0];
    }
}