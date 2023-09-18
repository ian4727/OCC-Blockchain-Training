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
        //retrieves balance of the ERC20 token
        return ERC20(tokenAddress).balanceOf(address(this));
    }

    function addLiquidity(uint256 _amount) public payable returns (uint256) {
        uint liquidity; // initialized to 0;

        uint ethBalance = address(this).balance; // eth balance of this contract

        uint tokenReserve = getReserve(); // custom token balance of this contract

        ERC20 token = ERC20(tokenAddress);

        if (tokenReserve == 0) {
            token.transferFrom(msg.sender, address(this), _amount);

            liquidity = ethBalance;

            _mint(msg.sender, liquidity);
        } else {
            uint ethReserve = ethBalance - msg.value;

            uint tokenAmount = (msg.value * tokenReserve) / ethReserve;

            require(
                _amount >= tokenAmount,
                "Amount of tokens is less than the minimum required"
            );

            token.transferFrom(msg.sender, address(this), tokenAmount);

            liquidity = (totalSupply() * msg.value) / ethReserve;

            _mint(msg.sender, liquidity);
        }

        return liquidity;
    }

    function removeLiquidity(uint256 _amount) public returns (uint, uint) {
        require(_amount > 0, "Amount must be greater than 0.");

        uint ethReserve = address(this).balance;
        uint _totalSupply = totalSupply();
        uint ethAmount = (ethReserve * _amount) / _totalSupply;
        uint tokenAmount = (getReserve() * _amount) / _totalSupply;
        _burn(msg.sender, _amount);

        // transfer eth back to the user
        payable(msg.sender).transfer(ethAmount); //payable - converts msg.sender to a payable address
        ERC20(tokenAddress).transfer(msg.sender, tokenAmount); //transfers tokenAmount to the caller

        return (ethAmount, tokenAmount);
    }

    function getAmountOfTokens(
        uint inputAmount,
        uint inputReserve,
        uint outputReserve
    ) public pure returns (uint) {
        require(inputReserve > 0 && outputReserve > 0, "Invalid reserve.");
        uint256 inputAmountWithFee = inputAmount * 99; //99 is fee to input
        uint256 numerator = inputAmountWithFee * outputReserve;
        uint256 denominator = (inputReserve * 100) + inputAmountWithFee;

        return numerator / denominator;
    }

    function ethToMyToken(uint _minTokens) public payable {
        //exchange eth to our custom token
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
            tokenReserve, // reserve in the contract
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
