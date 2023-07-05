import "reflect-metadata";

import {TodoRepositoryStrategy} from "./data/repository/TodoRepositoryStrategy";
import {TODO_REPOSITORY_TOKEN} from "./domain/repository/ITodoRepository";
import {TODO_SERVICE_TOKEN} from "./domain/usecase/ITodoService";
import {TodoServiceStrategy} from "./domain/usecase/TodoServiceStrategy";
import {Module} from "typescript-cool-di";


@Module({
    import: [],
    providers: [
        {provide: TODO_REPOSITORY_TOKEN, useClass: TodoRepositoryStrategy},
        {provide: TODO_SERVICE_TOKEN, useClass: TodoServiceStrategy}
    ]
})
export class TodoModule {
}
