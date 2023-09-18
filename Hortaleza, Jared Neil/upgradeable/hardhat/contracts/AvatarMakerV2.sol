// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AvatarMakerV2 {
    string public name;
    uint8 public age;

    uint8 public strength;
    uint8 public vitality;
    uint8 public magic;
    uint8 public agility;
    uint8 public luck;

    function setName(string memory _name) public returns (string memory) {
        name = _name;
        return name;
    }

    function setAge(uint8 _age) public returns (uint8) {
        age = _age;
        return age;
    }

    function setStats(
        uint8 str,
        uint8 vit,
        uint8 mag,
        uint8 agi,
        uint8 luk
    ) public returns (uint8[5] memory) {
        strength = str;
        vitality = vit;
        magic = mag;
        agility = agi;
        luck = luk;

        return [strength, vitality, magic, agility, luck];
    }
}
