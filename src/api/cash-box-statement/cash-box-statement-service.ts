import { ServiceBase } from "@api/base/service-base";
import { CashBoxStatement } from "./cash-box-statement-entity";
import { CashBoxStatementServiceInterface } from "./interface/cash-box-statement-service-interface";
import { StatementTypeEnum } from "./enum/statement-type-enum";
export class CashBoxStatementService extends ServiceBase<CashBoxStatement> implements CashBoxStatementServiceInterface {
    constructor({ cashboxstatementRepository }) {
        super(cashboxstatementRepository);
    }
    async create(data: CashBoxStatement): Promise<CashBoxStatement> {
        if (data.type === StatementTypeEnum.Output) {
            data.transactionAmount = Math.abs(data.transactionAmount) * -1;
        }

        if (data.type === StatementTypeEnum.Input) {
            data.transactionAmount = Math.abs(data.transactionAmount);
        }

        return await this.repository.create(data);
    }
}
