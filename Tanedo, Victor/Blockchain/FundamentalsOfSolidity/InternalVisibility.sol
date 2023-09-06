// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// Functions and state variables marked as internal can be accessed only within the current contract and any derived contracts. 
// They are not accessible from external contracts or externally-initiated transactions.
contract BaseContract {
    uint256 internalNumber;

    function setInternalNumber(uint256 newValue) internal {
        internalNumber = newValue;
    }

    function getInternalNumber() internal view returns (uint256){
        return internalNumber;
    }
}

contract DerivedContract is BaseContract{

    function updateInternalNumber(uint256 newValue) public {
        setInternalNumber(newValue);
    }

    function readInternalNumber() public view returns (uint256) {
        return getInternalNumber();
    }
}