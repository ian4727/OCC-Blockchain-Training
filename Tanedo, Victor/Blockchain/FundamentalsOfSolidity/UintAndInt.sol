// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract variablesAndDataTypes{
    //Unsigned integers, e.g., uint256 for a 256-bit integer.
    uint256 public myUint;   
    uint128 public myUint2; 

    // Signed integers
    int8 public myInt;

    function updateUint() public {
        myUint = 20;
    }

    function updateInt(int8 newValue) public {
        myInt = newValue;
    }


}
