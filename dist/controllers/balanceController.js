"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalance = void 0;
const Blockchain_1 = require("../models/Blockchain");
const getBalance = (req, res) => {
    try {
        const blockchain = Blockchain_1.Blockchain.getInstance();
        const { address } = req.params;
        if (!address)
            return res.status(400).json({ message: "Empty address value." });
        const balance = blockchain.getBalance(address);
        return res.status(200).json({ balance });
    }
    catch (error) {
        return res.status(400).json({ error: error.message });
    }
};
exports.getBalance = getBalance;
