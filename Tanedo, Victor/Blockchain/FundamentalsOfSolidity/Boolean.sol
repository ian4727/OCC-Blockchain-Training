// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Boolean{
    bool public isTrue;

    function toggleBool() public{
        isTrue = !isTrue;
    }
}