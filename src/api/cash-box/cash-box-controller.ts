import { ControllerBase } from "@api/base/controller-base";
import { CashBox } from "./cash-box-entity";

export class CashBoxController extends ControllerBase<CashBox> {
 constructor(cashboxService){
     super(cashboxService);
 }
}