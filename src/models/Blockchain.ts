import { Block } from './Block';
import { Transaction } from './Transaction';

export class Blockchain {
  public chain: Block[];
  public transactions: Transaction[];
  private static instance: Blockchain;

  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.transactions = [];
  }

  private createGenesisBlock():Block {
    return new Block("", new Transaction(0, null, "", 0));
  }

  public static getInstance(): Blockchain {
    if (!Blockchain.instance) {
      Blockchain.instance = new Blockchain();
    }
    return Blockchain.instance;
  }

  /**
   * Get the latest block in the chain.
   */
  private get latestBlock() {
    return this.chain[this.chain.length - 1];
  }

  /**
   * Add a new transaction to the blockchain. The transaction is placed in a new block.
   */
  public addTransaction(transaction: Transaction) {
    const newBlock = new Block(
      this.latestBlock.hash,
      transaction,
      Date.now()
    );
    this.chain.push(newBlock);
    this.transactions.push(transaction);
  }

  /**
   * Get the balance of an address by aggregating the amounts in the related transactions.
   */
  public getBalance(address: string) {
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

  public getTransactionHistory(address: string) {
    return this.transactions.filter(
      (transaction) => transaction.fromAddress == address || transaction.toAddress == address
    );
  }
}