// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/* 
    1. Set up Hardhat
        a. Create a directory called “calculator”
        b. Go inside that directory
        c. Create a directory called “hardhat”
        d. Go inside that directory
        e. Initialize your project
        f. Install the necessary hardhat development dependencies
        g. Create the hardhat project and choose Javascript
        h. Install the necessary libraries
        i. Open your calculator directory in VSCode
        j. Delete the unnecessary file/s
        k. Create a Solidity file called “Calculator” in the appropriate folder
    2. Start writing your smart contract with the necessary lines of code and import statements
    3. Create the Contract
        a. Define the Calculator contract and declare the state variables result and user.
        b. Implement the solve function to perform basic addition and update the state variables. The function should take in two number (uint) parameters, add them and assign the result to the result state variable. Assign the user calling the function to “user” variable
    4. Compile and Deploy the Calculator contract 
*/

contract Calculator {
    uint256 result;
    address public user;

    function solve(uint256 a, uint256 b) public {
        result = a + b;
        user = msg.sender;
    }
}
