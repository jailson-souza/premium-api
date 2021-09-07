import { RepositoryBase } from "@api/base/repository-base";
import { SalesRepositoryInterface } from "./interface/sales-repository-interface";
import { Sales } from "./sales.entity";

export class SalesRepository extends RepositoryBase<Sales> implements SalesRepositoryInterface{
    constructor(){
        super(Sales);
    }
}
