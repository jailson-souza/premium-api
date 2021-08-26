import { RepositoryBaseInterface } from "@api/base/interface/repository-base-interface";
import { Address } from "../address-entity";
import { AddressReferenceEnum } from "../enum/address-reference-enum";

export interface AddressRepositoryInterface extends RepositoryBaseInterface<Address> {
    getByReferenceId(reference: AddressReferenceEnum, referenceId: number): Promise<Address[]>;
}
