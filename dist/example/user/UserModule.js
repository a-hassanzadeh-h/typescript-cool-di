var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { USER_REPOSITORY_TOKEN } from "./IUserRepository";
import { UserRepositoryStrategy } from "./UserRepositoryStrategy";
import { UserServiceStrategy } from "./UserServiceStrategy";
import { USER_SERVICE_TOKEN } from "./IUserService";
import { Module } from "../../src";
let UserModule = class UserModule {
};
UserModule = __decorate([
    Module({
        import: [],
        providers: [
            { provide: USER_REPOSITORY_TOKEN, useClass: UserRepositoryStrategy },
            { provide: USER_SERVICE_TOKEN, useClass: UserServiceStrategy },
        ]
    })
], UserModule);
export { UserModule };
