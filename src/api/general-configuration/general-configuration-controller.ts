import { ControllerBase } from "@api/base/controller-base";
import { GeneralConfiguration } from "./general-configuration.entity";

export class GeneralConfigurationController extends ControllerBase<GeneralConfiguration>{
    constructor({ generalconfigurationService }) {
        super(generalconfigurationService);
    }

}