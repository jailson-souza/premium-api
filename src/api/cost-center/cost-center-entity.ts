import { BaseEntity, Column, Entity } from "typeorm";

@Entity()
export class CostCenter extends BaseEntity{
    @Column()
    name: string;
}