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
import { CustomerService } from "@api/customer/customer-service";
import { CustomerRepository } from "@api/customer/customer-repository";
import { ProductGroupService } from "@api/product-group/product-group-service";
import { ProductGroupRepository } from "@api/product-group/product-group-repository";
import { ProductRepository } from "@api/product/product-repository";
import { ProductService } from "@api/product/product-service";
import { SaleService } from "@api/sale/sale-service";
import { ProviderRepository } from "@api/provider/provider-repository";
import { ProviderService } from "@api/provider/provider-service";
import { SaleRepository } from "@api/sale/sale-repository";
import { ServiceOrderService } from "@api/service-order/service-order-service";
import { ServiceOrderRepository } from "@api/service-order/service-order-repository";
import { GeneralConfigurationrRepository } from "@api/general-configuration/general-configuration-repository";
import { GeneralConfigurationService } from "@api/general-configuration/general-configuration-service";
import { PurchaseService } from "@api/purchase/purchase-service";
import { PurchaseRepository } from "@api/purchase/purchase-repository";
import { FormOfPaymentRepository } from "@api/formofpayment/formofpayment-repository";
import { FormOfPaymentService } from "@api/formofpayment/formofpayment-service";

const definition = {
    // util
    logger: asClass(Logger).singleton(),
    
    // service
    addressService: asClass(AddressService).singleton(),
    authService: asClass(AuthService).singleton(),
    companyService: asClass(CompanyService).singleton(),
    customerService: asClass(CustomerService).singleton(),
    employeeService: asClass(EmployeeService).singleton(),
    formofpaymentService: asClass(FormOfPaymentService).singleton(),
    generalConfigurationService: asClass(GeneralConfigurationService).singleton(),
    logService: asClass(LogService).singleton(),
    productGroupService: asClass(ProductGroupService).singleton(),
    productService: asClass(ProductService).singleton(),
    providerService: asClass(ProviderService).singleton(),
    purchaseService: asClass(PurchaseService).singleton(),
    saleService: asClass(SaleService).singleton(),
    serviceOrderService: asClass(ServiceOrderService).singleton(),
    userGroupService: asClass(UserGroupService).singleton(),
    userRuleService: asClass(UserRuleService).singleton(),
    userService: asClass(UserService).singleton(),

    // repository
    addressRepository: asClass(AddressRepository).singleton(),
    authRepository: asClass(AuthRepository).singleton(),
    companyRepository: asClass(CompanyRepository).singleton(),
    customerRepository: asClass(CustomerRepository).singleton(),
    employeeRepository: asClass(EmployeeRepository).singleton(),
    formofpayment: asClass(FormOfPaymentRepository).singleton(),
    generalConfigurationRepository: asClass(GeneralConfigurationrRepository).singleton(),
    phoneRepository: asClass(PhoneRepository).singleton(),
    productGroupRepository: asClass(ProductGroupRepository).singleton(),
    productRepository: asClass(ProductRepository).singleton(),
    providerRepository: asClass(ProviderRepository).singleton(), 
    purchaseRepository: asClass(PurchaseRepository).singleton(),
    saleRepository: asClass(SaleRepository).singleton(),
    serviceOrderRepository: asClass(ServiceOrderRepository).singleton(),
    userGroupRepository: asClass(UserGroupRepository).singleton(),
    userRepository: asClass(UserRepository).singleton(),
    userRuleRepository: asClass(UserRuleRepository).singleton(),

};

const container = createContainer().register(definition);
export default container;