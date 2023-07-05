import { Application } from "../src";
import { AppModule } from "./app/AppModule";
import { TODO_REPOSITORY_TOKEN } from "./todo/domain/repository/ITodoRepository";
Application.run(AppModule);
const todoRepository = Application.getBean(TODO_REPOSITORY_TOKEN);
console.log('Todos', todoRepository.getAll);
