import { ServiceBase } from "@api/base/service-base";
import { SalesServiceInterface } from "./interface/sales-service-interface";
import { Sales } from "./sales.entity";

export class SalesService extends ServiceBase<Sales> implements SalesServiceInterface{
    constructor({ salesRepository }){
        super(salesRepository);
    }
}
