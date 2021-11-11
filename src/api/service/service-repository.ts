import { RepositoryBase } from "@api/base/repository-base";
import { ServiceRepositoryInterface } from "@api/service/interface/service-repository-interface";
import { Service } from "@api/service/service-entity";

export class ServiceRepository extends RepositoryBase<Service> implements ServiceRepositoryInterface {
    constructor() {
        super(Service);
    }
}
