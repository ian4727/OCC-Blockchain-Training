// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NFTColl is ERC721Enumerable, Ownable {
    using Strings for uint256;
    string _baseTokenURI; //store the base URI for the token metadata
    uint256 public _price = 0.01 ether; //price in ether for minting the NFT
    bool public _paused; //flag that indicates whethere the contract is paused or unpaused [if paused: no new NFTs can be minted]
    uint256 public maxTokenIds = 8; //max number of NFTs that can be minted
    uint256 public tokenIds; //a counter that trackers of the number of NFT's that have been minted

    //restricts certain functions from exceuting when a contract is in a paused state
    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract currently paused");
        _;
    }

    constructor(string memory baseURI) ERC721("PetNFTColl", "PETCOL") {
        _baseTokenURI = baseURI;
    }

    // allws user to mint nft with the specified price
    function mint() public payable onlyWhenNotPaused {
        // check if max token limit has been reached
        require(
            tokenIds < maxTokenIds,
            "The maximum amount of NFTs have been minted"
        );

        // checked if the correct amount of Ether has been sent
        require(msg.value >= _price, "Incorrect amount of ether sent");

        // if the conditions are met, a new token is minted and assigned to the sender
        tokenIds += 1; //increments number of tokens that have been minted
        _safeMint(msg.sender, tokenIds); // safely mint a new token to the sender's address using _safeMint
    }

    //returns the baseuri for the token metadata
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    // returns the specific URI for a given token ID, concatenating the baseURI, token ID and file extension
    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721MetaData: URI query for nonexistent token"
        );
        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
                : "";
    }

    // Allows contract owner to pauce or unpauce the contract.
    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    // Used to withdraw all the ether from the contract. Allows the contract owner to withdraw the contract's balance
    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

    // special function in solidity
    // handle incoming ether transaction
    receive() external payable {} //when ether is sent into the ccontract

    fallback() external payable {} //when the contract is called without a function name
}
