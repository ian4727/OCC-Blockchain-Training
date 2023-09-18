// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/* 
    Exercise 1: Variable Declaration
    Write a Solidity contract with a state variable of type `uint` named `myNumber`. 
    Add a function `setNumber` that takes an argument and sets the value of `myNumber` to that argument.

    Exercise 2: Public Function
    Create a Solidity contract with a public function `getNumber` that returns the value of the `myNumber` state variable. 
    Use this function to retrieve and display the value of `myNumber`

    Exercise 3: View Function
    In the same contract as Exercise 2, add another function `doubleNumber` that takes an argument 
    and returns double that value without modifying any state. Make sure this function is marked as `view`.
*/

contract Exercises {
    uint public myNumber;

    function setNumber(uint NewNumber) public {
        myNumber = NewNumber;
    }

    function getNumber() public view returns (uint) {
        return myNumber;
    }

    function doubleNumber(uint Number) public pure returns (uint) {
        return Number * 2;
    }
}