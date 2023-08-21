import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
import xss from 'xss-clean';

export const sanitizeInputs = [
  body('fromAddress').trim().escape(),
  body('toAddress').trim().escape(),
  body('amount').trim().escape(), // Sanitize inputs
  xss(), // Sanitize against cross-site scripting (XSS) attacks
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];