import { ServiceBase } from "@api/base/service-base";
import { SaleItemServiceInterface } from "./interface/sale-item-service-interface";
import { SaleItem } from "./sale-item-entity";

export class SaleItemService extends ServiceBase<SaleItem> implements SaleItemServiceInterface {
    constructor({ saleitemRepository }) {
        super(saleitemRepository);
    }
}
