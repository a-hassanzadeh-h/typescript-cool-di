"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoServiceStrategy = void 0;
const ITodoRepository_1 = require("../repository/ITodoRepository");
const typescript_cool_di_1 = require("typescript-cool-di");
let TodoServiceStrategy = class TodoServiceStrategy {
    constructor(repository) {
        this.repository = repository;
        console.log('repo', this.repository);
    }
    fetchAll() {
        return this.repository.getAll();
    }
    sayHi() {
        console.log('Hi...');
    }
};
TodoServiceStrategy = __decorate([
    (0, typescript_cool_di_1.Bean)(),
    __param(0, (0, typescript_cool_di_1.Autowired)(ITodoRepository_1.TODO_REPOSITORY_TOKEN)),
    __metadata("design:paramtypes", [Object])
], TodoServiceStrategy);
exports.TodoServiceStrategy = TodoServiceStrategy;
