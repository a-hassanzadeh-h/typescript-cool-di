import { Todo } from "../entity/Todo";
export declare const TODO_REPOSITORY_TOKEN: unique symbol;
export interface ITodoRepository {
    getAll: () => Array<Todo>;
}
