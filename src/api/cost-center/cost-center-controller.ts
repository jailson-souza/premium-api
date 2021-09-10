import { ControllerBase } from "@api/base/controller-base";
import { CostCenter } from "./cost-center-entity";

export class CostCenterController extends ControllerBase<CostCenter> {
    constructor({costcenterService}){
        super(costcenterService);
    }
}