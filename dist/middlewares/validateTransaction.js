"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTransaction = void 0;
const validateTransaction = (req, res, next) => {
    const { fromAddress, toAddress, amount } = req.body;
    if (!fromAddress || !toAddress || !amount) {
        let missingField = [];
        if (!fromAddress) {
            missingField.push('fromAddress');
        }
        if (!toAddress) {
            missingField.push('toAddress');
        }
        if (!amount) {
            missingField.push('amount');
        }
        return res.status(400).json({ error: `Missing required field(s): ${missingField}` });
    }
    next();
};
exports.validateTransaction = validateTransaction;
