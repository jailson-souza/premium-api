import { EntityBase } from "@api/base/entity-base";
import { Sale } from "@api/sale/sale-entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class SaleItem extends EntityBase {
    @Column({ nullable: false, default: "0.00", type: "float" })
    valueUnitary: number; // valor unitário

    @Column({ nullable: false, default: "0.00", type: "float" })
    quantity: number; // Quantidade
    // qtd item

    // Tipo / unidade

    @Column({ type: "integer" })
    saleId: number;

    @ManyToOne(() => Sale, s => s.id)
    @JoinColumn()
    Sale?: Sale;
}
