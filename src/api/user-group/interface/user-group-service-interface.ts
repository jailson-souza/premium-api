import { ServiceBaseInterface } from "@api/base/interface/service-base-interface";
import { UserGroup } from "../user-group-entity";

export interface UserGroupServiceInterface extends ServiceBaseInterface<UserGroup> {
    addRule(userGroupId: number, ruleCodes: string[]): Promise<UserGroup>;
    removeRules(userGroupId: number, ruleCodes: string[]): Promise<UserGroup>;
}
