// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AvatarProxy {
    string public name;
    uint8 public age;
    address public avatarMaker;

    uint8 public strength;
    uint8 public vitality;
    uint8 public magic;
    uint8 public agility;
    uint8 public luck;

    constructor(address _avatarMaker) {
        avatarMaker = _avatarMaker;
    }

    function setCharacterName(
        string memory _name
    ) public returns (string memory) {
        (bool success, bytes memory result) = avatarMaker.delegatecall(
            abi.encodeWithSignature("setName(string)", _name)
        );
        require(success, "The call to the AvatarMaker contract failed");
        name = abi.decode(result, (string));
        return name;
    }

    function setCharacterAge(uint8 _age) public returns (uint8) {
        (bool success, bytes memory result) = avatarMaker.delegatecall(
            abi.encodeWithSignature("setAge(uint8)", _age)
        );
        require(success, "The call to the AvatarMaker contract failed");
        age = abi.decode(result, (uint8));
        return age;
    }

    function setCharacterStats(
        uint8 str,
        uint8 vit,
        uint8 mag,
        uint8 agi,
        uint8 luk
    ) public returns (uint8[5] memory) {
        (bool success, bytes memory result) = avatarMaker.delegatecall(
            abi.encodeWithSignature(
                "setStats(uint8,uint8,uint8,uint8,uint8)",
                str,
                vit,
                mag,
                agi,
                luk
            )
        );
        require(success, "The call to the AvatarMaker contract failed");
        uint8[5] memory stats = abi.decode(result, (uint8[5]));

        strength = stats[0];
        vitality = stats[1];
        magic = stats[2];
        agility = stats[3];
        luck = stats[4];

        return stats;
    }

    function upgradeAvatarMaker(address _avatarMaker) public {
        avatarMaker = _avatarMaker;
    }

    function getAvatarMakerAddress() public view returns (address) {
        return avatarMaker;
    }
}

// 0x98616f37FEB66e8f69AC7e5b2d345b1c1Fe873Da
