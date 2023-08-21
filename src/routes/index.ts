import { Router } from 'express';
import transactionRoutes from './transactionRoutes';
import balanceRoutes from './balanceRoutes';
import transactionHistoryRoutes from "../routes/transactionHistoryRoutes"

const router = Router();

router.use(transactionRoutes);
router.use(balanceRoutes);
router.use(transactionHistoryRoutes)

export default router;