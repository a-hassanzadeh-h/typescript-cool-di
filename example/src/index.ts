import {AppModule} from "./app/AppModule";
import {ITodoRepository, TODO_REPOSITORY_TOKEN} from "./todo/domain/repository/ITodoRepository";
import {Application} from "typescript-cool-di";
import {ITodoService, TODO_SERVICE_TOKEN} from "./todo/domain/usecase/ITodoService";

Application.run(AppModule);



const todoRepository = Application.getBean<ITodoRepository>(TODO_REPOSITORY_TOKEN)
const todoService = Application.getBean<ITodoService>(TODO_SERVICE_TOKEN)

console.log('Todos Repository',todoRepository.getAll())
console.log('Todos Service',todoService.fetchAll())
