import {Todo} from "../entity/Todo";

const TODO_SERVICE = 'TODO_SERVICE';
export const TODO_SERVICE_TOKEN = Symbol.for(TODO_SERVICE);


export interface ITodoService {
    fetchAll: () => Array<Todo>;

    sayHi: () => void;
}
