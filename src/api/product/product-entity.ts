import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class Product extends EntityBase {
    @Column()
    name: string;

    @Column()
    description?: string;

    @Column()
    barCode?: string;

    

}
