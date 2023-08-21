"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionRoutes_1 = __importDefault(require("./transactionRoutes"));
const balanceRoutes_1 = __importDefault(require("./balanceRoutes"));
const transactionHistoryRoutes_1 = __importDefault(require("../routes/transactionHistoryRoutes"));
const router = (0, express_1.Router)();
router.use(transactionRoutes_1.default);
router.use(balanceRoutes_1.default);
router.use(transactionHistoryRoutes_1.default);
exports.default = router;
