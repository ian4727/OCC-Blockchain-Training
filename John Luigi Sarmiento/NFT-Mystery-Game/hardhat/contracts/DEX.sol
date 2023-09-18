//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "@openzeppelin/contracts/utils/Strings.sol";

contract DexLoot is ERC721URIStorage {
    uint public boxPrice = 0.001 ether; //represents the price of a sing lootbox in Ether
    uint public maxItems = 35; //specifies the maximum number of items that can be minted from the loot box
    mapping(address => uint) public boxes; // associate the number of lootboxes owned by each address

    constructor() ERC721("Dex", "MAW") {}

    // internal view function that returns the base URI for the token metadata
    function _baseURI() internal view virtual override returns (string memory) {
        return "ipfs://QmYG4p56PusVwBAzCHGzfcDz4e7tdsqDnBBwAgRGuayZzM/1.jpg";
    }

    // generates the tokenURI for a specific tokenID by appending the baseURI with the tokenID and ".json"
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
        // check that the user has sent the correct amount of ether
        require(msg.value >= boxPrice, "Incorrect amount of ether sent");
        // if the user has sent the correct amount, the function increments the boxes mapping to indicate that the user now owns one Lootbox
        boxes[msg.sender]++;
    }

    // allows users who own a lootbox to open it and receive the random item
    function openBox() public {
        // check if the sender owns at least one lootbox
        require(boxes[msg.sender] > 0, "Own atleast one loot box");
        //keccak - commonly used for unique identifer, creating secure, for integrity
        uint256 randomTokenId = uint256(
            // use to create a unique identifier
            keccak256(abi.encodePacked(block.timestamp, msg.sender))
        ) % maxItems;
        mintEquipment(tokenURI(randomTokenId), randomTokenId);
    }

    //responsible  for minting NFT and assigns it to the specified address
    function mintEquipment(
        string memory _tokenURI,
        uint256 tokenId
    ) internal returns (uint256) {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        return tokenId;
    }
}
