import { Request, Response } from 'express';
import { Blockchain } from '../models/Blockchain';


export const getTransactionHistory = (req: Request, res: Response) => {
  try {
    const blockchain:Blockchain = Blockchain.getInstance();
    const {address} = req.params;
    if(!address) return res.status(400).json({message: "Empty or undefined address parameter value."})
    const transactions = blockchain.getTransactionHistory(address);
    if(!transactions.length) return res.status(204).json({message:"No transactions found."})

    return res.status(200).json({ transactions });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};