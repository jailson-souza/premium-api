import { EntityBase } from "@api/base/entity-base";
import { CashBox } from "@api/cash-box/cash-box-entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { StatementTypeEnum } from "./enum/statement-type-enum";
@Entity()
export class CashBoxStatement extends EntityBase {
    @Column({ default: "0.00", type: "float" })
    transactionAmount: number; // Valor transação

    @Column({ type: "integer" })
    cashBoxId: number;

    @Column({ type: "enum", enum: StatementTypeEnum })
    type: StatementTypeEnum;

    @ManyToOne(() => CashBox, cb => cb.CashBoxStatement)
    @JoinColumn()
    CashBox: CashBox;
}
