// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Exchange is ERC20 {
    address public tokenAddress;

    constructor(address _tokenAddress) ERC20("MyToken LP Token", "MLPT") {
        require(_tokenAddress != address(0), "Cannot be address zero.");
        tokenAddress = _tokenAddress;
    }

    function getReserve() public view returns (uint256) {
        return ERC20(tokenAddress).balanceOf(address(this));
    }

    function addLiquidity(uint256 _amount) public payable returns (uint256) {
        require(_amount > 0, "Amount must be greater than zero");

        uint256 liquidity;
        uint256 ethBalance = address(this).balance;
        // eth balance of the contract
        uint256 tokenReserve = getReserve();
        // tokens of the contract
        ERC20 token = ERC20(tokenAddress); // token value of the contract

        if (tokenReserve == 0) {
            token.transferFrom(msg.sender, address(this), _amount); // transfer from sender to contract address
            liquidity = ethBalance;
            // liquidity equals ethBalance
            _mint(msg.sender, liquidity);
            // mint token to msg sender
        } else {
            uint256 ethReserve = ethBalance - msg.value; // ether sent = msg.value, reserve is amount of eth that can be used in the contract
            uint256 tokenAmount = (msg.value * tokenReserve) / ethBalance; // amount of tokens in the contract
            require(
                _amount >= tokenAmount,
                "Amount of tokens is less than the minimum required."
            );

            token.transferFrom(msg.sender, address(this), tokenAmount); // transfer from sender to contract address
            liquidity = (totalSupply() * msg.value) / ethReserve; // total supply is multiplied by ether sent divided by eth reserve
            _mint(msg.sender, liquidity);
            // mint token to msg sender
        }

        return liquidity;
    }

    function removeLiquidity(uint256 _amount) public returns (uint, uint) {
        require(_amount > 0, "Amount must be greater than 0.");
        uint ethReserve = address(this).balance;
        uint _totalSupply = totalSupply();
        uint ethAmount = (ethReserve * _amount) / _totalSupply; // eth in the contract * amount specified / total supply of tokens
        uint tokenAmount = (getReserve() * _amount) / _totalSupply; // tokens in the contract * amount specified / total supply of tokens

        _burn(msg.sender, _amount); // use an amount from the msg.sender

        // transfer eth back to the user
        payable(msg.sender).transfer(ethAmount);
        // transfer token back to the user
        ERC20(tokenAddress).transfer(msg.sender, tokenAmount);

        return (ethAmount, tokenAmount);
    }

    function getAmountOfTokens(
        uint inputAmount,
        uint inputReserve,
        uint outputReserve
    ) public pure returns (uint) {
        require(inputReserve > 0 && outputReserve > 0, "Invalid reserve.");
        // taking a fee from the input for gas?
        uint256 inputAmountWithFee = inputAmount * 99;
        // inputted amount * outputReserve
        uint256 numerator = inputAmountWithFee * outputReserve;
        // inputted reserve * 100 + input amount with fee
        uint256 denominator = (inputReserve * 100) + inputAmountWithFee;

        return numerator / denominator;
    }

    function ethToMyToken(uint _minTokens) public payable {
        uint256 tokenReserve = getReserve(); // get token reserve
        uint256 tokensBought = getAmountOfTokens(
            msg.value, // input amount
            address(this).balance - msg.value, // reserved amount in the contract
            tokenReserve // output reserve
        );

        require(tokensBought >= _minTokens, "insufficient output amount");
        ERC20(tokenAddress).transfer(msg.sender, tokensBought);
    }

    function myTokenToEth(uint _tokensSold, uint _minEth) public payable {
        uint256 tokenReserve = getReserve();
        uint256 ethBought = getAmountOfTokens(
            _tokensSold, // the token you want to sell back to the contract
            tokenReserve, // reserved tokens in the contract
            address(this).balance - msg.value // output reserve
        );

        require(ethBought >= _minEth, "insufficient output amount");
        ERC20(tokenAddress).transferFrom(
            msg.sender,
            address(this),
            _tokensSold
        );
        payable(msg.sender).transfer(ethBought);
    }
}
