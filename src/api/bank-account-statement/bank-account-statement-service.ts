import { ServiceBase } from "@api/base/service-base";
import { BankAccountStatement } from "./bank-account-statement-entity";
import { BankAccountStatementServiceInterface } from "./interface/bank-account-statement-service-interface";
import { StatementTypeEnum } from "./enum/statement-type-enum";
export class BankAccountStatementService
    extends ServiceBase<BankAccountStatement>
    implements BankAccountStatementServiceInterface
{
    constructor({ bankaccountstatementRepository }) {
        super(bankaccountstatementRepository);
    }

    async create(data: BankAccountStatement): Promise<BankAccountStatement> {
        if (data.type === StatementTypeEnum.Output) {
            data.transactionAmount = Math.abs(data.transactionAmount) * -1;
        }
        if (data.type === StatementTypeEnum.Input) {
            data.transactionAmount = Math.abs(data.transactionAmount);
        }
        return await this.repository.create(data);
    }
}
