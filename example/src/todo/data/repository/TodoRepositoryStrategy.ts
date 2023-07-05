import {ITodoRepository} from "../../domain/repository/ITodoRepository";
import {Todo} from "../../domain/entity/Todo";
import {Bean} from "typescript-cool-di";

@Bean()
export class TodoRepositoryStrategy implements ITodoRepository {
    constructor() {
    }


    getAll(): Array<Todo> {
        return [
            {
                title: 'Find Dependency Injection',
                done: true
            },
            {
                title: 'Test that!',
                done: false
            }
        ]
    }

}
