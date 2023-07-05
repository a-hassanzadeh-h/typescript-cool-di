import {Todo} from "../entity/Todo";

const TODO_REPOSITORY = 'TODO_REPOSITORY'

export const TODO_REPOSITORY_TOKEN = Symbol.for(TODO_REPOSITORY);

export interface ITodoRepository {
    getAll: () => Array<Todo>
}
