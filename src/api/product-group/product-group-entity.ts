import { EntityBase } from "@api/base/entity-base";
import { Column, Entity, OneToMany, JoinColumn } from "typeorm";
import { Product } from "@api/product/product-entity";
@Entity()
export class ProductGroup extends EntityBase{
    @Column({ unique: true})
    name: string;

    @OneToMany(() => Product, u => u.id)
    @JoinColumn()
    Product?: Product;
}