import { ServiceBase } from "@api/base/service-base";
import { Employee } from "./employee-entity";
import { EmployeeServiceInterface } from "./interface/employee-service-interface";

export class EmployeeService extends ServiceBase<Employee> implements EmployeeServiceInterface {
    constructor({ employeeRepository }) {
        super(employeeRepository);
    }
}
