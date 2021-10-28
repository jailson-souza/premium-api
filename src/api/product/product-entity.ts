import { EntityBase } from "@api/base/entity-base";
import { ProductGroup } from "@api/product-group/product-group-entity";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { UnitOfMeasurement } from "@api/base/enum/unit-of-measurement-enum";
@Entity()
export class Product extends EntityBase {
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ nullable: true })
    barCode?: string;

    @Column({ nullable: true })
    UnitOfMeasurement?: UnitOfMeasurement;

    @ManyToOne(() => ProductGroup, e => e.id)
    @JoinColumn()
    ProductGroup?: ProductGroup;

    @Column({ nullable: true })
    physicalLocation?: string;

    @Column({ nullable: false, default: true })
    controlStock?: boolean; // Controlar Estoque

    @Column({ nullable: false, default: false })
    sellWithZeroStock?: boolean; // Permitir vender Estoque zerado

    @Column({ nullable: true })
    minimumStock?: number;

    @Column({ default: "0.00", type: "float" })
    costValue: number;

    @Column({ default: "0.00", type: "float" })
    saleValue: number;

    @Column({ default: "0.00", type: "float" })
    termValue: number;

    @Column({ default: "0.00", type: "float" })
    wholesaleValue: number;
}
