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

To streamline the setup process for both macOS and Windows environments with the updated repository URL (soumyadebna/Simple-Dex-Arbitrage), I'll provide a set of scripts tailored for each operating system. These scripts will automate the cloning of the repository, setting up the environment, deploying the contracts, executing trades, and recovering funds as necessary.

For macOS
Setup Script (setup.sh)
bash
Copy code
#!/bin/bash

# Clone the repository
git clone https://github.com/soumyadebna/Simple-Dex-Arbitrage.git

# Change directory
cd Simple-Dex-Arbitrage

# Rename .env-example.txt to .env and prompt user for private key insertion
mv .env-example.txt .env
echo "Please enter your private key:"
read PRIVATE_KEY
echo "PRIVATE_KEY=$PRIVATE_KEY" >> .env

# Install dependencies
npm install

# Deployment script
echo "Deploying contracts..."
npx hardhat run --network aurora ./scripts/deploy.js

# Prompt to add arbContract deployment address to config/aurora.json
echo "Please add the arbContract deployment address to config/aurora.json manually."
To run this script on macOS:

Open Terminal.
Navigate to the directory where you want to clone the repository.
Create a new file named setup.sh and paste the script above into it.
Make the script executable with chmod +x setup.sh.
Execute the script by running ./setup.sh.
Trade Execution Script (trade.sh)
bash
Copy code
#!/bin/bash

# Assumes you're in the Simple-Dex-Arbitrage directory
npx hardhat run --network aurora ./scripts/trade.js
To execute trades, follow steps 1-4 from the setup script, substituting trade.sh for setup.sh.

Fund Recovery Script (recover.sh)
bash
Copy code
#!/bin/bash

# Assumes you're in the Simple-Dex-Arbitrage directory
npx hardhat run --network aurora ./scripts/recover.js
To recover funds, follow the same steps as for the trade execution script, using recover.sh.

For Windows
Setup Script (setup.bat)
bat
Copy code
@echo off
set /p PRIVATE_KEY="Please enter your private key: "

:: Clone the repository
git clone https://github.com/soumyadebna/Simple-Dex-Arbitrage.git

:: Change directory
cd Simple-Dex-Arbitrage

:: Rename .env-example.txt to .env and insert the private key
rename .env-example.txt .env
echo PRIVATE_KEY=%PRIVATE_KEY% >> .env

:: Install dependencies
npm install

:: Deploy contracts
echo Deploying contracts...
npx hardhat run --network aurora .\scripts\deploy.js

echo Please add the arbContract deployment address to config\aurora.json manually.
To run this script on Windows:

Open Notepad or any text editor.
Paste the script above into the editor.
Save the file as setup.bat in your desired directory.
Double-click setup.bat to run it.
Trade Execution Script (trade.bat)
bat
Copy code
@echo off

:: Assumes you're in the Simple-Dex-Arbitrage directory
npx hardhat run --network aurora .\scripts\trade.js
Save this script as trade.bat following the same steps as setup.bat.

Fund Recovery Script (recover.bat)
bat
Copy code
@echo off

:: Assumes you're in the Simple-Dex-Arbitrage directory
npx hardhat run --network aurora .\scripts\recover.js
Save this script as recover.bat following the same steps as setup.bat.

Note
For both macOS and Windows scripts, it's assumed that you have Git, Node.js, and npm installed on your system.
The scripts prompt you to manually add the arbContract deployment address to config/aurora.json after deployment since this requires manual intervention.
Ensure you have the required permissions to execute these scripts, and you may need to adjust security settings or run terminals as an administrator in Windows or use sudo in macOS for certain operations.




