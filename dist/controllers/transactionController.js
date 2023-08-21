"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTransaction = void 0;
const Transaction_1 = require("../models/Transaction");
const Blockchain_1 = require("../models/Blockchain");
const addTransaction = (req, res) => {
    try {
        const blockchain = Blockchain_1.Blockchain.getInstance();
        const { fromAddress, toAddress, amount } = req.body;
        const id = blockchain.transactions.length + 1;
        const transaction = new Transaction_1.Transaction(id, fromAddress, toAddress, amount);
        blockchain.addTransaction(transaction);
        return res.status(201).json({ message: 'Transaction added successfully.' });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
exports.addTransaction = addTransaction;
