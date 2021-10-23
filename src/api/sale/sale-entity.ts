import { EntityBase } from "@api/base/entity-base";
import { SaleItem } from "@api/sale-item/sale-item-entity";
import { Column, Entity, JoinColumn, OneToMany } from "typeorm";

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
}
