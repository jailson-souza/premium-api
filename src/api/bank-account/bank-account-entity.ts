import { BankAccountStatement } from "@api/bank-account-statement/bank-account-statement-entity";
import { EntityBase } from "@api/base/entity-base";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
@Entity()
export class BankAccount extends EntityBase {
    @Column()
    agency?: string;

    @Column()
    account?: string;

    @OneToMany(() => BankAccountStatement, bas => bas.BankAccount)
    @JoinColumn()
    BankAccountStatement: BankAccountStatement[];
}
