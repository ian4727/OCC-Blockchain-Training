let contractAddress = '0xEfEacf62F94beceE78E6958e3b0EE2c83FCAc201';
let contractAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_whitelistAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "presaleMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amountToMint",
				"type": "uint256"
			}
		],
		"name": "publicMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startPresale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "_totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxTotalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "presaleEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "presaleMinted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "presaleStarted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokensPerAddress",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelist",
		"outputs": [
			{
				"internalType": "contract IWhitelist",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let provider;
let signer;
let contract;

async function getProviderOrSigner() {
    provider = new ethers.providers.Web3Provider(window.ethereum, 80001);
    const { chainId } = await provider.getNetwork();

    if (chainId !== 80001) {
      window.alert("Change the network to Mumbai");
      throw new Error("Change network to Mumbai");
    }

    await provider.send('eth_requestAccounts',[]);
    signer = provider.getSigner();

    contract = new ethers.Contract(
      contractAddress,
      contractAbi,
      signer
    );

    if (signer) {
      const connectBtn = document.querySelector('#connectBtn');
      let address = await signer.getAddress();
      connectBtn.innerHTML = `${address.slice(0,5)}...${address.slice(-4)}`;
    }
};

let presaleStarted;
let presaleEnded;
let presaleEndTime;

async function checkPresale() {
  await getProviderOrSigner();
  presaleStarted = await contract.presaleStarted();

  let _presaleEndTime = await contract.presaleEndTime();
  presaleEndTime = _presaleEndTime * 1000;
  let _currentTime = new Date();
  let currentTime = _currentTime.getTime();

  if (currentTime >= presaleEndTime) {
    presaleEnded = true;
  }

  const notPresaleDiv = document.querySelector('#notPresale');
  const presaleMintDiv = document.querySelector('#presaleMint');
  const publicMintDiv = document.querySelector('#publicMint');

  if (presaleStarted && !presaleEnded) {
    notPresaleDiv.classList.add('hide');
    presaleMintDiv.classList.remove('hide');
  } else if (presaleStarted && presaleEnded) {
    notPresaleDiv.classList.add('hide');
    presaleMintDiv.classList.add('hide');
    publicMintDiv.classList.remove('hide');
  }
}

let totalSupply;

async function checkSupply() {
  await getProviderOrSigner();
  totalSupply = await contract._totalSupply();

  const supplySpan = document.querySelector('#totalSupply');
  supplySpan.innerHTML = totalSupply;

  let symbol = await contract.symbol();
  const symbolSpan = document.querySelector('#symbol');
  symbolSpan.innerHTML = symbol;
}

let owner;

async function checkOwner() {
  await getProviderOrSigner();
  owner = await contract.owner();
  let address = await signer.getAddress();

  const ownerDiv = document.querySelector('#ownerOptions');
  if (owner === address) {
    ownerDiv.classList.remove('hide');
    return true;
  } else {
    ownerDiv.classList.add('hide');
    return false;
  }
}

async function startPresale() {
  try {
    await getProviderOrSigner();
    await contract.startPresale();
    window.alert('Presale has started!');
  } catch (error) {
    window.alert(error.data.message);
  }
  checkPresale();
}

async function presaleMint() {
  try {
    await getProviderOrSigner();
    await contract.presaleMint();
  } catch (error) {
    window.alert(error.data.message);
  }

  checkSupply();
}

async function publicMint() {
  try {
    await getProviderOrSigner();
    let amountToMint = document.querySelector('#amountToMint').value;
    await contract.publicMint(amountToMint);
  } catch (error) {
    window.alert(error.data.message);
  }

  checkSupply();
}

async function withdraw() {
  try {
    await checkOwner();
    await contract.withdraw();
  } catch (error) {
    window.alert(error.data.message);
  }
}

checkPresale();
checkSupply();
checkOwner();

setInterval(() => {
  checkPresale();
  checkSupply();
  checkOwner();
}, 5000);