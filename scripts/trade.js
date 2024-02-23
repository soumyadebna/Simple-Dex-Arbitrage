const hre = require("hardhat");
const fs = require("fs");
require("dotenv").config();

let config, arb, owner, inTrade = false, balances;
const network = hre.network.name;

if (network === 'aurora') {
    config = require('./../config/aurora.json');
} else if (network === 'fantom') {
    config = require('./../config/fantom.json');
} else {
    throw new Error(`Unsupported network: ${network}`);
}

console.log(`Loaded ${config.routes.length} routes`);

async function setup() {
    [owner] = await hre.ethers.getSigners();
    console.log(`Owner: ${owner.address}`);

    // Ensure ARB_CONTRACT_ADDRESS is provided in your .env file and matches the deployed contract's address
    const arbContractAddress = process.env.ARB_CONTRACT_ADDRESS;
    if (!arbContractAddress) {
        throw new Error("ARB_CONTRACT_ADDRESS not found in environment variables");
    }

    const IArb = await hre.ethers.getContractFactory('Arb');
    arb = await IArb.attach(arbContractAddress);

    balances = {};
    for (let asset of config.baseAssets) {
        const interface = await hre.ethers.getContractFactory('WETH9');
        const assetToken = await interface.attach(asset.address);
        const balance = await assetToken.balanceOf(arbContractAddress);
        console.log(`${asset.sym}: ${hre.ethers.utils.formatEther(balance)} ETH`);
        balances[asset.address] = { sym: asset.sym, balance, startBalance: balance };
    }
}

// Other functions remain unchanged

async function main() {
    await setup();
    await lookForDualTrade();
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
