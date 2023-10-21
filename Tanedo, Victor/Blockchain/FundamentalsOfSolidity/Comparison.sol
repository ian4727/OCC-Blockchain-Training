// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Comparison{
    bool public isEqual;
    bool public isNotEqual;
    bool public isLessThan;
    bool public isGreaterThan;
    bool public isLessThanEqual;
    bool public isGreaterThanEqual;

    function performComparison(uint256 a, uint256 b) public {
        isEqual = a == b;
        isNotEqual = a != b;
        isLessThan = a < b;
        isGreaterThan = a > b;
        isLessThanEqual = a <= b;
        isGreaterThanEqual = a >= b;

    }
}