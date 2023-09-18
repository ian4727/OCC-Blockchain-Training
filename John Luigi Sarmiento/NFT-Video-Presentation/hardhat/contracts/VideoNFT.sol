// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract VideoNFT is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string private _baseTokenURI;
    bool public _paused;
    uint256 public maxTokenIds = 8;
    uint256 public tokenIds;
    uint256 private _price = 0.001 ether;

    mapping(uint256 => string) private _videoMetadata; // Store IPFS hashes of video metadata

   
    string private _baseTokenURI;
    bool public _paused;
    uint256 public maxTokenIds = 8;
    uint256 public tokenIds;
    uint256 private _price = 0.001 ether; // Set an appropriate price in ether
    
    modifier onlyWhenNotPause() {
        require(!_paused, "Contract currently paused");
        _;
    }

    constructor(string memory baseURI) ERC721("NFTCOLL", "NFTCOLL") {
        _baseTokenURI = baseURI;
    }

    function mint() public payable onlyWhenNotPause {
        require(tokenIds < maxTokenIds, "The maximum amount of NFTs have been minted");
        require(msg.value >= _price, "Incorrect amount of ether sent");
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory baseURI = _baseURI();
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    function withdraw() public onlyOwner {
        address payable _owner = payable(owner());
        uint256 amount = address(this).balance;
        (bool sent, ) = _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }
}

