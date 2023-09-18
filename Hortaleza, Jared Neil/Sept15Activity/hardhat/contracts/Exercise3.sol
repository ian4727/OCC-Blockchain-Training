// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 3.]
    > Create a public mapping called members which maps an address to a bool. The bool will indicate whether or not the address is currently a member!
    > Create an external function called addMember which takes an address and adds it as a member. You can do this by storing true in the data location corresponding to the address in the members mapping
    > Create an external, view function called isMember which takes an address and returns a bool indicating whether or not the address is a member.
    > Create an external function called removeMember that will take an address and set its corresponding value in the members mapping to false.
 */

contract Exercise3 {
    mapping(address => bool) members;

    function addMember(address member) external {
        members[member] = true;
    }

    function isMember(address member) external view returns (bool) {
        return members[member];
    }

    function removeMember(address member) external {
        members[member] = false;
    }
}
