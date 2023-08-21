import { Request, Response } from 'express';
import { Transaction } from '../models/Transaction';
import { Blockchain } from '../models/Blockchain';


export const addTransaction = (req: Request, res: Response) => {
  try {
    const blockchain = Blockchain.getInstance();
    const { fromAddress, toAddress, amount } = req.body;

    const id = blockchain.transactions.length + 1;
    const transaction = new Transaction(id, fromAddress, toAddress, amount);
    blockchain.addTransaction(transaction);

    return res.status(201).json({ message: 'Transaction added successfully.' });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};