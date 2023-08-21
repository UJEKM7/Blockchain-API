"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionHistory = void 0;
const Blockchain_1 = require("../models/Blockchain");
const getTransactionHistory = (req, res) => {
    try {
        const blockchain = Blockchain_1.Blockchain.getInstance();
        const { address } = req.params;
        if (!address)
            return res.status(400).json({ message: "Empty or undefined address parameter value." });
        const transactions = blockchain.getTransactionHistory(address);
        if (!transactions.length)
            return res.status(204).json({ message: "No transactions found." });
        return res.status(200).json({ transactions });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
exports.getTransactionHistory = getTransactionHistory;
