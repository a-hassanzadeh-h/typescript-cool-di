import {IUserService} from "./IUserService";
import {User} from "./User";
import {IUserRepository, USER_REPOSITORY_TOKEN} from "./IUserRepository";
import {Autowired, Bean} from "typescript-cool-di";

@Bean()
export class UserServiceStrategy implements IUserService {

    constructor(@Autowired(USER_REPOSITORY_TOKEN) private repository: IUserRepository){

    }

    public getAll(): Array<User> {
        return this.repository.getAll();
    }
}
