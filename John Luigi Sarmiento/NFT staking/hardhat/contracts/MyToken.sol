// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";




contract MyToken is ERC20, ERC721Holder,Ownable{
    IERC721 public nft;
    uint256 public  EMISSION_RATE = (50 *10 ** decimals())/1 days ;
      mapping (uint256 =>address) public tokenOwnerOf;  
        // what time did the token staked at/ records the time token was staked 
    mapping(uint256 => uint256) public tokenStakedAt;
    
    constructor(address _nft) ERC20 ("MyToken", "MTK"){
        nft = IERC721(_nft);
    }
// create an external function nam,ed stake that accepts a tokenId of type uint256 as a parameter
    function stake (uint256 tokenId) external {
        nft.safeTransferFrom(msg.sender, address(this), tokenId); // implies that token  is being stakeed to the contract
        //  mapping of the tokenId, keep track of the current owner of each token
  

    tokenOwnerOf[tokenId] = msg.sender;
    tokenStakedAt[tokenId] = block.timestamp;
        
    
    }

//  Declare a calculateToken () function , public and view, that accepts tokenId of type uint256 as parameter and return  uint256
    function calculateToken(uint256 tokenId) public view returns(uint256){
        // calculat the total time duration that has elapsed since the token was staked 
        uint256 timeElapsed = block.timestamp - tokenStakedAt[tokenId];
        // number of tokens earned base on the time elapsed since the token was staked
        return EMISSION_RATE * timeElapsed;
    }

// Declare an unstake() function that can be called from the outside the contract and accepts tokenId of type uint256 as parameter
//  Inside the function, check/ verify if the user is really the owner of the NFT
    function unstake(uint256 tokenId) external {
        require(tokenOwnerOf[tokenId] == msg.sender, "Can't unstake. You are not the owner of this NFT");
        _mint(msg.sender, calculateToken(tokenId)); // mint and  assign tokens based on the  staking  duration
         nft.safeTransferFrom(address(this), msg.sender, tokenId);
        //  delete the mapping that we've stored and clear that token is no longer staked
        delete tokenOwnerOf[tokenId];
        delete tokenStakedAt[tokenId];
    }
}

