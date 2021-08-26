import { EntityBase } from "@api/base/entity-base";
import { StockConfig } from "@api/stock-config/stock-config-entity";
import { UnitOfMeasurement } from "@api/base/enum/unit-of-measurement-enum";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";

@Entity()
export class Stock extends EntityBase {
    @Column()
    unitOfMeasurement: UnitOfMeasurement;

    @Column({ type: "float" })
    quantity: number;

    @Column({ default: false })
    inStock: boolean;

    @OneToOne(() => StockConfig, sc => sc.id)
    @JoinColumn()
    stockConfig: StockConfig;
}
