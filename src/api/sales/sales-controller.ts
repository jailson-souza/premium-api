import { ControllerBase } from "@api/base/controller-base";
import { Sales } from "./sales.entity";

export class SalesController extends ControllerBase<Sales> {
    constructor({ salesService }){
        super(salesService);
    }
}
