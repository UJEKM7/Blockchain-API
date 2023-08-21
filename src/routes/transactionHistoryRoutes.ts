import { Router } from 'express';
import { getTransactionHistory } from '../controllers/transactionHistoryController';

const router = Router();

router.get('/history/:address', getTransactionHistory);

export default router;