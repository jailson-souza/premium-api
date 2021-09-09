import { ControllerBase } from "@api/base/controller-base";
import { route } from "awilix-express";
import { FormOfPayment } from "./formofpayment-entity";

@route("/formofpayment")
export class FormOfPaymentController extends ControllerBase<FormOfPayment>{
    constructor({ formofpaymentService }) {
        super(formofpaymentService);
    }
}