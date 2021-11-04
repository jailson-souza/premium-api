import { RepositoryBase } from "@api/base/repository-base";
import { ServiceRepositoryInterface } from "./interface/service-repository-interface";
import { Service } from "./service-entity";

export class ServiceRepository extends RepositoryBase<Service> implements ServiceRepositoryInterface {
    constructor() {
        super(Service);
    }
}
