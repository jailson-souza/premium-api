import { RepositoryBase } from "@api/base/repository-base";
import { SaleItemRepositoryInterface } from "./interface/sale-item-repository-interface";
import { SaleItem } from "./sale-item-entity";

export class SaleItemRepository extends RepositoryBase<SaleItem> implements SaleItemRepositoryInterface {
    constructor() {
        super(SaleItem);
    }
}
