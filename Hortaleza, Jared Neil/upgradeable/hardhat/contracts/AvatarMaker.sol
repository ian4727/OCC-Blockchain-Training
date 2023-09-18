// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AvatarMaker {
    string public name;
    uint8 public age;

    function setName(string memory _name) public returns (string memory) {
        name = _name;
        return name;
    }

    function setAge(uint8 _age) public returns (uint8) {
        age = _age;
        return age;
    }
}
