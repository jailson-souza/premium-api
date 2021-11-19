import { Column, Entity } from "typeorm";
import { EntityBase } from "@api/base/entity-base";
import { SituationEnum } from "./enum/situation-enum";

@Entity()
export class ServiceOrder extends EntityBase {
    @Column()
    financialRelease: boolean;
    // Lançado no Financeiro

    @Column()
    downStock: boolean;
    // Baixado Estoque

    @Column({ nullable: false, default: () => "CURRENT_TIMESTAMP" })
    saleDate?: Date;

    @Column({ nullable: true })
    deliveryDate?: Date;
    // Data Entrega

    // Status
    @Column({ type: "enum", enum: SituationEnum })
    situation: SituationEnum;

    @Column({ nullable: false })
    note?: string;
}
