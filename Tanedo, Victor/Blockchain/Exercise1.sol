// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Number {
    uint myNumber;

    function setNumber(uint _newNumber) public {
        myNumber = _newNumber;
    }

    function getNumber() public view returns (uint) {
        return myNumber;
    }

    function doubleNumber(uint number) public pure returns (uint) {
        return number * 2;
    }
}