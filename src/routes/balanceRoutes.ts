import { Router } from 'express';
import { getBalance } from '../controllers/balanceController';

const router = Router();

router.get('/balance/:address', getBalance);

export default router;