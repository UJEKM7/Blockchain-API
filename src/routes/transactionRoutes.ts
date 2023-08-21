import { Router } from 'express';
import { addTransaction } from '../controllers/transactionController';
import { sanitizeInputs } from '../middlewares/sanitizeInputs';
import { validateTransaction } from '../middlewares/validateTransaction';

const router = Router();

router.post('/transaction', validateTransaction, sanitizeInputs, addTransaction);

export default router;