"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionController_1 = require("../controllers/transactionController");
const sanitizeInputs_1 = require("../middlewares/sanitizeInputs");
const validateTransaction_1 = require("../middlewares/validateTransaction");
const router = (0, express_1.Router)();
router.post('/transaction', validateTransaction_1.validateTransaction, sanitizeInputs_1.sanitizeInputs, transactionController_1.addTransaction);
exports.default = router;
