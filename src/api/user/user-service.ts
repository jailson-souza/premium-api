import _ from "lodash";
import { ServiceBase } from "@api/base/service-base";
import { UserServiceInterface } from "./interface/user-service-interface";
import { User } from "./user-entity";
import { ErrorUtil } from "@util/error";
import { UserRepositoryInterface } from "./interface/user-repository-interface";
import { Encrypt } from "@util/encrypt";
import { EmployeeRepositoryInterface } from "@api/employee/interface/employee-repository-interface";

export class UserService extends ServiceBase<User> implements UserServiceInterface {
    private userRepository: UserRepositoryInterface;
    private employeeRepository: EmployeeRepositoryInterface;

    constructor({ userRepository, employeeRepository }) {
        super(userRepository);
        this.userRepository = userRepository;
        this.employeeRepository = employeeRepository;
    }

    async create(user: User): Promise<User> {
        this.verifyFields(user);

        const userExist = await this.verifyUserExist(user);
        if (userExist) {
            throw new ErrorUtil.RecordAlreadyExistError("Registro já cadastrado", { user: userExist });
        }

        const employee = await this.employeeRepository.getById(user.employeeId);
        if (!employee) {
            throw new ErrorUtil.PropertyValueInvalidError("Id de funcionário inválido", {
                employeeId: user.employeeId,
            });
        }

        user.userCode = user.email;

        user.password = Encrypt.encryptPassword(user.password);

        const created = await this.repository.create(user);

        if (created.password) {
            delete created.password;
        }

        return created;
    }

    private async verifyUserExist(user: User): Promise<User> {
        const userByEmail = await this.userRepository.getUserByEmail(user.email);
        if (userByEmail) {
            const result = {
                id: userByEmail.id,
                email: userByEmail.email,
                userCode: userByEmail.userCode,
                employeeId: userByEmail.employeeId,
                createdAt: userByEmail.createdAt,
            };
            return result as User;
        }

        const userByEmpolyeeId = await this.userRepository.getUserByEmployeeId(user.employeeId);
        if (userByEmpolyeeId) {
            const result = {
                id: userByEmpolyeeId.id,
                email: userByEmpolyeeId.email,
                userCode: userByEmpolyeeId.userCode,
                employeeId: userByEmpolyeeId.employeeId,
                createdAt: userByEmpolyeeId.createdAt,
            };
            return result as User;
        }

        return undefined;
    }

    private verifyFields(user: User): void {
        const fields = _.keys(user);
        const requiredFields = _.filter(["email", "password", "employeeId"], key => !fields.includes(key));
        if (requiredFields.length > 0) {
            throw new ErrorUtil.PropertyRequiredError("Campos obrigatorios não foram enviados", requiredFields);
        }
    }
}
