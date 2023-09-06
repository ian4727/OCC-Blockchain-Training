// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GetterAndSetter{
    string public message;

    function setMessage(string memory NewMessage) public {
        message = NewMessage;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}