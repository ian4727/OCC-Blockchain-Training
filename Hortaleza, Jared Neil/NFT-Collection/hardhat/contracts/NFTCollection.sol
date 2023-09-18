// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

// IPFS = Interplanetary File System

contract NFTCollection is ERC721Enumerable, Ownable {
    using Strings for uint256;
    string _baseTokenURI; // store the base URI for the token metadata
    uint256 public _price = 0.01 ether; // price of NFT in ether for minting NFT
    bool public _paused; // if minting is paused
    uint256 public maxTokenIds = 10; // amount of tokens mintable
    uint256 public tokenIds; // current amount of minted tokens

    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract currently paused");
        _;
    }

    constructor(string memory baseURI) ERC721("MyNFTCollection", "MNC") {
        _baseTokenURI = baseURI;
    }

    function mint() public payable onlyWhenNotPaused {
        // check if the maximum token limit has been reached
        require(
            tokenIds < maxTokenIds,
            "The maximum amount of NFTs have been minted."
        );
        require(msg.value >= _price, "Incorrect amount of ether sent."); // check amount of ether via msg.value
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds); // mint to sender
    }

    // return baseURI for the token metadata
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    // returns the specific URI for a given token ID, concatenating the baseURI, token ID and file extension.
    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query on nonexistent token."
        );

        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json"))
                : "";
    }

    // pause or unpause the contract
    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    // withdraw the ether from the contract for only the owner
    function withdraw() public onlyOwner {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether.");
    }

    // special solidity functions
    // handle incoming ether transactions
    receive() external payable {} // when ether is sent to the contract

    fallback() external payable {} // when the contract is called without a function name
}
