import {USER_REPOSITORY_TOKEN} from "./IUserRepository";
import {UserRepositoryStrategy} from "./UserRepositoryStrategy";
import {UserServiceStrategy} from "./UserServiceStrategy";
import {USER_SERVICE_TOKEN} from "./IUserService";
import {Module} from "typescript-cool-di";

@Module({
    import: [],
    providers: [
        {provide: USER_REPOSITORY_TOKEN, useClass: UserRepositoryStrategy},
        {provide: USER_SERVICE_TOKEN, useClass: UserServiceStrategy},

    ]
})
export class UserModule {

}
