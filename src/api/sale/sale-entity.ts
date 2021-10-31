import { EntityBase } from "@api/base/entity-base";
import { Company } from "@api/company/company-entity";
import { Customer } from "@api/customer/customer-entity";
import { Employee } from "@api/employee/employee-entity";
import { SaleItem } from "@api/sale-item/sale-item-entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { SituationEnum } from "./enum/situation-enum";

@Entity()
export class Sale extends EntityBase {
    @Column({ nullable: false, default: "false" })
    financialRelease: boolean;
    // Lançado no Financeiro

    @Column({ nullable: false, default: "false" })
    downStock: boolean;
    // Baixado Estoque

    // Status
    @Column({ type: "enum", enum: SituationEnum })
    situation: SituationEnum;

    @Column({ nullable: false, default: () => "CURRENT_TIMESTAMP" })
    saleDate?: Date;

    @Column({ nullable: true })
    deliveryDate?: Date;
    // Data Entrega

    @Column({ nullable: false, default: "0.00", type: "float" })
    freightValue?: number;
    // Valor Frete

    @Column({ nullable: false })
    note?: string;

    @OneToMany(() => SaleItem, si => si.id)
    @JoinColumn()
    SaleItem?: SaleItem;

    @Column({ type: "integer" })
    customerId?: number;

    @ManyToOne(() => Customer, c => c.id)
    @JoinColumn()
    Customer?: Customer;

    @Column({ type: "integer" })
    companyId?: number;

    @ManyToOne(() => Company, co => co.id)
    @JoinColumn()
    Company?: Company;

    @Column({ type: "integer" })
    employeeId?: number;

    @ManyToOne(() => Employee, e => e.id)
    @JoinColumn()
    Employee?: Employee;
}
