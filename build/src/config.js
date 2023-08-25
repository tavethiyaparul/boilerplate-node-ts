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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGO_CONFIG = exports.SECRET_KEY = exports.MONGO_URL = exports.PORT = exports.isLocal = void 0;
var path = __importStar(require("path"));
var envType = (_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.trim();
exports.isLocal = envType === 'local';
require('dotenv').config({
    path: path.join(__dirname, '..', ".env" + (exports.isLocal ? '.local' : ''))
});
exports.PORT = process.env.PORT || 3100;
exports.MONGO_URL = process.env.MONGO_URL || '';
exports.SECRET_KEY = process.env.SECRET_KEY || '';
exports.MONGO_CONFIG = {
    poolSize: parseInt(process.env.MONGO_POOL_SIZE || '') || 5
};
