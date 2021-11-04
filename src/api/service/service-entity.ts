import { EntityBase } from "@api/base/entity-base";
import { Column, Entity } from "typeorm";

@Entity()
export class Service extends EntityBase {
    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ default: "0.00", type: "float" })
    costValue: number;

    @Column({ default: "0.00", type: "float" })
    saleValue: number;
}
