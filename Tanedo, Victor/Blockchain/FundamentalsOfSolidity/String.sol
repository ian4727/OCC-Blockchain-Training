// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract String {
    string public myString;

    function updateString() public {
        myString = "This is my string";
    }
}