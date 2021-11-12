import { BankAccount } from "@api/bank-account/bank-account-entity";
import { EntityBase } from "@api/base/entity-base";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { StatementTypeEnum } from "./enum/statement-type-enum";

@Entity()
export class BankAccountStatement extends EntityBase {
    @Column({ default: 0.0, type: "float" })
    transactionAmount: number; // Valor transação

    @Column({ type: "enum", enum: StatementTypeEnum })
    type?: StatementTypeEnum;

    @Column({ type: "integer" })
    bankAccountId: number;

    @ManyToOne(() => BankAccount, ba => ba.BankAccountStatement)
    @JoinColumn()
    BankAccount: BankAccount;
}
