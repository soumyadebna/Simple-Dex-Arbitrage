# Simple-Dex-Arbitrage
This codebase was developed as part of an intermediate tutorial on Solidity. It is designed to introduce the concept of decentralized exchange (DEX) arbitrage.

Important Update
Please be aware that Aurora on the Near Protocol has implemented gas/transaction fees. Consequently, executing transactions on this chain requires a small amount of ETH in the transaction initiator's wallet to cover these fees.

Disclaimer
The provided code is intended solely for educational purposes. It has not been audited and is not suitable for conducting financial transactions. It should be used as a basis for experimentation and developing your own trading strategies. Please note, technical support is not available for issues such as funds being stuck, so it is advised to thoroughly test the recover.js script before proceeding with any transactions. It is recommended to use a testnet and play money, or only funds that you can afford to lose.

Setup Instructions
Preparing the Environment
Start by editing the file named .env-example.txt. Within this file, you need to add a private key. If you do not have one, you can create it using a provided script.
Proceed to build the project using the commands outlined below. These steps are applicable for both macOS and Windows environments.
Building and Deployment
Clone the repository to your local machine.
Change into the directory of the cloned repository.
Rename .env-example.txt to .env.
Install the necessary dependencies.
Deploy the smart contract to the Aurora network using the Hardhat tool.
After deploying the contract, you will need to add the deployment address of the arbContract to a configuration file and adjust the base assets. Additionally, ensure that the necessary funds are transferred to the arbContract address.

Executing Trades
To initiate trading operations, execute the following command. This will run the trading script on the Aurora network.

Recovering Funds
In case you need to recover funds, a specific script is provided for this purpose. Execute the command below to run the recovery script on the Aurora network.

Additional Information
For more information and tutorials on Solidity, consider exploring further resources and guides available online.
