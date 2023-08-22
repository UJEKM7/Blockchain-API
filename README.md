# Blockchain-API

This is a simple Express server that implements a blockchain with transaction history, balance tracking, and basic input validation.

## Installation

1. Clone the repository:

   git clone https://github.com/UJEKM7/Blockchain-API.git   
   cd Blockchain-API
   
2. Install the dependencies:

   npm install
   
3. Start the server:

   npm run dev

 The server will run on http://localhost:4000 by default.

# API Endpoints
1. Add Transaction
   
   Adds a new transaction to the blockchain.
 
   URL: /api/transaction
   
   Method: POST
   
   Request Body: json

       {
        "fromAddress": "senderAddress",
        "toAddress": "recipientAddress",
        "amount": 10
       }

   Response: json

       {
         "message": "Transaction added successfully"
       }

3. Get Balance
   Retrieves the balance of an address.

   URL: /api/balance/:address
   
   Method: GET
   
   Response: json

       {
         "balance": 50
       }

3. Get Transaction History
   Retrieves all transactions associated with an address.

   URL: /api/history/:address
   
   Method: GET
   
   Response: json

        {
          "transactions": [
         {
        "fromAddress": "senderAddress",
        "toAddress": "recipientAddress",
        "amount": 10,
        "id": "transactionId"
         },
        // More transactions...
          ]
        }

# Dependencies

express

body-parser

xss 

typescript

express-validator

cors

# Contributing
Contributions are welcome! Please feel free to submit issues and pull requests.
