// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/* 
    - msg.data (bytes): complete calldata
    - msg.gas (uint): remaining gas - deprecated in version 0.4.21 and to be replaced by gasleft()
    - msg.sender (address): sender of the message (current call)
    - msg.sig (bytes4): first four bytes of the calldata (i.e. function identifier)
    - msg.value (uint): number of wei sent with the message
*/

contract MusicMysteryNFT is ERC721URIStorage {
    uint public boxPrice = 0.001 ether; // price of a single lootbox in ether
    uint public maxItems = 20; // specifies the maximum number of items that can be minted

    mapping(address => uint) public boxes; // associates lootboxes owned by each address

    constructor() ERC721("MusicMysteryNFT", "MMN") {}

    // returns base URI for token
    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs://QmQ6qvxJ351qfvgSBRDwx354rCk1BU9seRg1YMo6yn1ViP/";
    }

    function tokenURI(
        uint tokenId
    ) public view virtual override returns (string memory) {
        string memory baseURI = _baseURI();
        return
            bytes(baseURI).length > 0
                ? string(
                    abi.encodePacked(
                        baseURI,
                        Strings.toString(tokenId),
                        ".json"
                    )
                )
                : "";
    }

    function buyBox() public payable {
        require(msg.value >= boxPrice, "Incorrect amount of ether sent.");
        boxes[msg.sender]++;
    }

    /*
        Keccak256 is a cryptographic hash function that 
        takes an input of an arbitrary length 
        and produces a fixed-length output of 256 bits. 
        It is the function used to compute the hashes of 
        Ethereum addresses, transaction IDs, 
        and other important values in the Ethereum ecosystem.    
    */

    function openBox() public {
        require(
            boxes[msg.sender] > 0,
            "You have to have at least one loot box."
        );

        uint256 randomTokenId = uint256(
            keccak256(abi.encodePacked(block.timestamp, msg.sender))
        ) % maxItems;
        mintEquipment(tokenURI(randomTokenId), randomTokenId);
        boxes[msg.sender]--;
    }

    function mintEquipment(
        string memory _tokenURI,
        uint256 tokenId
    ) internal returns (uint256) {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return tokenId;
    }

    receive() external payable {}

    fallback() external payable {}
}
