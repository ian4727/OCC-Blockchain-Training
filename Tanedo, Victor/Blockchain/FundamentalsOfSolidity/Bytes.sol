// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bytes{
    bytes public myBytes;

    constructor() {
        myBytes = abi.encodePacked("Hello solidity!");
    }

    function updateBytes(string memory _newBytes) public {
        myBytes = abi.encodePacked(_newBytes);
    }
}