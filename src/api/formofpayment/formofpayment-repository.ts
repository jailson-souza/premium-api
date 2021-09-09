import { RepositoryBase } from "@api/base/repository-base";
import { FormOfPayment } from "./formofpayment-entity";
import { FormOfPaymentRepositoryInterface } from "./interface/formofpayment-repository-interface";

export class FormOfPaymentRepository extends RepositoryBase<FormOfPayment> implements FormOfPaymentRepositoryInterface{
    constructor() {
        super(FormOfPayment);
    }
}