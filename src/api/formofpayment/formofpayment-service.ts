import { ServiceBase } from "@api/base/service-base";
import { FormOfPayment } from "./formofpayment-entity";
import { FormOfPaymentServiceInterface } from "./interface/formofpayment-service-interface";

export class FormOfPaymentService extends ServiceBase<FormOfPayment> implements FormOfPaymentServiceInterface{
    constructor({ formofpaymentRepository }) {
        super(formofpaymentRepository);
    }
}
