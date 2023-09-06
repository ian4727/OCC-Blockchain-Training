// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// public
// private
// internal
// external

// Functions and state variables marked as public can be accessed from anywhere, both within and outside the contract. 
// They generate an automatic getter function, allowing anyone to read their values.

contract PublicVisibility {
    uint256 public publicNumber;

    function setPublicNumber(uint256 newNumber) public {
        publicNumber = newNumber;
    }

    function getPublicNumber() public view returns (uint256){
        return publicNumber;
    }
}