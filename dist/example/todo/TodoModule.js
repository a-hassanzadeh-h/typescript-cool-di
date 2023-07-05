var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import "reflect-metadata";
import { TodoRepositoryStrategy } from "./data/repository/TodoRepositoryStrategy";
import { TODO_REPOSITORY_TOKEN } from "./domain/repository/ITodoRepository";
import { TODO_SERVICE_TOKEN } from "./domain/usecase/ITodoService";
import { TodoServiceStrategy } from "./domain/usecase/TodoServiceStrategy";
import { Module } from "../../src/index";
let TodoModule = class TodoModule {
};
TodoModule = __decorate([
    Module({
        import: [],
        providers: [
            { provide: TODO_REPOSITORY_TOKEN, useClass: TodoRepositoryStrategy },
            { provide: TODO_SERVICE_TOKEN, useClass: TodoServiceStrategy }
        ]
    })
], TodoModule);
export { TodoModule };
