import { ControllerBase } from "@api/base/controller-base";
import { BillsReceive } from "./bills-receive-entity";

export class BillsReceiveController extends ControllerBase<BillsReceive>{
    constructor(billsreceiveService){
        super(billsreceiveService);
    }
}