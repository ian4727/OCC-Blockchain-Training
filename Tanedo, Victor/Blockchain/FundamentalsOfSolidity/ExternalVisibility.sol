// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


// Functions marked as external can only be called externally, typically by external contracts or transactions. 
// They cannot be accessed internally or by derived contracts.

contract externalVisibility {
    uint256 public externalNumber;

    function setExternalNumber(uint256 newValue) external {
        externalNumber = newValue;
    }
}