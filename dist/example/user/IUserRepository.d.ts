import { User } from "./User";
export declare const USER_REPOSITORY_TOKEN: unique symbol;
export interface IUserRepository {
    getAll: () => Array<User>;
}
