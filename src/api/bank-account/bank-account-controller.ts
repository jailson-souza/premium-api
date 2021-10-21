import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { BankAccount } from "./bank-account-entity";

@route("/bank-account")
export class BankAccountController extends ControllerBase<BankAccount> {
    constructor({ bankaccountService }) {
        super(bankaccountService);
    }
}
