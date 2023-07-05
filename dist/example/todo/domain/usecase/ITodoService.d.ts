import { Todo } from "../entity/Todo";
export declare const TODO_SERVICE_TOKEN: unique symbol;
export interface ITodoService {
    fetchAll: () => Array<Todo>;
    sayHi: () => void;
}
