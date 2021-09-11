import { EntityBase } from "@api/base/entity-base";
import { ProductGroup } from "@api/product-group/product-group-entity";
import { Column, Entity, ManyToOne, ManyToMany, JoinColumn, Double, OneToMany, JoinTable } from "typeorm";
import { UnitOfMeasurement } from "@api/base/enum/unit-of-measurement-enum";
import { DecimalLiteral } from "@babel/types";
import { Stock } from "@api/stock/stock-entity";
@Entity()
export class Product extends EntityBase {
    @Column()
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

    @Column({ nullable: true }) // Localização física
    physicalLocation?: string;

    @Column({ default: true }) // Movimentar Estoque
    controlStock?: boolean;

    @Column({ default: false }) // Permitir vender Estoque zerado
    sellWithZeroStock?: boolean;

    @Column({ nullable: true }) //
    minimumStock?: number;

    @Column({ default: '0.00', type: "float" })
    costValue?: number;

    @Column({ default: '0.00', type: "float" })
    saleValue?: number;

    @Column({ default: '0.00', type: "float" })
    termValue?: number;

    @Column({ default: '0.00', type: "float" })
    wholesaleValue?: number;

    @ManyToMany(() => Stock)
    @JoinTable({
        name: "product_stock",
        joinColumn: {
            name: "productId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "stockCode",
            referencedColumnName: "id",
        },
    })
    stock?: Stock[];
}
