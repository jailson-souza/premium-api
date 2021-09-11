import { ControllerBase } from "@api/base/controller-base";
import { CashBoxStatement } from "./cash-box-statement-entity";

export class CashBoxStatementController extends ControllerBase<CashBoxStatement>{
    constructor(cashboxstatementService){
        super(cashboxstatementService);
    }
}
