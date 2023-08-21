"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionHistoryController_1 = require("../controllers/transactionHistoryController");
const router = (0, express_1.Router)();
router.get('/history/:address', transactionHistoryController_1.getTransactionHistory);
exports.default = router;
