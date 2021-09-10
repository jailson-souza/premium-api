import { ControllerBase } from "@api/base/controller-base";
import { FixedAccount } from "./fixed-account-entity";

export class FixedAccountController extends ControllerBase<FixedAccount>{
    constructor({fixedaccountService}){
        super(fixedaccountService);
    }
}