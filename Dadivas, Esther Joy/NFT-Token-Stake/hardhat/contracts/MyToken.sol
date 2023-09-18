// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract MyToken is ERC20, ERC721Holder, Ownable {
    IERC721 public nft;
    // mapping of the tokenId keep track of the current owner of each token
    mapping(uint256 => address) public tokenOwnerOf;
    // records the time the token was staked
    mapping(uint256 => uint256) public tokenStakedAt;
    uint256 public EMISSION_RATE = (50 * 10 ** decimals()) / 1 days;

    constructor(address _nft) ERC20("MyToken", "MTK") {
        nft = IERC721(_nft);
        // is used to create an interface instance for interacting with a specific ERC-721 compliant smart contract deployed at the provided Ethereum address. It allows you to access and use the functions defined in that ERC-721 contract
    }

    // staking involves locking up tokens to contribute to a blockchain network and, in return, earning rewards or participating in network decisions.
    // Create an external function named stake that accepts a tokenId of type uint256 as parameter
    function stake(uint256 tokenId) external {
        //implies that the token is being staked to the contract
        nft.safeTransferFrom(msg.sender, address(this), tokenId);

        tokenOwnerOf[tokenId] = msg.sender;
        tokenStakedAt[tokenId] = block.timestamp;
    }

    // Declare a calculateToken() function, public and view, that accepts tokenId of type uint256 as parameter and returns uint256
    function calculateToken(uint256 tokenId) public view returns (uint256) {
        // calculate the total time duration that has elapsed since the token was staked
        uint256 timeElapsed = block.timestamp - tokenStakedAt[tokenId];
        // number of tokens earned based on the time elapsed since the token was staked
        return EMISSION_RATE * timeElapsed;
    }

    // Declare an unstaked() function that can be called from outside the contract and accepts tokenId of type uint256 as parameter
    // Inside the function, check/verify if the user is really the owner of the NFT
    function unstaked(uint256 tokenId) public {
        require(
            tokenOwnerOf[tokenId] == msg.sender,
            "Can't unstake. You are not the owner of this NFT."
        );
        // mint and assign tokens based on the staking duration
        _mint(msg.sender, calculateToken(tokenId));
        // transfer ownership back to the caller;
        nft.safeTransferFrom(address(this), msg.sender, tokenId);
        // delete the mapping that we've stored and clear that the token is no longer staked
        delete tokenOwnerOf[tokenId];
        delete tokenStakedAt[tokenId];
    }
}
