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
import { TODO_REPOSITORY_TOKEN } from "../repository/ITodoRepository";
import { Autowired, Bean } from "../../../../src/index";
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
    Bean(),
    __param(0, Autowired(TODO_REPOSITORY_TOKEN)),
    __metadata("design:paramtypes", [Object])
], TodoServiceStrategy);
export { TodoServiceStrategy };
