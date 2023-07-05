import {TodoModule} from "../todo/TodoModule";
import {UserModule} from "../user/UserModule";
import {Module} from "typescript-cool-di";

@Module({
    import: [TodoModule, UserModule],
    providers: []
})
export class AppModule {
}
