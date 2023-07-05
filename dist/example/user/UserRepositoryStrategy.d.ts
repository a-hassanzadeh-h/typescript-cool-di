import { IUserRepository } from "./IUserRepository";
import { User } from "./User";
export declare class UserRepositoryStrategy implements IUserRepository {
    getAll(): Array<User>;
}
