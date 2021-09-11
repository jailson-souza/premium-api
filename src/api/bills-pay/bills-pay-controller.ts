import { ControllerBase } from "@api/base/controller-base";
import { BillsPay } from "./bills-pay-entity";

export class BillsPayController extends ControllerBase<BillsPay>{
    constructor(billspayService){
        super(billspayService);
    }
}
