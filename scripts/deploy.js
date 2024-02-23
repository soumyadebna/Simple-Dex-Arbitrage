// Importing Hardhat's ethers explicitly
const { ethers } = require("hardhat");

async function main() {
    // Check if we can get the list of accounts
    let accounts;
    try {
        accounts = await ethers.getSigners();
    } catch (error) {
        console.error("Failed to get signers:", error);
        process.exit(1); // Exit with error
    }

    if (accounts.length === 0) {
        console.error("No accounts found. Check your network configuration.");
        process.exit(1);
    }

    const deployer = accounts[0];
    console.log(`Deploying contracts with the account: ${deployer.address}`);

    // Attempt to get the contract factory
    let ContractFactory;
    try {
        ContractFactory = await ethers.getContractFactory("Arb");
    } catch (error) {
        console.error("Failed to get ContractFactory for 'Arb':", error);
        process.exit(1);
    }

    console.log("Deploying Arb...");
    const contract = await ContractFactory.deploy();
    
    await contract.deployed();
    console.log(`Arb deployed to: ${contract.address}`);
}

main().then(() => process.exit(0)).catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
});
