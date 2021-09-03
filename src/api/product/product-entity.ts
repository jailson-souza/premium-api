import { EntityBase } from "@api/base/entity-base";
import { ProductGroup } from "@api/product-group/product-group-entity";
import { Column, Entity, ManyToOne, JoinColumn, Double } from "typeorm";
import { UnitOfMeasurement } from "@api/base/enum/unit-of-measurement-enum";
import { DecimalLiteral } from "@babel/types";
@Entity()
export class Product extends EntityBase {
    @Column()
    name: string;

    @Column()
    description?: string;

    @Column()
    barCode?: string;

    @Column()
    UnitOfMeasurement?: UnitOfMeasurement;
   
    @ManyToOne(() => ProductGroup, e => e.id)
    @JoinColumn()
    ProductGroup = ProductGroup;

    @Column()
    physicalLocation?: string;

    @Column()
    controlStock?: boolean;

    @Column()
    sellWithZeroStock?: boolean;

    @Column()
    minimumStock?: number;

    @Column({ default: '0.00', type: "float" } )
    costValue: number;

    @Column({ default: '0.00', type: "float" } )
    saleValue: number;

    @Column({ default: '0.00', type: "float" })
    termValue: number;

    @Column({ default: '0.00', type: "float" })
    wholesaleValue: number;
}
