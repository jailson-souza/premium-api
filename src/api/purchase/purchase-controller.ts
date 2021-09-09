import { ControllerBase } from "@api/base/controller-base";
import { Purchase } from "./purchase-entity";

export class PurchaseController extends ControllerBase<Purchase> {
    constructor({ purchaseService }){
        super( purchaseService);
    }
}
