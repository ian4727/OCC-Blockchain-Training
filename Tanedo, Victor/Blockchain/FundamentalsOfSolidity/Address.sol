// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Address {
    address public contractOwner;

    //  0x73c796e1f3eBae33D42fBc97159B9D1d328cda1D
    function changeOwner(address newOwner) public {
        contractOwner = newOwner;
    }
}