import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-router-core";
import { SaleItem } from "./sale-item-entity";
@route("/sale-item")
export class SaleItemController extends ControllerBase<SaleItem> {
    constructor({ saleItemService }) {
        super(saleItemService);
    }
}
