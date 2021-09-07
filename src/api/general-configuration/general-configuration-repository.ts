import { RepositoryBase } from "@api/base/repository-base";
import { GeneralConfiguration } from "./general-configuration.entity";

export class GeneralConfigurationrRepository extends RepositoryBase<GeneralConfiguration> implements GeneralConfigurationRepositoryInterface{
    constructor(){
        super(GeneralConfiguration);
    }
}
