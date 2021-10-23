import { EntityBase } from "@api/base/entity-base";
import { CashBoxStatement } from "@api/cash-box-statement/cash-box-statement-entity";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

@Entity()
export class CashBox extends EntityBase {
    @Column()
    nameUser: string;

    @OneToMany(() => CashBoxStatement, cs => cs.CashBox)
    @JoinColumn()
    CashBoxStatement: CashBoxStatement[];
}
