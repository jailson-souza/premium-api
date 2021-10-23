import { EntityBase } from "@api/base/entity-base";
import { Customer } from "@api/customer/customer-entity";
import { SaleItem } from "@api/sale-item/sale-item-entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Sale extends EntityBase {
    @Column()
    financialRelease: boolean;
    // Lançado no Financeiro

    @Column()
    downStock: boolean;
    // Baixado Estoque

    @OneToMany(() => SaleItem, si => si.id)
    @JoinColumn()
    SaleItem?: SaleItem;

    @Column({ type: "integer" })
    customerId?: number;

    @ManyToOne(() => Customer, c => c.id)
    @JoinColumn()
    Customer?: Customer;
}
