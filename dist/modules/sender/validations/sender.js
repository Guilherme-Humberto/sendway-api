"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSender = void 0;
const EmailValidator = __importStar(require("email-validator"));
const validateSender = (data) => {
    const fieldEmpty = !data.email || !data.title;
    const isValidEmail = EmailValidator.validate(data.email);
    if (fieldEmpty) {
        return {
            status: false,
            message: 'Fields is required'
        };
    }
    if (!isValidEmail) {
        return {
            status: false,
            message: 'Email invalid'
        };
    }
    return { status: true };
};
exports.validateSender = validateSender;
