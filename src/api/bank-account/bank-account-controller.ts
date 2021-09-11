import { ControllerBase } from "@api/base/controller-base";
import { BankAccount } from "./bank-account-entity";

export class BankAccountController extends ControllerBase<BankAccount>{
    constructor(bankaccountService){
        super(bankaccountService);
    }
}