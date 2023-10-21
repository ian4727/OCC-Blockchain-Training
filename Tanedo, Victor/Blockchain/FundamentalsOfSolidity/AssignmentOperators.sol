// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AssignmentOperators {
    uint256 public value;

    function assignValue(uint newValue) public {
        value = newValue;
        value += 10;
        value -= 10;
        value *= 10;
        value /= 10;
        value %= 10;
    }
}