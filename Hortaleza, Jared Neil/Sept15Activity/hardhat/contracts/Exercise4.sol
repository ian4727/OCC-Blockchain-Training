// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 4.]
    > Create a public mapping called users that will map an address to a User struct.
    > Create an external function called createUser. This function should create a new user and associate it to the msg.sender address in the users mapping. 
    > The balance of the new user should be set to 100 and the isActive boolean should be set to true.
    > Ensure that the createUser function is called with an address that is not associated with an active user. 
    
    > Create an external function called transfer which takes two parameters: an address for the recipient and a uint for the amount.
    > In this function, transfer the amount specified from the balance of the msg.sender to the balance of the recipient address.
    > Ensure that both addresses used in the transfer function have active users.
    > Ensure that the msg.sender has enough in their balance to make the transfer without going into a negative balance.

 */

contract Exercise4 {
    struct User {
        uint256 balance;
        bool isActive;
    }

    mapping(address => User) users;

    function createUser() external {
        require(users[msg.sender].isActive == false, "User is already active!");
        users[msg.sender].balance = 100;
        users[msg.sender].isActive = true;
    }

    function transfer(address recipient, uint256 amount) external {
        require(users[recipient].isActive == true && users[msg.sender].isActive, "Both users should be active members.");
        require(amount < users[msg.sender].balance, "Insufficient Balance to transfer.");

        users[recipient].balance += amount;
        users[msg.sender].balance -= amount;
    }
}
