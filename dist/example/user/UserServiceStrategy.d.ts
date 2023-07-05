import { IUserService } from "./IUserService";
import { User } from "./User";
import { IUserRepository } from "./IUserRepository";
export declare class UserServiceStrategy implements IUserService {
    private repository;
    constructor(repository: IUserRepository);
    getAll(): Array<User>;
}
