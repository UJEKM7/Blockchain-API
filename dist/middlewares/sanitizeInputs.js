"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeInputs = void 0;
const express_validator_1 = require("express-validator");
const xss_clean_1 = __importDefault(require("xss-clean"));
exports.sanitizeInputs = [
    (0, express_validator_1.body)('fromAddress').trim().escape(),
    (0, express_validator_1.body)('toAddress').trim().escape(),
    (0, express_validator_1.body)('amount').trim().escape(),
    (0, xss_clean_1.default)(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
