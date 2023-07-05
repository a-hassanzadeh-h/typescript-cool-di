import {ITodoService} from "./ITodoService";
import {Todo} from "../entity/Todo";
import {ITodoRepository, TODO_REPOSITORY_TOKEN} from "../repository/ITodoRepository";
import {Autowired, Bean} from "typescript-cool-di";

@Bean()
export class TodoServiceStrategy implements ITodoService {


    constructor(@Autowired(TODO_REPOSITORY_TOKEN) private repository: ITodoRepository) {
        console.log('repo', this.repository)

    }

    public fetchAll(): Array<Todo> {
        return this.repository.getAll();
    }

    public sayHi(): void {
        console.log('Hi...');
    }
}
