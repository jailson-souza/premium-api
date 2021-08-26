import { RepositoryBase } from "@api/base/repository-base";
import { UserRepositoryInterface } from "./interface/user-repository-interface";
import { User } from "./user-entity";

export class UserRepository extends RepositoryBase<User> implements UserRepositoryInterface {
    constructor() {
        super(User);
    }

    async getUserByEmail(email: string): Promise<User> {
        return this.db.findOne({ where: { email } });
    }

    async getUserByUserCode(userCode: string): Promise<User> {
        return this.db.findOne({ where: { userCode } });
    }

    async getUserByEmployeeId(employeeId: number): Promise<User> {
        return this.db.findOne({ where: { employeeId } });
    }
}
