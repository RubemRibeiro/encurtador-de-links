"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const URLControler_1 = require("./controler/URLControler");
const MongoConnection_1 = require("./database/MongoConnection");
const api = (0, express_1.default)();
api.use(express_1.default.json());
const database = new MongoConnection_1.MongoConnection();
database.connect();
const urlController = new URLControler_1.URLController();
api.post('/shorten', urlController.shorten);
api.get("/:hash", urlController.redirect);
api.listen(5000, () => console.log('Express is listening'));
//# sourceMappingURL=index.js.map