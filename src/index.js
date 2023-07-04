"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.Module = exports.Bean = exports.Autowired = void 0;
const Application_1 = require("./Application");
Object.defineProperty(exports, "Application", { enumerable: true, get: function () { return Application_1.Application; } });
const _Autowired_1 = __importDefault(require("./decorators/@Autowired"));
exports.Autowired = _Autowired_1.default;
const _Bean_1 = __importDefault(require("./decorators/@Bean"));
exports.Bean = _Bean_1.default;
const _Module_1 = __importDefault(require("./decorators/@Module"));
exports.Module = _Module_1.default;
