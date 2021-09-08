import { RepositoryBaseInterface } from "@api/base/interface/repository-base-interface";
import { User } from "@api/user/user-entity";

export interface UserRepositoryInterface extends RepositoryBaseInterface<User> {
    getUserByEmail(email: string): Promise<User>;
    getUserByUserCode(userCode: string): Promise<User>;
    getUserByEmployeeId(employeeId: number): Promise<User>;
}
