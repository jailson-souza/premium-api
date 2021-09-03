import { EntityBase } from "@api/base/entity-base";
import { ProductGroup } from "@api/product-group/product-group-entity";
import { Column, Entity, ManyToOne, JoinColumn } from "typeorm";
import { UnitOfMeasurement } from "@api/base/enum/unit-of-measurement-enum";
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
    

}
