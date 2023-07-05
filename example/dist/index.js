"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AppModule_1 = require("./app/AppModule");
const ITodoRepository_1 = require("./todo/domain/repository/ITodoRepository");
const typescript_cool_di_1 = require("typescript-cool-di");
const ITodoService_1 = require("./todo/domain/usecase/ITodoService");
typescript_cool_di_1.Application.run(AppModule_1.AppModule);
const todoRepository = typescript_cool_di_1.Application.getBean(ITodoRepository_1.TODO_REPOSITORY_TOKEN);
const todoService = typescript_cool_di_1.Application.getBean(ITodoService_1.TODO_SERVICE_TOKEN);
console.log('Todos Repository', todoRepository.getAll());
console.log('Todos Service', todoService.fetchAll());
