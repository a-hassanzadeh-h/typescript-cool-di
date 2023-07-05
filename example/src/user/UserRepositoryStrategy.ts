import {IUserRepository} from "./IUserRepository";
import {User} from "./User";
import {Bean} from "typescript-cool-di";

@Bean()
export class UserRepositoryStrategy implements IUserRepository {

    public getAll(): Array<User> {
        return [{id: 1, name: 'steve'}];
    }

}
