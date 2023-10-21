// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LogicalOperators {
    bool public andResult;
    bool public orResult;
    bool public notResult;

    function performLogicalOperations(bool a, bool b) public {
        andResult = a && b;
        orResult = a || b;
        notResult = !a;
    }
}