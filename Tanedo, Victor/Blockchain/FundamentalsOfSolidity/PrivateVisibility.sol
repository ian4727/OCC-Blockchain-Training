// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Functions and state variables marked as private are only accessible within the current contract. 
// They cannot be accessed from derived contracts or externally.

contract privateVisibility {
    uint256 private privateNumber;

    function setPrivateNumber(uint256 newValue) private {
        privateNumber = newValue;
    }

    function getPrivateNumber() private view returns (uint256) {
        return privateNumber;
    }

    function updatePrivateNumber(uint256 newValue) public {
        setPrivateNumber(newValue);
    }
}
