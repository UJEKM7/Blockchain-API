import { Request, Response } from 'express';
import { Blockchain } from '../models/Blockchain';


export const getBalance = (req: Request, res: Response) => {
  try {
    const blockchain = Blockchain.getInstance();
    const {address} = req.params;
    if(!address) return res.status(400).json({message:"Empty address value."})
    const balance = blockchain.getBalance(address);

    return res.status(200).json({ balance });
  } catch (error: any) {
    return res.status(400).json({ error: error.message });
  }
};