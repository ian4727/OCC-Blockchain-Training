//  4.]
//     > Create a public mapping called users that will map an address to a User struct.
//     > Create an external function called createUser. This function should create a new user 
//      and associate it to the msg.sender address in the users mapping. 
//     > The balance of the new user should be set to 100 and the isActive boolean should be set to true.
//     > Ensure that the createUser function is called with an address that is not associated 
//      with an active user. 
    
//     > Create an external function called transfer which takes two parameters: 
//      an address for the recipient and a uint for the amount.
//     > In this function, transfer the amount specified from the balance of the msg.sender 
//      to the balance of the recipient address.
//     > Ensure that both addresses used in the transfer function have active users.
//     > Ensure that the msg.sender has enough in their balance to make the transfer 
//      without going into a negative balance.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Activity4 {
    struct User {
        uint256 balance;
        bool isActive;
    }
    mapping (address => User) public users;

    function createUser() external {
        require(!users[msg.sender].isActive, "User already exists and is active." );
        users[msg.sender] = User(100, true);
    }

    function transfer(address _recipient, uint256 _amount) external {
        require(users[msg.sender].isActive, "Sender is not an active user.");
        require(users[_recipient].isActive, "Recipient is not an active user.");

        require(users[msg.sender].balance >= _amount, "Insufficient balance for the transfer.");

        users[msg.sender].balance -= _amount;
        users[_recipient].balance += _amount;
    }
}
