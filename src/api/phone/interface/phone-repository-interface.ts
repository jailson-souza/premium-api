import { RepositoryBaseInterface } from "@api/base/interface/repository-base-interface";
import { PhoneReferenceEnum } from "../enum/phone-reference-enum";
import { Phone } from "../phone-entity";

export interface PhoneRepositoryInterface extends RepositoryBaseInterface<Phone> {
    getByReferenceId(reference: PhoneReferenceEnum, referenceId: number): Promise<Phone[]>;
}
