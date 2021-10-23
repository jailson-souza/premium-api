import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class SaleItem extends EntityBase {
    @Column({ nullable: false, default: "0.00", type: "float" })
    valueUnitary: number; // valor unitário

    @Column({ nullable: false, default: "0.00", type: "float" })
    quantity: number; // Quantidade
    // qtd item

    // Tipo / unidade
}
