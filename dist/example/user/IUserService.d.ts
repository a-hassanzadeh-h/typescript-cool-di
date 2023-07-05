import { User } from "./User";
export declare const USER_SERVICE_TOKEN: unique symbol;
export interface IUserService {
    getAll: () => Array<User>;
}
