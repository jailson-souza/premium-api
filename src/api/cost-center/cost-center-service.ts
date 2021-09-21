import { ServiceBase } from "@api/base/service-base";
import { CostCenter } from "./cost-center-entity";
import { CostCenterServiceInterface } from "./interface/cost-center-service-interface";

export class CostCenterService extends ServiceBase<CostCenter> implements CostCenterServiceInterface {
    constructor({ costcenterRepository }) {
        super(costcenterRepository);
    }
}
