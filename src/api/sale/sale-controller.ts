import { ControllerBase } from "@api/base/controller-base";
import { Sale } from "./sale.entity";

export class SaleController extends ControllerBase<Sale> {
    constructor({ saleService }){
        super(saleService);
    }
}
