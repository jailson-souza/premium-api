import { asClass, createContainer } from "awilix";
import { Logger } from "@util/logger";
import { UserRuleService } from "@api/user-rule/user-rule-service";
import { UserRuleRepository } from "@api/user-rule/user-rule-repository";
import { CompanyService } from "@api/company/company-service";
import { CompanyRepository } from "@api/company/company-repository";
import { AddressRepository } from "@api/address/address-repository";
import { AddressService } from "@api/address/address-service";
import { EmployeeRepository } from "@api/employee/employee-repository";
import { EmployeeService } from "@api/employee/employee-service";
import { UserGroupService } from "@api/user-group/user-group-service";
import { UserGroupRepository } from "@api/user-group/user-group-repository";
import { UserService } from "@api/user/user-service";
import { UserRepository } from "@api/user/user-repository";
import { AuthService } from "@api/auth/auth-service";
import { AuthRepository } from "@api/auth/auth-repository";
import { PhoneRepository } from "@api/phone/phone-repository";
import { LogService } from "@api/log/log-service";

const definition = {
    // util
    logger: asClass(Logger).singleton(),

    // service
    authService: asClass(AuthService).singleton(),
    userRuleService: asClass(UserRuleService).singleton(),
    userService: asClass(UserService).singleton(),
    companyService: asClass(CompanyService).singleton(),
    addressService: asClass(AddressService).singleton(),
    employeeService: asClass(EmployeeService).singleton(),
    userGroupService: asClass(UserGroupService).singleton(),
    logService: asClass(LogService).singleton(),

    // repository
    authRepository: asClass(AuthRepository).singleton(),
    userRuleRepository: asClass(UserRuleRepository).singleton(),
    userRepository: asClass(UserRepository).singleton(),
    companyRepository: asClass(CompanyRepository).singleton(),
    addressRepository: asClass(AddressRepository).singleton(),
    employeeRepository: asClass(EmployeeRepository).singleton(),
    userGroupRepository: asClass(UserGroupRepository).singleton(),
    phoneRepository: asClass(PhoneRepository).singleton(),
};

const container = createContainer().register(definition);
export default container;
