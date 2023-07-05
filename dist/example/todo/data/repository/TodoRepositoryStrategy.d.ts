import { ITodoRepository } from "../../domain/repository/ITodoRepository";
import { Todo } from "../../domain/entity/Todo";
export declare class TodoRepositoryStrategy implements ITodoRepository {
    constructor();
    getAll(): Array<Todo>;
}
