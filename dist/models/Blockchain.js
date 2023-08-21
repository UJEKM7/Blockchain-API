"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
const Block_1 = require("./Block");
const Transaction_1 = require("./Transaction");
class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.transactions = [];
    }
    createGenesisBlock() {
        return new Block_1.Block("", new Transaction_1.Transaction(0, null, "", 0));
    }
    static getInstance() {
        if (!Blockchain.instance) {
            Blockchain.instance = new Blockchain();
        }
        return Blockchain.instance;
    }
    /**
     * Get the latest block in the chain.
     */
    get latestBlock() {
        return this.chain[this.chain.length - 1];
    }
    /**
     * Add a new transaction to the blockchain. The transaction is placed in a new block.
     */
    addTransaction(transaction) {
        const newBlock = new Block_1.Block(this.latestBlock.hash, transaction, Date.now());
        this.chain.push(newBlock);
        this.transactions.push(transaction);
    }
    /**
     * Get the balance of an address by aggregating the amounts in the related transactions.
     */
    getBalance(address) {
        let balance = 0;
        for (const block of this.chain) {
            const { fromAddress, toAddress, amount } = block.transaction;
            if (fromAddress === address) {
                balance -= Number(amount);
            }
            if (toAddress === address) {
                balance += Number(amount);
            }
        }
        return balance;
    }
    getTransactionHistory(address) {
        return this.transactions.filter((transaction) => transaction.fromAddress == address || transaction.toAddress == address);
    }
}
exports.Blockchain = Blockchain;
