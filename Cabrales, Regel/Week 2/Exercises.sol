// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NumberContract {
    // Exercise 1 - Variable Declaration
    uint public myNumber; 

    constructor() {
        myNumber = 0;
    }

    function setNumber(uint newNumber) public {
        myNumber = newNumber; 
    }

    // Exercise 2 - Public Function 
    function getNumber() public view returns (uint) {
        return myNumber; 
    }

    // Exercise 3 - View Function
    function doubleNumber(uint valueToDouble) public view returns (uint) {
        return valueToDouble * 2;
    }
}