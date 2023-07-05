"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoModule = void 0;
require("reflect-metadata");
const TodoRepositoryStrategy_1 = require("./data/repository/TodoRepositoryStrategy");
const ITodoRepository_1 = require("./domain/repository/ITodoRepository");
const ITodoService_1 = require("./domain/usecase/ITodoService");
const TodoServiceStrategy_1 = require("./domain/usecase/TodoServiceStrategy");
const typescript_cool_di_1 = require("typescript-cool-di");
let TodoModule = class TodoModule {
};
TodoModule = __decorate([
    (0, typescript_cool_di_1.Module)({
        import: [],
        providers: [
            { provide: ITodoRepository_1.TODO_REPOSITORY_TOKEN, useClass: TodoRepositoryStrategy_1.TodoRepositoryStrategy },
            { provide: ITodoService_1.TODO_SERVICE_TOKEN, useClass: TodoServiceStrategy_1.TodoServiceStrategy }
        ]
    })
], TodoModule);
exports.TodoModule = TodoModule;
