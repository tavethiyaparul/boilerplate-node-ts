"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var express_1 = require("express");
var express_basic_auth_1 = __importDefault(require("express-basic-auth"));
var swaggerHelpers = require('./swagger-helper');
var swaggerPaths = require('./swagger-paths');
var router = express_1.Router();
router.use('/', express_basic_auth_1.default({
    challenge: true,
    users: (_a = {},
        _a['test'] = 'test',
        _a)
}), swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup({
    swagger: '2.0',
    info: swaggerHelpers.info,
    basePath: "/api/v1",
    tags: swaggerHelpers.tags,
    consumes: ['application/json'],
    produces: ['application/json'],
    paths: swaggerPaths,
    definitions: swaggerHelpers.definitions,
    securityDefinitions: {
        authenticate: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
            description: 'Please provide the valid access token, if you dont have please login and get the token as response!'
        }
    }
}, {
    explorer: true,
    swaggerOptions: {
        displayRequestDuration: true
    }
}));
exports.default = router;
