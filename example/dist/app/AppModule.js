"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const TodoModule_1 = require("../todo/TodoModule");
const UserModule_1 = require("../user/UserModule");
const typescript_cool_di_1 = require("typescript-cool-di");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, typescript_cool_di_1.Module)({
        import: [TodoModule_1.TodoModule, UserModule_1.UserModule],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
