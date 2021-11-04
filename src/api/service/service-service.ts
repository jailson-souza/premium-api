import { ServiceBase } from "@api/base/service-base";
import { ServiceServiceInterface } from "./interface/service-service-interface";
import { Service } from "./service-entity";

export class ServiceService extends ServiceBase<Service> implements ServiceServiceInterface {
    constructor({ ServiceRepository }) {
        super(ServiceRepository);
    }
}
