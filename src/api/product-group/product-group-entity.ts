import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class ProductGroup extends EntityBase{
    @Column({ unique: true} )
    name: string;
}