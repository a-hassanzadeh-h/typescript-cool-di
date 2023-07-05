"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../../src/index");
const AppModule_1 = require("./app/AppModule");
const ITodoRepository_1 = require("./todo/domain/repository/ITodoRepository");
src_1.Application.run(AppModule_1.AppModule);
const todoRepository = src_1.Application.getBean(ITodoRepository_1.TODO_REPOSITORY_TOKEN);
console.log('Todos', todoRepository.getAll);
