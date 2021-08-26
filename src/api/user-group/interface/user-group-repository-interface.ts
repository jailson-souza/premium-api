import { RepositoryBaseInterface } from "@api/base/interface/repository-base-interface";
import { UserGroup } from "../user-group-entity";

export interface UserGroupRepositoryInterface extends RepositoryBaseInterface<UserGroup> {
    getByName(name: string): Promise<UserGroup>;
    addRule(userGroupId: number, ruleCodes: string[]): Promise<UserGroup>;
    getRules(userGroupId: number): Promise<UserGroup>;
    removeRules(userGroupId: number, ruleCodes: string[]): Promise<UserGroup>;
}
