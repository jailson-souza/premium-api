import { ServiceBase } from "@api/base/service-base";
import { ServiceServiceInterface } from "@api/service/interface/service-service-interface";
import { Service } from "@api/service/service-entity";

export class ServiceService extends ServiceBase<Service> implements ServiceServiceInterface {
    constructor({ ServiceRepository }) {
        super(ServiceRepository);
    }
}
