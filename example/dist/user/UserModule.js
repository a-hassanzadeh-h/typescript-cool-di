"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const IUserRepository_1 = require("./IUserRepository");
const UserRepositoryStrategy_1 = require("./UserRepositoryStrategy");
const UserServiceStrategy_1 = require("./UserServiceStrategy");
const IUserService_1 = require("./IUserService");
const typescript_cool_di_1 = require("typescript-cool-di");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, typescript_cool_di_1.Module)({
        import: [],
        providers: [
            { provide: IUserRepository_1.USER_REPOSITORY_TOKEN, useClass: UserRepositoryStrategy_1.UserRepositoryStrategy },
            { provide: IUserService_1.USER_SERVICE_TOKEN, useClass: UserServiceStrategy_1.UserServiceStrategy },
        ]
    })
], UserModule);
exports.UserModule = UserModule;
