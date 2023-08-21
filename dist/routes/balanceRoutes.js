"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const balanceController_1 = require("../controllers/balanceController");
const router = (0, express_1.Router)();
router.get('/balance/:address', balanceController_1.getBalance);
exports.default = router;
