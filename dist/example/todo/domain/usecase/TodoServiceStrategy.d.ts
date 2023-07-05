import { ITodoService } from "./ITodoService";
import { Todo } from "../entity/Todo";
import { ITodoRepository } from "../repository/ITodoRepository";
export declare class TodoServiceStrategy implements ITodoService {
    private repository;
    constructor(repository: ITodoRepository);
    fetchAll(): Array<Todo>;
    sayHi(): void;
}
