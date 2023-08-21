import { Request, Response, NextFunction } from 'express';

export const validateTransaction = (req: Request, res: Response, next: NextFunction) => {
  const { fromAddress, toAddress, amount } = req.body;

  if (!fromAddress || !toAddress || !amount) {
    let missingField = []
    if(!fromAddress){
      missingField.push('fromAddress')
    }
    if(!toAddress){
      missingField.push('toAddress');
    }
    if(!amount){
      missingField.push('amount');
    }
    return res.status(400).json({ error: `Missing required field(s): ${missingField}`});
  }

  next();
};