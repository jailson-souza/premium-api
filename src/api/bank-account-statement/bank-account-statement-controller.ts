import { ControllerBase } from "@api/base/controller-base";
import { BankAccountStatement } from "./bank-account-statement-entity";

export class BankAccountStatementController extends ControllerBase<BankAccountStatement> {
    constructor(bankaccountstatementService){
        super(bankaccountstatementService);
    }
}